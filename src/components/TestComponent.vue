<template>
  <div>
    <Child testProp="some-value" />
    <a href="http://www.google.com.br">Google</a>
    <p style="color:red;">Paragraph</p>
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  components: {
    Child
  }
}
</script>

<style lang="scss" scoped></style>
