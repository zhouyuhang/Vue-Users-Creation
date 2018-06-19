import Vue from 'vue'
import UsersList from '@/components/UsersList'

describe('Testing UsersList', () => {

  it('should display text', () => {
    const Constructor = Vue.extend(UsersList)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('p').textContent)
      .toEqual('Display all the users below:')
  })

  it('should has data function', () => {
    expect(typeof UsersList.data).toBe('function')
  })
})
