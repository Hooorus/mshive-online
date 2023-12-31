import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        components: {
            systemBar: true,
            registerForm: false,
            loginForm: true,
        },
        // switch menu list
        funcMenuList: {
            funcButton: 1,
        },
        navbar: {
            accountButton: false,
            navbarButtons: 1,
        },
    },
    getters: {},
    mutations: {
        setSystemBarVisible(state) {
            state.components.systemBar = !state.components.systemBar
        },
        setRegisterFormVisible(state) {
            state.components.registerForm = true
            state.components.loginForm = false
        },
        setLoginFormVisible(state) {
            state.components.registerForm = false
            state.components.loginForm = true
        },
        // switch menu list
        switchFuncButton(state, n) {
            state.funcMenuList.funcButton = n
        },
        switchAccountButton(state) {
            state.funcMenuList.funcButton = null
            state.navbar.accountButton = true
        },
        switchNavbarButton(state, n) {
            state.funcMenuList.funcButton = null
            state.navbar.accountButton = false
            state.navbar.navbarButtons = n
        },
    },
    actions: {},
    modules: {},
})
export default store
