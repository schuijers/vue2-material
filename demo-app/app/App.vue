<template>
  <md-layout class="md-layout--fixed-header">
    <md-layout-header>
      <md-layout-title>vue2-material</md-layout-title>
      <md-layout-spacer/>
      <md-navigation>
        <md-navigation-link href="https://github.com/schuijers/vue2-material">GitHub</md-navigation-link>
      </md-navigation>
    </md-layout-header>
    <md-layout-drawer>
      <md-layout-title>Title</md-layout-title>
      <md-navigation>
        <md-navigation-link href="https://github.com/schuijers/vue2-material">GitHub</md-navigation-link>
      </md-navigation>
    </md-layout-drawer>
    <md-layout-content>
      <div class="app__content">
        Work in progress <md-icon>mood</md-icon>
      </div>
    </md-layout-content>
  </md-layout>
</template>

<style scoped>
  .mdl-layout__content {
    padding: 24px;
  }

  .app__content {
    align-items: center;
    display: flex;
  }

  .app__content > .material-icons {
    margin-left: 4px;
  }
</style>