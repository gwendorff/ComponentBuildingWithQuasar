<template>
  <q-page padding class="row justify-center">
    <div style="width: 800px; padding-top: 50px;">
      <div class="row justify-center">
        <btn-main
          v-bind="activeButton"
          @click="alertUser"
        />
      </div>
      <div class="q-pt-md row justify-center">
        <btn-main
          v-bind="buttonForToggle"
          @click="toggleButton"
        />
      </div>
      <div class="q-pt-md row justify-center">
        <p class="caption">{{ captionText }}</p>
      </div>
    </div>
  </q-page>
</template>

<script>
import BtnMain from 'components/BtnMain'

export default {
  name: 'Button4',
  components: {
    BtnMain
  },
  data () {
    return {
      activeButton: {},
      captionText: 'Currently you are logged out! Click the button above to simulate logging in.',
      buttonForToggle: {
        visible: true,
        color: 'primary',
        outline: false,
        round: false,
        icon: 'warning',
        disableTooltip: true,
        label: 'Click to become an admin!'
      },
      buttonNormal: {
        visible: false,
        color: 'positive',
        outline: false,
        round: false,
        size: 'md',
        icon: 'insert_emoticon',
        label: `I'm only for admins!`,
        disableTooltip: false,
        tooltipText: 'Yup, this is a special button for admins only!'
      }
    }
  },
  methods: {
    alertUser () {
      this.$q.notify({
        type: 'positive',
        message: 'The button click works! Yay!'
      })
    },
    toggleButton () {
      if (this.buttonNormal.visible === true) {
        this.buttonNormal.visible = false
        this.buttonForToggle.label = 'Click to become an admin!'
        this.captionText = 'Currently you are logged out! Click the button above to simulate logging in.'
      }
      else {
        this.activeButton = this.buttonNormal
        this.buttonForToggle.label = 'Click to log out'
        this.buttonNormal.visible = true
        this.captionText = 'Now click the button above to simulate logging out.'
      }
    }
  }
}
</script>

<style>
</style>
