<template>
  <div>
    <item-list />
    <Modal
     v-if="displayModal"
     @close-modal='closeModal'
    />
  </div>
</template>

<script>
import ItemList from './views/ItemList.vue'
import Modal from './components/Modal.vue'

export default {
  components: {
    ItemList,
    Modal
  },
  data () {
    return {
      displayModal: true
    }
  },
  methods: {
    closeModal () {
      this.displayModal = false
    }
  }
}
</script>
