export default {
  props: {
    label: {
      type: String,
      default: 'You forgot to add the label prop!'
    },
    icon: {
      type: String
    }
  },
  computed: {
    hasImageURL () {
      console.log(this.src)
      return this.src
    }
  }
}
