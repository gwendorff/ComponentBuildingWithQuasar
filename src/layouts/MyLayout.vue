<template>
  <q-layout view="hHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Component Building with Quasar - {{ pageTitle }}
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Our Buttons</q-list-header>
        <q-item to="/button1">
          <q-item-side icon="image" />
          <q-item-main label="Button with an Image"/>
        </q-item>
        <q-item to="/button2">
          <q-item-side icon="radio_button_checked" />
          <q-item-main label="No Image-Normal Button" />
        </q-item>
        <q-item to="/button3">
          <q-item-side icon="chat_bubble" />
          <q-item-main label="Tooltip" />
        </q-item>
        <q-item to="/button4">
          <q-item-side icon="visibility" />
          <q-item-main label="Visualization Logic" />
        </q-item>
        <q-item to="/button-bar">
          <q-item-side icon="space_bar" />
          <q-item-main label="A Button Bar" />
        </q-item>
      </q-list>
    </q-layout-drawer>
    <q-page-container>
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MyLayout',
  computed: {
    leftDrawerOpen: {
      get () {
        return this.$store.state.btnExample.left
      },
      set (val) { this.$store.commit('btnExample/setLeft', val) }
    }
  }
}
</script>

<style>
</style>
