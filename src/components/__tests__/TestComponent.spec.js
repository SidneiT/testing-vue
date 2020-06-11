import { shallowMount } from '@vue/test-utils'
import TestComponent from '../TestComponent.vue'
import Child from '../Child.vue'

describe('TestComponent.vue', () => {
  test('render the child component with the correct props', () => {
    const wrapper = shallowMount(TestComponent)
    const child = wrapper.findComponent(Child)

    expect(child.props().testProp).toBe('some-value')
  })

  test('check if <a> tag has href correct href value', () => {
    const wrapper = shallowMount(TestComponent)
    expect(wrapper.find('a').attributes('href')).toBe('http://www.google.com.br')
  })

  test('<p> tag has a color style with the value of red', () => {
    const wrapper = shallowMount(TestComponent)

    expect(wrapper.find('p').element.style.color).toBe('red')
  })
})
