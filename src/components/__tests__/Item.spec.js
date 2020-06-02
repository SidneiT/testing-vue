import Item from '../Item.vue'
import { mount } from '@vue/test-utils'

describe('Item.vue', () => {
  test('sanity test', () => {
    const wrapper = mount(Item)

    return expect(wrapper.text()).toContain('item')
  })
})
