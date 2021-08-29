import axios from "axios";

const state = {
    user_name: 'mark agbjksfalskf asgasjkgbklakslglkasg asglkashglkash',
    auth: []
};

const getters = {
    user_name: state => state.user_name,
    auth: state => state.auth,
};

const actions = {
};

const mutations = {
    SET_AUTH: (state, auth) => {
        try {
            var token = auth.token
            state.auth = {...auth.user, token}
        } catch (error) { state.auth = []; }
    },
    UNSET_AUTH: (state) => {
        state.auth = []
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};
