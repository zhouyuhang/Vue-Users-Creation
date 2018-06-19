import Vue from 'vue'
import User from '@/components/User'
import { shallow } from 'vue-test-utils'

describe('Testing UsersList', () => {
  var cmp
  it('has the messages', () => {
    cmp = shallow(User, {
      data: {
        messages: ['Dive']
      }
    })
    // Within cmp.vm, we can access all Vue instance methods
    expect(cmp.vm.messages).toEqual(['Dive'])
  })

  it('has the expected html structure', () => {
    const Constructor = Vue.extend(User)
    const vm = new Constructor().$mount()
    expect(vm.$el).toMatchSnapshot()
  })
})
