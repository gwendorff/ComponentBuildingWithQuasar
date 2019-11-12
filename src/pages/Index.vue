<template>
  <q-page class="flex flex-center">
    <btn-tooltip @click="left = !left" v-bind="button"/>
  </q-page>
</template>

<style>
</style>

<script>
import btnTooltip from 'components/BtnTooltip'

export default {
  name: 'PageIndex',
  components: {
    btnTooltip
  },
  data () {
    return {
      button: {
        src: '/assets/quasar-logo-full.svg',
        color: 'white',
        outline: true,
        outlineColor: '#1976d2',
        round: false,
        label: '',
        size: '180',
        tooltipText: 'Click here to open the menu.'
      }
    }
  },
  computed: {
    left: {
      get () {
        return this.$store.state.btnExample.left
      },
      set (val) { this.$store.commit('btnExample/setLeft', val) }
    }
  }
}
</script>
