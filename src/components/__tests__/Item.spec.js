/* eslint-disable no-debugger */
import Item from '../Item.vue'
import { mount, shallowMount } from '@vue/test-utils'

describe('Item.vue', () => {
  test('render items.url', () => {
    const item = {
      url: 10
    }

    const wrapper = shallowMount(Item, {
      propsData: { item }
    })

    return expect(wrapper.text()).toContain(item.url)
  })
})
