<template>
  <div class="about container--fluid" >

    <app-bar-list/>

    <div class="pa-6">
      <input  class="pa-3" v-model="titleField" placeholder="Title"  >
      <input  class="pa-3" v-model="linkField" placeholder="Link" @keyup.enter="addItem" >
      <v-btn class="pa-6" @click="addItem" elevation="3">Add</v-btn>

    </div>


    <v-list
        class="pa-3"
        subheader
        two-line
    >

      <v-list-item
          v-for="item in items"
          :key="item.title"
      >
        <v-list-item-avatar>
          <v-icon
              class="grey lighten-1"
              dark
          >
            mdi-cart
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>

          <v-list-item-subtitle>
            <a :href="item.link">
              {{item.link}}
            </a>
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <task-menu/>
        </v-list-item-action>
      </v-list-item>

      <v-divider inset></v-divider>



    </v-list>
  </div>
</template>

<script>
export default {
  name: 'ShoppingList',
  data(){
    return{
      items:[],
      titleField:'',
      linkField:''
    }
  },
  methods:{
    deleteItem(id){
      this.items = this.items.filter(item => item.id !== id)
    },
    addItem(){
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/registration/list'

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        title: this.titleField,
        link: this.linkField
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch(endpoint, requestOptions)
          .then(response => response.json())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));

      this.titleField = ''
      this.linkField = ''
    }


  },

  components:{
    'task-menu': require('@/components/TaskMenu.vue').default,
    'app-bar-list': require('@/components/AppBarList.vue').default
  }

}
</script>
