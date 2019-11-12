<template>
  <div>
    <btn-tooltip v-if="visible"
      @click="onClick"
      :outline="outline"
      :outlineColor="outlineColor"
      :size="size"
      :color="color"
      :src="src"
      :round="round"
      :label="label"
      :icon="icon"
      :tooltipText="tooltipText"
      :tooltipLocation="tooltipLocation"
    />
  </div>
</template>
<script>
import BtnTooltip from './BtnTooltip'
import BtnImageMixin from '../mixins/btn-image-mixin'
import BtnOrBtnImageMixin from '../mixins/btn-or-btn-image-mixin'
import BtnTooltipMixin from '../mixins/btn-tooltip-mixin'

export default {
  name: 'BtnMain',
  components: {
    BtnTooltip
  },
  mixins: [BtnImageMixin, BtnOrBtnImageMixin, BtnTooltipMixin],
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
}
</script>
