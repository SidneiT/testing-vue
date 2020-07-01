<template>
  <div :class="{hidden}" :style="{ width: `${percent}%` }" />
</template>

<script>
export default {
  data () {
    return {
      hidden: true,
      percent: 0,
      timer: null
    }
  },
  methods: {
    start () {
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
    }
  }
}
</script>

<style lang="scss" scoped></style>
