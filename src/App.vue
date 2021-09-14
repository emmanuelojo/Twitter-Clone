<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <i class="fa fa-twitter" id="twitter-logo"></i>
        </v-list-item-content>
      </v-list-item>
      <!-- <v-divider></v-divider> -->

      <v-list dense>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link>
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
              <i :class="`fa -${item.icon}`"></i>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <button class="veet"><a href="/">Veet</a></button>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <i class="fa fa-bars" id="toggleBtn" @click="drawer = !drawer"></i>
      <v-app-bar-nav-icon @click="drawer = !drawer">Home</v-app-bar-nav-icon>
      <i class="fa fa-twitter" id="twitter-menu-logo"></i>
      <!-- <v-toolbar-title>Home</v-toolbar-title> -->
    </v-app-bar>

    <v-main class="main-body">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Home", icon: "fa-home", link: "/" },
      { title: "Explore", icon: "fa-hashtag", link: "/explore" },
      { title: "Notifications", icon: "fa-bell", link: "/notifications" },
      { title: "Messages", icon: "fa-envelope", link: "/messages" },
      { title: "Bookmarks", icon: "fa-bookmark", link: "/bookmarks" },
      { title: "Lists", icon: "fa-list", link: "/lists" },
      { title: "Profile", icon: "fa-user", link: "/profile" },
      { title: "More", icon: "fa-ellipsis-h ", link: "/more" },
    ],
  }),
};
</script>

<style scoped>
*,
body {
  margin: 0;
  padding: 0;
}
button,
input,
select,
textarea {
  border-style: solid;
}
#twitter-logo {
  font-size: 50px;
  color: #5da9dd;
}
.v-app-bar__nav-icon {
  background: none;
  border: none;
  outline: none;
}
.v-app-bar__nav-icon:hover {
  background: none;
  border: none;
  outline: none;
}
#twitter-menu-logo{
  display: none;
    color: #5da9dd;
    margin-left: 25vw;
}
#toggleBtn {
  margin-right: 10px;
  color: #5da9dd;
  cursor: pointer;
  display: none;
}
.veet {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  /* height: 50px; */
  padding: 5px 50px;
  outline: none;
  border: none;
  background: #5da9dd;
  color: #fff;
  border-radius: 20px;
}
.veet a {
  text-decoration: none;
  color: #fff;
}
@media screen and (max-width: 767px) {
  .main-body {
    /* display: grid;
    justify-content: center; */
    /* width: 100vw;
    border: 2px solid red;
    margin-left: 150px; */
  }
  #toggleBtn {
    margin-right: 10px;
    color: #5da9dd;
    cursor: pointer;
    display: block;
  }
  #twitter-menu-logo{
    display: block;
  }
}
</style>
