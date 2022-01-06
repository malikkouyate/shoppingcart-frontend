import ShoppingList from "@/views/ShoppingList";
import AppBarList from "@/components/AppBarList";
import {mount} from "@vue/test-utils";


describe('Testing ShoppingList.vue', ()=>{
    it('should show AppBarList', () =>{
        const wrapper = mount(ShoppingList)

        const appBarList = wrapper.findComponent(AppBarList)
        expect(appBarList.exists()).toBeTruthy()
    })

//hhus
})
