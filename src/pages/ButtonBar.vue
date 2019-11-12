<template>
  <q-page padding class="row justify-center">
    <div style="width: 800px; padding-top: 50px;">
      <div class="q-pt-md row justify-center">
        <p class="caption">{{ captionText | capitalize }}</p>
      </div>
      <btn-bar :buttons="buttons">
        <template v-for="button in buttons" :slot="button.id" slot-scope="{ button }">
          <div class="q-pr-sm" :key="button.id">
            <btn-main :id="button.id" @click="action(button.id)" v-bind="button"/>
          </div>
        </template>
      </btn-bar>
    </div>
  </q-page>
</template>
<script>
import btnData from '../data/btnData'
import BtnBar from 'components/BtnBar'
import BtnMain from 'components/BtnMain'

export default {
  components: {
    BtnBar,
    BtnMain
  },
  data () {
    return {
      captionText: '',
      caption1: `Click on the "Login" button to simulate logging in.`,
      caption2: `Now that you are logged in, the buttons are different.
                 Click on the Avatar button to log back out.`,
      buttons: btnData
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  methods: {
    action (id) {
      if (id === 1) {
        this.$q.dialog({
          title: 'Logged In',
          message: `You are now logged in. Click "Ok" to continue.`,
          color: 'primary',
          ok: true
        })
        this.buttons[0].visible = false
        this.buttons[1].visible = false
        this.buttons[3].visible = true
        this.captionText = this.caption2
      }
      if (id === 2) {
        this.$q.notify({
          type: 'positive',
          message: 'So you want to Register, eh?'
        })
      }
      if (id === 4) {
        this.$q.dialog({
          title: 'Logged Out',
          message: `You are now logged out. Click "Ok" to continue.`,
          color: 'primary',
          ok: true
        })
        this.buttons[0].visible = true
        this.buttons[1].visible = true
        this.buttons[3].visible = false
        this.captionText = this.caption1
      }
    }
  },
  created () {
    this.captionText = this.caption1
  }
}
</script>

<style>

</style>
