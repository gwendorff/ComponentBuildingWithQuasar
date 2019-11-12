<template>
  <q-page padding class="row justify-center">
    <div style="width: 800px; padding-top: 50px;">
      <div class="row justify-center">
        <btn-tooltip v-bind="activeButton" @click="alertUser" />
      </div>
      <div class="q-pt-md row justify-center">
        <p class="caption">{{ activeButton.captionText }}</p>
      </div>
      <div class="q-pt-md row justify-center">
        <btn-tooltip
          v-bind="buttonForToggle"
          @click="toggleButton"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import BtnTooltip from 'components/BtnTooltip'
export default {
  name: 'Button3',
  components: {
    BtnTooltip
  },
  data () {
    return {
      buttonIndex: 0,
      activeButton: {},
      buttonData: [{
        name: 'buttonNormal',
        color: 'indigo-3',
        outline: false,
        round: false,
        size: 'md',
        icon: 'radio_button_checked',
        label: 'Just a normal button!',
        captionText: 'A normal button with no Tooltip! Click it!'
      },
      {
        name: 'buttonNormalWithTooltip',
        color: 'positive',
        outline: false,
        round: false,
        size: 'md',
        icon: 'insert_emoticon',
        label: 'Hover over me!',
        tooltipText: 'Woah! A tool tip is born!',
        captionText: 'A normal button with a Tooltip!'
      },
      {
        name: 'buttonNormalWithTooltip',
        src: '/assets/quasar-logo-round.png',
        color: 'white',
        outline: true,
        outlineColor: '#1976d2',
        round: true,
        size: '100',
        captionText: `Now it's a round image button. Hover over it!`,
        tooltipText: 'It has a tooltip too. But, at the bottom!',
        tooltipLocation: 'bottom'
      }],
      buttonForToggle: {
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
        message: 'Again, the button click works! Awesome!'
      })
    },
    toggleButton () {
      if (this.buttonIndex !== this.buttonData.length - 1) {
        this.buttonIndex++
      }
      else {
        this.buttonIndex = 0
      }
      this.activeButton = this.buttonData[this.buttonIndex]
    }
  },
  created () {
    this.activeButton = this.buttonData[this.buttonIndex]
  }
}
</script>

<style>
</style>
