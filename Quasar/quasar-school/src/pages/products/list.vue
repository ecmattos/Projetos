<template>
  <q-page padding>
    <h5>Produtos em Estoque</h5>
    <q-table
      title="Produtos"
      :columns="columns"
      :data="products"
    />
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          name: 'code',
          field: 'code',
          align: 'left',
          label: 'Código',
          sortable: true
        },
        {
          name: 'description',
          field: 'description',
          align: 'left',
          label: 'Descrição',
          sortable: true
        }
      ]
    }
  },
  computed: {
    products() {
      return this.$store.state.products.products
    }
  },
  mounted(){
    this.$store.dispatch('products/productsList')
  }
}
</script>

<style>
  .layout-padding h5 {
    margin-top: 0;
  }
</style>

