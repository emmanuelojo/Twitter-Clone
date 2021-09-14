<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="10" class="pa-4 mx-auto">
        <v-card class="pa-2" id="card">
          <v-img class="post-img" height="500" :src="`/${post.image}`"></v-img>
          <v-card-actions class="pb-0">
            <v-row class="mt-1 mx-1">
              <v-col sm="2">
                <v-btn small outlined color="primary">
                  {{ post.category }}
                </v-btn>
              </v-col>
              <v-col sm="10" class="d-flex justify-end">
                <v-btn color="success" text>Edit</v-btn>
                <v-btn color="red" text>Delete</v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
          <v-card-actions>
            <v-card-subtitle class="headline">
              <h3>{{ post.title }}</h3>
            </v-card-subtitle>
            <v-card-text class="grey--text">
              <p>{{ post.content }}</p>
              <p>{{ post.created }}</p>
            </v-card-text>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import API from "../api";

export default {
  data() {
    return {
      post: [],
    };
  },
  
};
</script>

<style scoped>
 .post-img {
  /* height: 80vh; */
  object-fit: cover;
}
/*
#card .post-img{
  height: 500px;
  object-fit: cover;
} */
</style>