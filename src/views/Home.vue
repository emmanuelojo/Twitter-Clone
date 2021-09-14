<template>
  <div class="hero">
    <div class="main-body">
      <div class="messages-holder">
        <div class="latest">
          <img
            src="@/assets/images/captainAmerica.jpg"
            alt="profile"
            srcset=""
          />
          <form @submit.prevent="sendMsg">
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a qweet here"
                id="floatingTextarea"
                v-model="newMsg"
                maxlength="201"
              ></textarea>
              <label for="floatingTextarea">What's happening?</label>
            </div>

            <div v-if="newMsg === ' ' || newMsg.length > 200" class="col-12">
              <button type="submit" id="sendMsg" disabled>Send</button>
            </div>
            <div v-else class="col-12">
              <button type="submit" id="sendMsg2" class="btn btn-primary">
                Send
              </button>
            </div>
          </form>
          <p>{{ msgCounter - 1 }}/200</p>
        </div>

        <div class="newMessages">
          <div v-for="item in newVeets" :key="item.id">
            <div class="content">
              <img :src="item.profilePic" alt="profile" srcset="" />
              <div class="userContent">
                <div class="user">
                  <h4>{{ item.name }}</h4>
                  <p>{{ "@" + item.username }}</p>
                  <p>{{ item.date }}</p>
                </div>
                <div class="user-msg">
                  <p>{{ item.content }}</p>
                </div>
                <div class="buttons">
                  <i class="fa fa-comment-o"></i>
                  <i class="fa fa-retweet"></i>
                  <i
                    @click="item.liked = !item.liked"
                    class="likes"
                    :class="item.liked ? 'fa fa-heart' : 'fa fa-heart-o'"
                  ></i>
                  <i class="fa fa-trash" @click="deleteNewMsg(item)"></i>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>

        <!-- working  but needs styling -->

        <!-- <div class="randomQweets">
          <div class="content">
            <img
              :src="genrandomQweets.profilePic"
              alt="profile"
              style="
                width: 50px;
                height: 50px;
                border-radius: 50%;
                object-fit: cover;
                margin-top: 15px;
              "
              srcset=""
            />
            <div class="userContent">
              <div class="user">
                <h4> {{ genrandomQweets.name }}</h4>
                <p> {{ "@" + genrandomQweets.username }}</p>
                <p> {{ currentTime }}</p>
              </div>
              <div class="user-msg">
                <p>{{ genrandomQweets.content }}</p>
              </div>
              <div class="buttons">
                <i class="fa fa-comment-o"></i>
                <i class="fa fa-retweet"></i>
                <i
                  @click="genrandomQweets.liked = !genrandomQweets.liked"
                  class="likes"
                  :class="
                    genrandomQweets.liked ? 'fa fa-heart' : 'fa fa-heart-o'
                  "
                ></i>
                <i class="fa fa-trash"></i>
              </div>
            </div>
          </div>
        </div> -->

        <!-- <img
            src="@/assets/images/user1.jpg"
            alt="profile"
            width="100px"
            srcset=""
          />
          <h4>{{ genrandomImgQweets.name }}</h4>
          <p>{{ "@" + genrandomImgQweets.username }}</p>
          <p>{{ genrandomImgQweets.date.toLocaleString() }}</p>
          <div class="user-msg">
            <p>{{ genrandomImgQweets.content }}</p>
          </div>
          <div class="veetImg">
            <img src="@/assets/images/cyprus.jpg" alt="">
          </div> 
        </div>-->

        <!-- <div v-for="item in randVeets" :key="item.id">
          <div class="content">
            <img
              src="@/assets/images/captainAmerica.jpg"
              alt="profile"
              srcset=""
            />
            <div class="userContent">
              <div class="user">
                <h4>hert {{ item.name }}</h4>
                <p>{{ "@" + item.username }}</p>
                <p>{{ item.currentTime.toLocaleString() }}</p>
                hashh <p>{{ formatDate(item.date) }}</p>
                hash <p>{{ moment(item.date) }}</p>
              </div>
              <div class="user-msg">
                <p>{{ item.content }}</p>
              </div>
              <div class="buttons">
                <i class="fa fa-comment-o"></i>
                <i class="fa fa-retweet"></i>
                <i
                  @click="toggleLiked(item)"
                  class="likes"
                  :class="item.liked ? 'fa fa-heart' : 'fa fa-heart-o'"
                ></i>
                <i class="fa fa-trash" @click="deleteMsg(item)"></i>
              </div>
            </div>
          </div>
        </div> -->

        <div class="messages">
          <!-- <hr /> -->
          <div v-for="item in veets.slice(0, 1)" :key="item.id">
            <div class="content">
              <img :src="item.profilePic" alt="profile" srcset="" />
              <div class="userContent">
                <div class="user">
                  <h4>{{ item.name }}</h4>
                  <p>{{ "@" + item.username }}</p>
                  <p>{{ item.date }}</p>
                  <!-- <p>{{ item.date.toLocaleString() }}</p> -->
                  <!-- <p>{{ formatDate(item.date) }}</p> -->
                  <!-- <p>{{ moment(item.date) }}</p> -->
                </div>
                <div class="user-msg">
                  <p>{{ item.content }}</p>
                </div>
                <div class="buttons">
                  <i class="fa fa-comment-o"></i>
                  <i class="fa fa-retweet"></i>
                  <i
                    @click="item.liked = !item.liked"
                    class="likes"
                    :class="item.liked ? 'fa fa-heart' : 'fa fa-heart-o'"
                  ></i>
                  <!-- <i
                    @click="toggleLiked(item)"
                    class="likes"
                    :class="item.liked ? 'fa fa-heart' : 'fa fa-heart-o'"
                  ></i> -->
                  <i class="fa fa-trash" @click="deleteMsg(item)"></i>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>

        <!-- <div class="randomQweets">
          <div class="content">
            <img
              :src="genrandomQweets.profilePic"
              alt="profile"
              style="
                width: 50px;
                height: 50px;
                border-radius: 50%;
                object-fit: cover;
                margin-top: 15px;
              "
              srcset=""
            />
            <div class="userContent">
              <div class="user">
                <h4> Random {{ genrandomQweets.name }}</h4>
                <p> Random {{ "@" + genrandomQweets.username }}</p>
                <p> Random {{ currentTime }}</p>
              </div>
              <div class="user-msg">
                <p>{{ genrandomQweets.content }}</p>
              </div>
              <div class="buttons">
                <i class="fa fa-comment-o"></i>
                <i class="fa fa-retweet"></i>
                <i
                  @click="genrandomQweets.liked = !genrandomQweets.liked"
                  class="likes"
                  :class="
                    genrandomQweets.liked ? 'fa fa-heart' : 'fa fa-heart-o'
                  "
                ></i>
                <i class="fa fa-trash"></i>
              </div>
            </div>
          </div>
          hash {{ genrandomQweets }}
        </div> -->

        <div class="randomImgVeets">
          <div v-for="post in picVeets.slice(0, 1)" :key="post.id">
            <div class="content">
              <img :src="post.profilePic" alt="profile" srcset="" />
              <div class="userContent">
                <div class="user">
                  <h4>{{ post.name }}</h4>
                  <p>{{ "@" + post.username }}</p>
                  <p>{{ post.date }}</p>
                  <!-- <p>{{ post.date.toLocaleString() }}</p> -->
                  <!-- <p>{{ formatDate(post.date) }}</p> -->
                  <!-- <p>{{ moment(post.date) }}</p> -->
                </div>
                <div class="user-msg">
                  <p>{{ post.content }}</p>
                </div>
                <div class="veetImg">
                  <img :src="post.veetImg" alt="" />
                </div>
                <div class="buttons">
                  <i class="fa fa-comment-o"></i>
                  <i class="fa fa-retweet"></i>
                  <i
                    @click="post.liked = !post.liked"
                    class="likes"
                    :class="post.liked ? 'fa fa-heart' : 'fa fa-heart-o'"
                  ></i>
                  <!-- <i
                    @click="toggleLiked(post)"
                    class="likes"
                    :class="post.liked ? 'fa fa-heart' : 'fa fa-heart-o'"
                  ></i> -->
                  <i class="fa fa-trash" @click="deleteImgMsg(post)"></i>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>

        <div class="messages">
          <!-- <hr /> -->
          <div v-for="item in veets.slice(0, 1)" :key="item.id">
            <div class="content">
              <img :src="item.profilePic" alt="profile" srcset="" />
              <div class="userContent">
                <div class="user">
                  <h4>{{ item.name }}</h4>
                  <p>{{ "@" + item.username }}</p>
                  <p>{{ item.date }}</p>
                  <!-- <p>{{ item.date.toLocaleString() }}</p> -->
                  <!-- <p>{{ formatDate(item.date) }}</p> -->
                  <!-- <p>{{ moment(item.date) }}</p> -->
                </div>
                <div class="user-msg">
                  <p>{{ item.content }}</p>
                </div>
                <div class="buttons">
                  <i class="fa fa-comment-o"></i>
                  <i class="fa fa-retweet"></i>
                  <i
                    @click="item.liked = !item.liked"
                    class="likes"
                    :class="item.liked ? 'fa fa-heart' : 'fa fa-heart-o'"
                  ></i>
                  <!-- <i
                    @click="toggleLiked(item)"
                    class="likes"
                    :class="item.liked ? 'fa fa-heart' : 'fa fa-heart-o'"
                  ></i> -->
                  <i class="fa fa-trash" @click="deleteMsg(item)"></i>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>

        <div class="randomImgVeets">
          <div v-for="post in picVeets.slice(1, 3)" :key="post.id">
            <div class="content">
              <img :src="post.profilePic" alt="profile" srcset="" />
              <div class="userContent">
                <div class="user">
                  <h4>{{ post.name }}</h4>
                  <p>{{ "@" + post.username }}</p>
                  <p>{{ post.date }}</p>
                </div>
                <div class="user-msg">
                  <p>{{ post.content }}</p>
                </div>
                <div class="veetImg">
                  <img :src="post.veetImg" alt="" />
                </div>
                <div class="buttons">
                  <i class="fa fa-comment-o"></i>
                  <i class="fa fa-retweet"></i>
                  <i
                    @click="post.liked = !post.liked"
                    class="likes"
                    :class="post.liked ? 'fa fa-heart' : 'fa fa-heart-o'"
                  ></i>
                  <i class="fa fa-trash" @click="deleteImgMsg(post)"></i>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>

        <div class="messages">
          <div v-for="item in veets.slice(1, 3)" :key="item.id">
            <div class="content">
              <img :src="item.profilePic" alt="profile" srcset="" />
              <div class="userContent">
                <div class="user">
                  <h4>{{ item.name }}</h4>
                  <p>{{ "@" + item.username }}</p>
                  <p>{{ item.date }}</p>
                  <!-- <p>{{ item.date.toLocaleString() }}</p> -->
                  <!-- <p>{{ formatDate(item.date) }}</p> -->
                  <!-- <p>{{ moment(item.date) }}</p> -->
                </div>
                <div class="user-msg">
                  <p>{{ item.content }}</p>
                </div>
                <div class="buttons">
                  <i class="fa fa-comment-o"></i>
                  <i class="fa fa-retweet"></i>
                  <i
                    @click="item.liked = !item.liked"
                    class="likes"
                    :class="item.liked ? 'fa fa-heart' : 'fa fa-heart-o'"
                  ></i>
                  <!-- <i
                    @click="toggleLiked(item)"
                    class="likes"
                    :class="item.liked ? 'fa fa-heart' : 'fa fa-heart-o'"
                  ></i> -->
                  <i class="fa fa-trash" @click="deleteMsg(item)"></i>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>

        <div class="randomImgVeets">
          <div v-for="post in picVeets.slice(2)" :key="post.id">
            <div class="content">
              <img :src="post.profilePic" alt="profile" srcset="" />
              <div class="userContent">
                <div class="user">
                  <h4>{{ post.name }}</h4>
                  <p>{{ "@" + post.username }}</p>
                  <p>{{ post.date }}</p>
                </div>
                <div class="user-msg">
                  <p>{{ post.content }}</p>
                </div>
                <div class="veetImg">
                  <img :src="post.veetImg" alt="" />
                </div>
                <div class="buttons">
                  <i class="fa fa-comment-o"></i>
                  <i class="fa fa-retweet"></i>
                  <i
                    @click="post.liked = !post.liked"
                    class="likes"
                    :class="post.liked ? 'fa fa-heart' : 'fa fa-heart-o'"
                  ></i>
                  <i class="fa fa-trash" @click="deleteImgMsg(post)"></i>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>

        <div class="messages">
          <div v-for="item in veets.slice(3)" :key="item.id">
            <div class="content">
              <img :src="item.profilePic" alt="profile" srcset="" />
              <div class="userContent">
                <div class="user">
                  <h4>{{ item.name }}</h4>
                  <p>{{ "@" + item.username }}</p>
                  <p>{{ item.date }}</p>
                  <!-- <p>{{ item.date.toLocaleString() }}</p> -->
                  <!-- <p>{{ formatDate(item.date) }}</p> -->
                  <!-- <p>{{ moment(item.date) }}</p> -->
                </div>
                <div class="user-msg">
                  <p>{{ item.content }}</p>
                </div>
                <div class="buttons">
                  <i class="fa fa-comment-o"></i>
                  <i class="fa fa-retweet"></i>
                  <i
                    @click="item.liked = !item.liked"
                    class="likes"
                    :class="item.liked ? 'fa fa-heart' : 'fa fa-heart-o'"
                  ></i>
                  <!-- <i
                    @click="toggleLiked(item)"
                    class="likes"
                    :class="item.liked ? 'fa fa-heart' : 'fa fa-heart-o'"
                  ></i> -->
                  <i class="fa fa-trash" @click="deleteMsg(item)"></i>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <Search class="search" />
    </div>
  </div>
</template>

<script>
import moment from "moment";
import db from "../firebase";
import Search from "./Search.vue";
// import { onMounted } from "vue";

export default {
  components: { Search },
  name: "Home",
  setup() {
    // const randVeets = ref([]);
    // onMounted(() => {
    //   console.log("Miunted");
    // });
    // onMounted(() => {
    //   setInterval(() => {
    //     this.randVeets.push(this.genrandomQweets);
    //     console.log(this.genrandomQweets.name);
    //   }, 5000);
    // });
    // return { onMounted };
  },

  data() {
    return {
      msgLength: 0,
      newMsg: " ",
      likes: false,
      currentTime: new Date(),
      // month: this.currentTime.getUTCMonth() + 1, //months from 1-1,
      // day: this.currentTime.getUTCDate() -1,
      // year: this.currentTime.getUTCFullYear(),
      randVeets: [],

      picVeets: [
        {
          id: 1,
          name: "Dave Doe",
          username: "davedoe",
          date: "15/09/2021",
          content: "No caption is a caption",
          profilePic: require("@/assets/images/user1.png"),
          veetImg: require("@/assets/images/maldives.jpg"),
          liked: false,
        },
        {
          id: 2,
          name: "Amazing Friend",
          username: "amzaingfriend",
          date: "14/09/2021",
          content: "Lorem ipsnum twitter clone",
          profilePic: require("@/assets/images/user2.png"),
          veetImg: require("@/assets/images/brazil.jpg"),
          liked: false,
        },
        {
          id: 3,
          name: "Funny Guy",
          username: "funnyguy",
          date: "13/09/2021",
          content: "Lorem ipsnum twitter clone",
          profilePic: require("@/assets/images/user3.png"),
          veetImg: require("@/assets/images/dubai.jpg"),
          liked: true,
        },
        {
          id: 4,
          name: "Brilliant One",
          username: "brilliantone",
          date: "13/09/2021",
          content: "Lorem ipsnum twitter clone",
          profilePic: require("@/assets/images/user4.jpeg"),
          veetImg: require("@/assets/images/london.jpg"),
          liked: true,
        },
        {
          id: 5,
          name: "fantabulous four",
          username: "fantabulousfour",
          date: "12/09/2021",
          content: "Lorem ipsnum twitter clone",
          profilePic: require("@/assets/images/user1.png"),
          veetImg: require("@/assets/images/miami.jpg"),
          liked: true,
        },
        {
          id: 6,
          name: "Sharp Guy",
          username: "sharpguy",
          date: "11/09/2021",
          content: "Lorem ipsnum twitter clone",
          profilePic: require("@/assets/images/user3.png"),
          veetImg: require("@/assets/images/singapore.jpg"),
          liked: true,
        },
      ],
      otherVeets: [
        {
          id: 1,
          name: "Captain America",
          username: "captUSA",
          date: "13/09/2021",
          content: "Lorem ipsnum twitter clone",
          profilePic: require("@/assets/images/captainAmerica.jpg"),
          liked: false,
        },
        {
          id: 2,
          name: "Captain Marvel",
          username: "captM",
          date: "12/04/2021",
          content: "Lorem ipsnum twitter clone",
          profilePic: require("@/assets/images/captainMarvel2.jpg"),
          liked: false,
        },
        {
          id: 3,
          name: "Black Widow",
          username: "bwidow",
          date: "13/04/2021",
          content: "Lorem ipsnum twitter clone",
          profilePic: require("@/assets/images/blackWidow2.jpg"),
          liked: true,
        },
      ],
      veets: [
        {
          id: 1,
          name: "John Doe",
          username: "johnnydoe",
          date: "13/09/2021",
          content: "Lorem ipsnum twitter clone",
          profilePic: require("@/assets/images/user1.png"),
          liked: false,
        },
        {
          id: 2,
          name: "Anita Doe",
          username: "anyydoe",
          date: "12/09/2021",
          content: "Lorem ipsnum twitter clone",
          profilePic: require("@/assets/images/user2.png"),
          liked: false,
        },
        {
          id: 3,
          name: "Campbell Doe",
          username: "campydoe",
          date: "11/09/2021",
          content: "Lorem ipsnum twitter clone",
          profilePic: require("@/assets/images/user3.png"),
          liked: true,
        },
        {
          id: 4,
          name: "Beryl Doe",
          username: "beryldoe",
          date: "10/09/2021",
          content: "Lorem ipsnum twitter clone",
          profilePic: require("@/assets/images/user4.jpeg"),
          liked: true,
        },
      ],
      newVeets: [],
    };
  },
  methods: {
    sendMsg() {
      var dateObj = new Date();
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();

      var newdate = day + "/" + month + "/" + year;

      let newVeet = {
        id: this.newVeets.length + 1,
        date: newdate,
        name: "User One",
        username: "userone",
        profilePic: require("@/assets/images/captainAmerica.jpg"),
        content: this.newMsg,
        liked: false,
      };

      // uncomment when firebase starts working again

      // db.collection("v)
      //   .add(newQweet)
      //   .then((docRef) => {
      //     console.log("Document written with ID: ", docRef.id);
      //   })
      //   .catch((error) => {
      //     console.error("Error adding document: ", error);
      //   });

      this.newVeets.unshift(newVeet);
      this.newMsg = " ";
    },
    toggleLiked(veet) {
      // db.collection("qweets")
      //   .doc(qweet.id)
      //   .update({
      //     liked: !qweet.liked,
      //   })
      //   .then((docRef) => {
      //     console.log("Document written with ID: ", docRef.id);
      //   })
      //   .catch((error) => {
      //     console.error("Error adding document: ", error);
      //   });
      this.veets.liked = !this.veets.liked;
    },
    deleteMsg(veet) {
      // db.collection("qweets")
      //   .doc(qweet.id)
      //   .delete()
      //   .then(() => {
      //     this.qweets = this.qweets.filter((item) => item.id != id);
      //     console.log("Document successfully deleted!");
      //   })
      //   .catch((error) => {
      //     console.error("Error removing document: ", error);
      //   });
      // this.qweets = this.qweets.filter((item) => item.id != id);

      this.veets = this.veets.filter((item) => item.id != veet.id);
    },
    deleteImgMsg(post) {
      this.picVeets = this.picVeets.filter((item) => item.id != post.id);
    },
    deleteNewMsg(post) {
      this.newVeets = this.newVeets.filter((item) => item.id != post.id);
    },
  },
  computed: {
    msgCounter() {
      return this.newMsg.length;
    },

    // genrandomQweets() {
    //   var randNum = Math.floor(Math.random() * this.otherQweets.length);
    //   var randomQweets = this.otherQweets[randNum];
    //   return randomQweets;
    // },
    // genrandomQweets() {
    //   setTimeout(() => {
    //     var randNum = Math.floor(Math.random() * this.picVeets.length);
    //     var randomQweets = this.picVeets[randNum];

    //     // setTimeout(() => {
    //     //   console.log(randomQweets)
    //     // }, 3000)
    //     return randomQweets;
    //   });
    // },

    // working below
    genrandomQweets() {
      var randNum = Math.floor(Math.random() * this.otherVeets.length);
      var randomQweets = this.otherVeets[randNum];

      setTimeout(() => {
        console.log(randomQweets);
      }, 3000);
      return randomQweets;
    },

    // formatDate(date) {
    //   return moment(date).format()
    // }
  },
  mounted() {
    var month = this.currentTime.getUTCMonth() + 1; //months from 1-1;
    var day = this.currentTime.getUTCDate() - 1;
    var year = this.currentTime.getUTCFullYear();
    var newDate = day + "/" + month + "/" + year;
    // console.log(newDate);

    // var genrandomQweets = setTimeout(() => {
    //   var randNum = Math.floor(Math.random() * this.picVeets.length);
    //   var randomQweets = this.picVeets[randNum];

    //   // setTimeout(() => {
    //   //   console.log(randomQweets)
    //   // }, 3000)
    //   return randomQweets;
    // });

    // console.log(genrandomQweets)
  },
  // mounted() {
  //   // setInterval(() => {
  //   //   this.randVeets.push(this.genrandomQweets);
  //   //   console.log(this.genrandomQweets.name);
  //   // }, 5000);

  //   // import { collection, query, where, onSnapshot } from "firebase/firestore";
  //   // moment().format();
  //   // var formatDate = moment()

  //   db.collection("qweets")
  //     .orderBy("date")
  //     .onSnapshot((snapshot) => {
  //       snapshot.docChanges().forEach((change) => {
  //         let qweetChange = change.doc.data();
  //         qweetChange.id = change.doc.id;
  //         if (change.type === "added") {
  //           this.qweets.unshift(qweetChange);
  //           console.log("New qweet: ", qweetChange);
  //         }
  //         if (change.type === "modified") {
  //           let index = this.qweets.findIndex(
  //             (qweet) => qweet.id === qweetChange.id
  //           );
  //           Object.assign(this.qweets[index], qweetChange);
  //           console.log("Modified qweet: ", qweetChange);
  //         }
  //         if (change.type === "removed") {
  //           let index = this.qweets.findIndex(
  //             (qweet) => qweet.id === qweetChange.id
  //           );
  //           this.qweets.splice(index, 1);
  //           console.log("Removed qweet: ", qweetChange);
  //         }
  //       });
  //     });

  //   // generate random qweets
  //   // var randNum = Math.floor(Math.random() * this.otherQweets.length);

  //   // genrandomQweets = this.otherQweets[randNum]
  //   // let randQweet = []
  //   // let randQweet = {}
  //   // genrandomQweets(() => {
  //   //   for (i = 0; i < this.otherQweets.length; i++){
  //   //     // randQweet.push[i]
  //   //     randQweet = i
  //   //   }
  //   //   return randQweet
  //   // }, 5000)
  // },
};
</script>

<style scoped>
.hero {
  width: 100%;
  display: flex;
  overflow-y: auto;
}
.main-body {
  display: flex;
  width: 100%;
  overflow-x: hidden;
}
.messages-holder {
  width: 70%;
  border-right: 6px solid #e2dfdf;
}
.latest {
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
  padding-top: 35px;
  border-bottom: 6px solid #e2dfdf;
}
.latest img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 20px;
}

form {
  display: flex;
}
.latest input[type="text"],
#floatingInput,
#floatingTextarea,
#newMsg {
  width: 500px;
  height: 50px;
  border-bottom: 1px solid black;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
  outline: none;
  margin-left: 10px;
  transition: 0.4s;
}
#floatingTextarea {
  overflow-y: hidden;
}
.form-control:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
  margin-top: 30px;
}
.latest input[type="text"]::placeholder {
  color: #888;
  transition: 0.4s;
}
.user-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
#sendMsg {
  width: 80px;
  background: #5da9dd;
  height: 40px;
  color: white;
  border-radius: 45px;
  opacity: 0.2;
}
#sendMsg2 {
  width: 80px;
  color: white;
  border-radius: 45px;
}
.latest p {
  margin-left: -150px;
  margin-top: 85px;
}

.messages-holder hr {
  margin-top: 30px;
}
.empty {
  background: rgb(226, 223, 223);
  height: 15px;
  margin-top: -16px;
}
.messages,
.randomImgVeets {
  display: grid;
}
.messages hr:first-child,
.newMessages hr:first-child,
.randomImgVeets hr:first-child {
  margin-top: 0px;
}
.messages .content,
.newMessages .content {
  display: flex;
  flex-wrap: wrap;
}
.messages .content img,
.newMessages .content img,
.randomImgVeets .content img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-left: 20px;
}
.userContent {
  margin-left: 20px;
  width: 85%;
}
.user {
  display: flex;
  /* justify-content: space-between; */
  margin: auto;
}
/* .user p:first-child {
  margin-left: 250px;
} */

.user p {
  margin: 2px 10px;
}
.user-msg p {
  font-weight: 500;
}

.buttons {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.buttons i {
  color: #5da9dd;
}
.buttons i:last-child {
  margin-right: 10px;
}
.buttons i:hover {
  cursor: pointer;
}
.buttons .likes {
  color: #5da9dd;
}
.randomImgVeets .content {
  display: flex;
  flex-wrap: wrap;
}
.messages .content:first-child,
.newMessages .content:first-child,
.randomImgVeets .content:first-child {
  margin-top: 15px;
}
.veetImg {
  width: 98%;
  /* overflow: hidden; */
}
.randomImgVeets .content .userContent .veetImg img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
}

@media screen and (max-width: 767px) {
  .hero {
    width: 100%;
    overflow-x: hidden;
  }
  .main-body {
    display: grid;
    justify-content: center;
    width: 100%;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
  .messages-holder {
    width: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    align-content: center;
    /* margin: auto; */
    border: none;
  }

  .latest {
    margin-left: auto;
    margin-right: auto;
  }
  form {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin-right: 10px auto;
    margin-left: 10px auto;
  }
  #floatingTextarea {
    width: 270px;
  }
  .empty {
    height: 7px;
  }
  .search {
    display: none;
    visibility: hidden;
  }
  .messages-holder {
    width: 100%;
  }
  .messages {
    width: 100%;
    align-content: center;
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (width: 768px) {
  #floatingTextarea {
    width: 350px;
  }
  .messages-holder {
    border: none;
  }
}
</style>
