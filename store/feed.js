import Parser from 'rss-parser';

export const state = () => ({
  feeds: [],
  error: '',
  expired: '',
});

export const mutations = {
  setFeed(state, feeds) {
    state.feeds = feeds;
  },
  setExpired(state, expired) {
    state.expired = expired;
  },
  setError(state, error) {
    state.error = error;
  },
};

export const actions = {
  fetchFeed({ commit, state }) {
    commit('setError', '');

    const date = new Date();
    const now = Math.floor(date.getTime() / 1000);
    return new Promise((resolve, reject) => {
      if (state.expired === '' || state.expired < now) {
        const parser = new Parser({
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
        });

        const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
        parser.parseURL(
          `${CORS_PROXY}https://gootablog.com/rss`,
          (err, feeds) => {
            if (err) {
              commit('setError', err);
              commit('setExpired', '');
              reject();
            }

            const feedList = [];
            feeds.items.forEach(item => {
              feedList.push({ title: item.title, url: item.link });
            });
            const tommorow = Math.floor(
              date.setDate(date.getDate() + 1) / 1000
            );
            commit('setExpired', tommorow);
            commit('setFeed', feedList);
            resolve();
          }
        );
      } else {
        resolve();
      }
    });
  },
};
