<template>
  <q-page padding class="row justify-center">
    <div style="width: 800px; padding-top: 50px;">
      <div class="row justify-center">
        <btn-image
           :src="activeButton.srcURL"
           :color="activeButton.color"
           :size="activeButton.size"
           :round="activeButton.round"
           :label="activeButton.label"
           :flat="activeButton.flat"
           :outline="activeButton.outline"
           :outlineColor="activeButton.outlineColor"
           @click="alertUser"/>
      </div>
      <div class="q-pt-md row justify-center">
        <p class="caption">{{ activeButton.caption }}</p>
      </div>
      <div class="q-pt-md row justify-center">
        <btn-or-btn-image
           :color="togglingButton.color"
           :outline="togglingButton.outline"
           :round="togglingButton.round"
           :label="togglingButton.label"
           :icon="togglingButton.icon"
           @click="toggleButton"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import BtnImage from 'components/BtnImage'
import BtnOrBtnImage from 'components/BtnOrBtnImage'
export default {
  name: 'Button1',
  components: {
    BtnImage,
    BtnOrBtnImage
  },
  data () {
    return {
      activeButton: {},
      roundButton: {
        srcURL: '/assets/quasar-logo-round.png',
        color: 'white',
        outline: true,
        outlineColor: '#1976d2',
        round: true,
        label: '',
        size: '80',
        caption: `Now it's round, with a different image!`
      },
      squareButton: {
        srcURL: '/assets/quasar-logo-full.svg',
        color: 'blue-2',
        outline: true,
        outlineColor: 'blue-8',
        round: false,
        label: '',
        size: '120',
        caption: 'A square button with an Image. Click it!'
      },
      togglingButton: {
        color: 'primary',
        outline: false,
        round: false,
        icon: 'warning',
        label: 'Click to toggle'
      }
    }
  },
  methods: {
    alertUser () {
      this.$q.notify({
        type: 'positive',
        message: 'The button click works! Oh Yeah!'
      })
    },
    toggleButton () {
      this.squareButton === this.activeButton
        ? this.activeButton = this.roundButton
        : this.activeButton = this.squareButton
    }
  },
  created () {
    this.activeButton = this.squareButton
  },
  meta: {
    pageTitle: 'Button 1 Example'
  }
}
</script>
<style>
</style>
