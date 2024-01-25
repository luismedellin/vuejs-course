import { createStore } from 'vuex'
import counterStore from './counter'



export default createStore({
    module: {
        counter: counterStore
    }
})
