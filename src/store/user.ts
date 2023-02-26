import {defineStore, createPinia} from 'pinia'
import piniaPersist from 'pinia-plugin-persist-uni'
import {User} from './store'

export default  defineStore({
    id: 'user',
    state: (): User => ({
        icon: ""
    }),
    getters: {

    },
    actions: {

    },
    persist: {
        enabled: true
    }
})
