<template>
  <v-app class="overflow-hidden">
    <v-app-bar
      app
      color="indigo darken-2"
      dark
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Cannan - Tarefa atual</v-toolbar-title>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
<!--       
      <v-btn icon>
        <v-icon>mdi-plus-circle-outline</v-icon>
      </v-btn> -->

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>


    <v-navigation-drawer
      app
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="indigo--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Início</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Outros</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main id="scrolling-techniques-7" class="overflow-y-auto">
      <router-view/>
    </v-main>
<!-- text-box-plus
microphone-plus
plus-circle-outline
plus-thick -->
    <v-speed-dial
      fixed
      v-model="fab"
      :bottom="true"
      :right="true"
      direction="top"
      transition="slide-y-reverse-transition"
    > 
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="indigo darken-3"
          dark
          fab
        >
          <v-icon :class="{'rotate-45': !fab }">
            mdi-close
          </v-icon>
        </v-btn>
      </template>
      <v-btn
        fab
        dark
        small
        color="indigo lighten-1"
        class="invert-image"
      >
        <v-icon>mdi-text-box-plus</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo lighten-1"
      >
        <v-icon>mdi-microphone-plus</v-icon>
      </v-btn>
    </v-speed-dial>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    group: null,
    fab: false,
    //
  }),
};
</script>

<style scoped>
.rotate-45 {
  transform: rotate(45deg);
}

.invert-image {
  transform: scaleY(-1);
}
</style>