<template>
  <button
    type="image"
    v-ripple
    :class="btnClasses"
    :style="btnStyles"
    v-on:click="onClick"
  >
    <span><img :src="src" :style="imgStyles" /></span>
  </button>
</template>

<script>
export default {
  name: 'BtnImage',
  data () {
    return {
    }
  },
  props: {
    src: {
      type: String
    },
    size: {
      type: String,
      default: '60px'
    },
    round: {
      type: Boolean
    },
    color: {
      type: String,
      default: 'white'
    },
    outline: {
      type: Boolean
    },
    outlineColor: {
      type: String
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  },
  computed: {
    shape () {
      return `q-btn-${this.round ? 'round' : 'rectangle'}`
    },
    btnClasses () {
      let cls = [ this.shape, 'btn-image inline relative-position' ]
      cls.push(`bg-${this.color}`)
      if (this.outline) {
        cls.push('q-btn-outline')
      }
      return cls
    },
    imgStyles () {
      let stls = [
        {width: `${this.size - 5}px`},
        {height: `${this.size - 5}px`},
        {padding: this.round ? '2px 2px 0 2px' : '0'}
      ]
      if (this.round) {
        stls.push({ borderRadius: '50%' })
      }
      return stls
    },
    btnStyles () {
      let stls = [
        {width: `${this.size}px`},
        {height: `${this.size}px`},
        {borderColor: `${this.outlineColor}`}
      ]
      return stls
    }
  }
}
</script>
<style>
.btn-image {
  cursor: pointer;
  box-sizing: initial!important;
}
.btn-image:focus {
  outline: 0;
}
</style>
