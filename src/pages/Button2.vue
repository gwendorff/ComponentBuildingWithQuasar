<template>
  <q-page padding class="row justify-center">
    <div style="width: 800px; padding-top: 50px;">
      <div class="row justify-center">
        <btn-or-btn-image
           :src="activeButton.srcURL"
           :color="activeButton.color"
           :outline="activeButton.outline"
           :outlineColor="activeButton.outlineColor"
           :label="activeButton.label"
           :icon="activeButton.icon"
           :size="activeButton.size"
           @click="alertUser"/>
      </div>
      <div class="q-pt-md row justify-center">
        <p class="caption"> {{ activeButton.captionText }}</p>
      </div>
      <div class="q-pt-md row justify-center">
        <btn-or-btn-image
           :color="togglingButton.color"
           :outline="togglingButton.outline"
           :round="togglingButton.round"
           :label="togglingButton.label"
           :icon="togglingButton.icon"
           :size="togglingButton.size"
           @click="toggleButton"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import BtnOrBtnImage from 'components/BtnOrBtnImage'
export default {
  name: 'Button2',
  components: {
    BtnOrBtnImage
  },
  data () {
    return {
      activeButton: {},
      buttonWithImage: {
        srcURL: '/assets/quasar-logo-full.svg',
        color: 'white',
        outline: true,
        outlineColor: '#1976d2',
        round: false,
        label: `I'm a button with an image!`,
        size: '100',
        captionText: 'A button with an Image! Click it!'
      },
      buttonWithoutImage: {
        color: 'secondary',
        outline: true,
        round: false,
        label: `I'm a regular button now!`,
        icon: 'home',
        captionText: `A normal button with secondary color and a home icon.         
                      And it's the same button, just with different data! Cool, huh?`
      },
      togglingButton: {
        color: 'primary',
        outline: false,
        round: false,
        icon: 'warning',
        size: 'md',
        label: 'Click to toggle'
      }
    }
  },
  methods: {
    alertUser () {
      this.$q.notify({
        type: 'positive',
        message: 'The button click works here too! Yes!'
      })
    },
    toggleButton () {
      this.buttonWithImage === this.activeButton
        ? this.activeButton = this.buttonWithoutImage
        : this.activeButton = this.buttonWithImage
    }
  },
  created () {
    this.activeButton = this.buttonWithImage
  }
}
</script>

<style>
.caption {
  white-space: pre-line;
  text-align: center;
}
</style>
