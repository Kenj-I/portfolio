import Parser from 'rss-parser';

export const state = () => ({
  feeds: [],
  error: '',
});

export const mutations = {
  setFeed(state, feeds) {
    state.feeds = feeds;
  },
  setError(state, error) {
    state.error = error;
  },
};

export const actions = {
  fetchFeed({ commit }) {
    commit('setError', '');
    return new Promise((resolve, reject) => {
      const parser = new Parser({
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      });

      const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
      parser.parseURL(
        `${CORS_PROXY}https://gootablog.com/rss`,
        (err, feeds) => {
          if (err) {
            console.log(err);
            commit('setError', err);
            reject();
          }

          const feedList = [];
          feeds.items.forEach(item => {
            feedList.push({ title: item.title, url: item.link });
          });
          commit('setFeed', feedList);
          resolve();
        }
      );
    });
  },
};
