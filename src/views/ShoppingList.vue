<template>
  <div class="about container--fluid" >

    <app-bar-list/>


    <div>
      <div class="pa-6 inputs">

        <input  class="pa-3 input-child-l input-border" v-model="titleField" placeholder="Title" @keyup.enter="addItem" >
        <input  class="pa-3 input-child-r input-border" v-model="linkField" placeholder="Link" @keyup.enter="addItem" >
        <v-btn class="plus-icon" @click="addItem" icon>
          <v-icon>
            mdi-plus-circle
          </v-icon>
        </v-btn>
      </div>


    </div>


    <v-list
        class="pa-3"
        subheader
        two-line
        v-if="items.length"
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
                  <v-btn
                      @click.stop="deleteItem(item.title); snackbar = true"
                      icon>
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
         <v-snackbar
             v-model="snackbar"
             :timeout="timeout"
         >
           {{ text }}
<!--           huefhuhu-->

           <template v-slot:action="{ attrs }">
             <v-btn
                 color="pink"
                 text
                 v-bind="attrs"
                 @click="snackbar = false"
             >
               Close
             </v-btn>
           </template>
         </v-snackbar>

        </v-list-item-action>
      </v-list-item>

      <v-divider inset></v-divider>






    </v-list>
    <div
    v-else
    class="no-items"
    >

      <v-icon size="150px" class="no-items-icon">
        mdi-cart-remove
      </v-icon>

      <div class="text-h4" style="color: #a22626">Driplist empty</div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'ShoppingList',
  data(){
    return{
      items:[],
      titleField:'',
      linkField:'',
      snackbar: false,
      text: `Task deleted!`,
      timeout: 2000
    }
  },
  methods:{
    deleteItem(title){
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/registration/list/' + title


      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };

      fetch(endpoint, requestOptions)
          .then(response => response.json())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));

      this.items = this.items.filter(item => item.title !== title)
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

      const newItem={
        title: this.titleField,
        link: this.linkField
      }

      if(this.titleField.length > 0 && this.linkField.length > 0){
        this.items.push(newItem)
        this.titleField = ''
        this.linkField = ''
      }


    },





  },
  mounted() {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/registration/list'

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(item => {this.items.push(item)}))
        .catch(error => console.log('error', error))
  },

  components:{

    'app-bar-list': require('@/components/AppBarList.vue').default
  }

}
</script>
<style lang="sass">

.no-items
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)

.no-items-icon
  position: absolute
  left: 50%
  transform: translate(-50%, 0%)

.inputs
  margin: 0 auto


.input-child-l
  position: absolute
  margin: 0 auto
  width: 20%
  left: 42%
  transform: translate(-65%, 0)



.input-child-r
  position: absolute
  margin: 0 auto
  width: 20%
  right: 42%
  transform: translate(65%, 0)

.plus-icon
 left: 72%
 top: 30%
 transform: translate(10%, 20%)

.input-border
  border-radius: 25px
  border-width: 1px
  border-style: solid






</style>
