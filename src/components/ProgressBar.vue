<template>
  <div :class="{hidden, error}" :style="{ width: `${percent}%` }" />
</template>

<script>
export default {
  data () {
    return {
      hidden: true,
      error: false,
      percent: 0,
      timer: null
    }
  },
  methods: {
    start () {
      this.error = false
      this.hidden = false
      this.percent = 0
      this.timer = setInterval(() => {
        this.percent++
      }, 100)
    },
    finish () {
      this.hidden = true
      this.percent = 100
      clearInterval(this.timer)
    },
    fail () {
      this.error = true
      this.percent = 100
    }
  }
}
</script>

<style lang="scss" scoped></style>
