<template>
  <q-layout view="hHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="faded"
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
          SiGeS App
          <div slot="subtitle">v{{ $q.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>
          Menu Principal
        </q-list-header>
        <q-item to="/">
          <q-item-side icon="home" />
          <q-item-main label="Inicio" sublabel="página inicial" />
        </q-item>
        <q-item to="/products">
          <q-item-side icon="code" />
          <q-item-main label="Produtos" sublabel="Estoque" />
        </q-item>
        <q-item to="/materials">
          <q-item-side icon="code" />
          <q-item-main label="Materiais" sublabel="Almoxarifados" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'dark',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
</style>
