import {mount} from "@vue/test-utils";
import ShoppingList from "@/views/ShoppingList.vue";
import AppBarList from "@/components/AppBarList.vue";


describe('Testing ShoppingList.vue', ()=>{
    it('should show AppBarList', () =>{
        const wrapper = mount(ShoppingList)

        const appBarList = wrapper.findComponent(AppBarList)
        expect(appBarList.exists()).toBeTruthy()
    })

//hhus
})
