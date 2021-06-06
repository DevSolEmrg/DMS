//import Vue from 'vue'
//import Vuex from 'vuex'

import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

import users from "./modules/users";


//Vue.use(Vuex)

const store = {
    modules: {
        strict: process.env.NODE_ENV !== "production",
        users
    },
    plugins: [
        createPersistedState({
            //key: "secudata",
            storage: {
                getItem: (key) => ls.get(key),
                setItem: (key, value) => ls.set(key, value),
                removeItem: (key) => ls.remove(key),
            },
        }),
    ]
}

export default store