<template>
  <div class="about container--fluid" >

    <div class="pa-3">
      <input  class="pa-3" v-model="titleField" placeholder="Title"  >
      <input  class="pa-3" v-model="linkField" placeholder="Link" @keyup.enter="addItem" >

      <v-icon @click:append="addItem" class="pa-3">
        mdi-plus-circle
      </v-icon>


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
          <v-btn
              @click.stop="deleteItem(item.id)"
              icon>
            <v-icon color="dark lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>

      <v-divider inset></v-divider>



    </v-list>
  </div>
</template>

<script>
export default {
  name: 'About',
  data(){
    return{
      items:[
        {id: 1, title: 'TV', link: 'https://www.youtube.com/watch?v=8AlnTd31KUk'},
        {id: 3, title: 'PC', link: 'https://www.amazon.com/-/de/dp/B0725GYNG6/ref=sr_1_1?keywords=amazonbasics&pd_rd_r=537a729f-e663-4eeb-9fb8-6803e499d753&pd_rd_w=Bjvia&pd_rd_wg=w2wMa&pf_rd_p=0f5d810e-7983-4d78-b8d5-c682b0b2c515&pf_rd_r=K0H8QMVHPJ1A6J2W4APA&qid=1641241824&sr=8-1'},
      ],
      titleField:'',
      linkField:''
    }
  },
  methods:{
    deleteItem(id){
      this.items = this.items.filter(item => item.id !== id)
    },
    addItem(){
      let newItem={
        id:Date.now(),
        title: this.titleField,
        link: this.linkField
      }
      this.items.push(newItem)
      this.titleField = ''
      this.linkField = ''
    }
  }
}
</script>
