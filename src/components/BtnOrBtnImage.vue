<template>
  <div>
    <btn-image v-if="hasImageURL"
      @click="onClick"
       :src="src"
       :size="size"
       :round="round"
       :outline="outline"
       :outlineColor="outlineColor"
    >
    </btn-image>
    <q-btn v-else
      @click="onClick"
      :outline="outline"
      :size="size"
      :color="color"
      :label="label"
      :icon="icon">
    </q-btn>
  </div>
</template>
<script>
import BtnImage from './BtnImage'
import BtnImageMixin from '../mixins/btn-image-mixin'

export default {
  name: 'BtnOrBtnImage',
  components: {
    BtnImage
  },
  mixins: [BtnImageMixin],
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
      return this.src
    }
  }
}
</script>
