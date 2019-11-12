<template>
  <div>
    <btn-or-btn-image
      @click="onClick"
      :outline="outline"
      :outlineColor="outlineColor"
      :size="size"
      :color="color"
      :src="src"
      :round="round"
      :label="label"
      :icon="icon">
    </btn-or-btn-image>
    <q-tooltip :anchor="anchor" :self="self" :disable="disableTooltip" :offset="[5, 5]">
      {{ tooltipText }}
    </q-tooltip>
  </div>
</template>
<script>
import BtnOrBtnImage from './BtnOrBtnImage'
import BtnOrBtnImageMixin from '../mixins/btn-or-btn-image-mixin'
import BtnImageMixin from '../mixins/btn-image-mixin'

export default {
  name: 'BtnTooltip',
  components: {
    BtnOrBtnImage
  },
  mixins: [BtnImageMixin, BtnOrBtnImageMixin],
  props: {
    tooltipText: {
      type: String,
      default: ''
    },
    tooltipLocation: {
      type: String,
      default: 'top',
      validator: (value) => {
        return ['top', 'bottom'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    disableTooltip () {
      return !this.tooltipText
    },
    anchor () {
      return this.tooltipLocation === 'top'
        ? 'top middle'
        : 'bottom middle'
    },
    self () {
      return this.tooltipLocation === 'top'
        ? 'bottom middle'
        : 'top middle'
    }
  }
}
</script>
