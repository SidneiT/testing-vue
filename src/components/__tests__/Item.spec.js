/* eslint-disable no-debugger */
import Item from '../Item.vue'
import { shallowMount } from '@vue/test-utils'

describe('Item.vue', () => {
  test('render item.url', () => {
    const item = {
      url: 100
    }

    const wrapper = shallowMount(Item, {
      propsData: { item }
    })

    return expect(wrapper.text()).toContain(item.url)
  })

  test('renders a link to the item.url with item.title as text', () => {
    const item = {
      url: 'http://some-url.com',
      title: 'some title'
    }

    const wrapper = shallowMount(Item, { propsData: { item } })
    const a = wrapper.find('a')

    expect(a.text()).toBe(item.title)
    expect(a.attributes('href')).toBe(item.url)
  })

  test('render item.author and item.author', () => {
    const item = {
      author: 'Joseph',
      score: 32
    }

    const wrapper = shallowMount(Item, {
      propsData: { item }
    })

    expect(wrapper.text()).toContain(item.author)
    expect(wrapper.text()).toContain(item.score)
  })
})
