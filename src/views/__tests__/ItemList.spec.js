import { shallowMount } from '@vue/test-utils'
import ItemList from '../ItemList.vue'
import Item from '../../components/Item.vue'

describe('ItemList.vue', () => {
  test('renders an Item for each item in windows.items', async () => {
    window.items = [{}, {}, {}]

    const wrapper = shallowMount(ItemList)
    const items = wrapper.findAllComponents(Item)

    expect(items).toHaveLength(window.items.length)
    await items.wrappers.forEach((wrapper, i) => {
      expect(wrapper.props().item).toBe(window.items[i])
    })
  })
})
