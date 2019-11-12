export default {
  props: {
    src: {
      type: String
    },
    size: {
      type: String
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
  }
}
