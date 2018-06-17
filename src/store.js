import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    users: [
      { 'fullName': 'Alex Zhou' },
      { 'fullName': 'Dennis Johnson' },
      { 'fullName': 'Jack Smith' }
    ]
  }
})
