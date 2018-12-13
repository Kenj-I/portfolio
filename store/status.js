export const state = () => ({
  loading: true,
});

export const getters = {
  loading(state) {
    return state.loading;
  },
};

export const mutations = {
  setLoading(state, loadingStatus) {
    state.loading = loadingStatus;
  },
};

export const actions = {
  setStatus({ commit }, status) {
    commit('setLoading', status);
  },
};
