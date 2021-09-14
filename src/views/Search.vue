<template>
  <div class="main">
    <div class="search-body">
      <div class="search">
        <i class="fa fa-search"></i>
        <input type="text" v-model="search" placeholder="Search trending..." />
      </div>
      <div class="noItem" v-if="!filteredSearch.length">
        <p>Nothing trending with that name</p>
      </div>
      <div v-else class="trending">
        <div v-for="item in filteredSearch.slice(0, 3)" :key="item">
          <div class="search-header">
            <p>{{ item.category }}</p>
            <p>{{ item.date.toLocaleString() }}</p>
          </div>
          <h4>{{ item.topic }}</h4>
          <p>{{ item.description }}</p>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";

export default {
  data() {
    return {
      search: "",
      searchList: [
        {
          category: "Education",
          topic: "Search one",
          description: "Lorem ipsum dolor sit amet consectetur adipnventore?",
          date: new Date(),
        },
        {
          category: "Programming",
          topic: "Search two",
          description: "Lorem ipsum dolor sit amet consectetur adipnventore?",
          date: new Date(),
        },
        {
          category: "Movies",
          topic: "Search three",
          description: "Lorem ipsum dolor sit amet consectetur adipnventore?",
          date: new Date(),
        },
        {
          category: "Religion",
          topic: "Search four",
          description: "Lorem ipsum dolor sit amet consectetur adipnventore?",
          date: new Date(),
        },
        {
          category: "Celebrities",
          topic: "Search five",
          description: "Lorem ipsum dolor sit amet consectetur adipnventore?",
          date: new Date(),
        },
      ],
    };
  },
  computed: {
    filteredSearch() {
      return this.searchList.filter((item) => {
        return item.topic.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  mounted() {
    const searchItems = this.filteredSearch.slice(0, 3);
  },
  // setup() {
  //   const search = ref("");

  //   const searchList = ref([
  //     {
  //       category: "Education",
  //       topic: "Search one",
  //       description: "Lorem ipsum dolor sit amet consectetur adipnventore?",
  //       date: new Date()
  //     },
  //     {
  //       category: "Programming",
  //       topic: "Search two",
  //       description: "Lorem ipsum dolor sit amet consectetur adipnventore?",
  //       date: new Date()
  //     },
  //     {
  //       category: "Movies",
  //       topic: "Search three",
  //       description: "Lorem ipsum dolor sit amet consectetur adipnventore?",
  //       date: new Date()
  //     },
  //     {
  //       category: "Religion",
  //       topic: "Search four",
  //       description: "Lorem ipsum dolor sit amet consectetur adipnventore?",
  //       date: new Date()
  //     },
  //     {
  //       category: "Celebrities",
  //       topic: "Search five",
  //       description: "Lorem ipsum dolor sit amet consectetur adipnventore?",
  //       date: new Date()
  //     },
  //   ])

  //   return { search, searchList  }
  // },
};
</script>

<style scoped>
*,
body {
  margin: 0;
  padding: 0;
}
.main {
  display: flex;
  /* width: 30%; */
  height: 90vh;
  overflow-y: auto;
}

.search-body {
  margin-left: 20px;
  width: 100%;
}
.search {
  /* position: relative; */
  margin-top: 15px;
  margin-bottom: 50px;
  width: 100%;
}
.search i {
  position: absolute;
  margin-left: 15px;
  margin-top: 12px;
}
.search input[type="text"] {
  border: 1px solid gray;
  border-style: solid;
  border-radius: 20px;
  height: 40px;
  width: 95%;
  text-align: start;
  padding-left: 35px;
}

.search input[type="text"]::placeholder {
  /* padding-left: 35px; */
}
.search input:focus {
  width: 95%;
  outline: none;
  /* padding-left: 35px; */
  /* border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
  margin-top: 30px; */
}
.trending {
  display: grid;
  width: 100%;
  margin-left: 0;
  /* margin-left: 20px;
  margin-right: 20px; */
}
.search-header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.search-header p {
  padding-top: 15px;
}
.search-header p:nth-child(2) {
  margin-right: 20px;
}
.trending hr {
  margin-right: 20px;
}
.test input {
  border-style: solid;
}
</style>