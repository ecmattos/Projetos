<template>
  <q-page padding>
    <h5>Materiais</h5>
  </q-page>
</template>

<script>
export default {
  mounted(){
    this.$store.dispatch('materials/materialsList')
    console.log('materiais: ', this.$store.state.materials.materials)
  }
}
</script>

<style>
  .layout-padding h5 {
    margin-top: 0;
  }
</style>

