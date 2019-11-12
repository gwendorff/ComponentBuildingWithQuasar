export default {
  props: {
    tooltipText: {
      type: String
    },
    tooltipLocation: {
      type: String,
      default: 'top',
      validator: (value) => {
        return ['top', 'bottom'].indexOf(value) !== -1
      }
    }
  }
}
