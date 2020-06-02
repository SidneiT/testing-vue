import Item from '../Item.vue'
import { mount, shallowMount } from '@vue/test-utils'

describe('Item.vue', () => {
  test('sanity test', () => {
    const wrapper = shallowMount(Item)
    debugger
    return expect(wrapper.text()).toContain('item')
  })
})
