<template>
  <li>
    <a :href="item.url">{{ item.title }}</a>
    <span>{{ item.url }}</span>
    <span>{{ item.score }}</span>
    <span>{{ item.author }}</span>
  </li>
</template>
<script>
export default {
  props: ['item']
}
</script>
