import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  isLogin: boolean
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    isLogin: false
  },
  mutations: {
    setLogin( state, current: boolean ) {
      state.isLogin = current
      sessionStorage.setItem("isLogin", JSON.stringify( current ))
    }
  },
  actions: {
    
  }
})

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key)
}