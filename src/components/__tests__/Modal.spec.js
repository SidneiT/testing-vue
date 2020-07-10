import { shallowMount } from '@vue/test-utils'
import Modal from '../Modal.vue'

describe('Modal.vue', () => {
  test('calls onClose when button is clicked', async () => {
    const wrapper = shallowMount(Modal)

    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('close-modal')).toHaveLength(1)
  })
})
