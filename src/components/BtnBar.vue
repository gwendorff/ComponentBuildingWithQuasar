<template>
  <div class="q-pt-md row justify-center">
    <div v-for="button in buttons" :button="button" :key="button.id">
      <slot class="q-pr-sm" :name="button.id" :button="button"></slot>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    buttons: {
      type: Array,
      required: true
    }
  }
}
</script>
