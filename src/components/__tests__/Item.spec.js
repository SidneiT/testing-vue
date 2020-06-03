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

  test('renders a link to the item.ulr with item.title as text', () => {
    const item = {
      url: 'http://some-url.com',
      title: 'some title'
    }

    const wrapper = shallowMount(Item, { propsData: { item } })
    const a = wrapper.find('a')

    expect(a.text()).toBe(item.title)
    expect(a.attributes('href')).toBe(item.url)
  })
})
