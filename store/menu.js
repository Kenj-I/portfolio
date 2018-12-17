export const state = () => ({
  active: false,
});

export const getters = {
  active(state) {
    return state.active;
  },
};

export const mutations = {
  setStatus(state, status) {
    state.active = status;
  },
};

export const actions = {
  changeStatus({ commit }, status) {
    commit('setStatus', status);
  },
};
