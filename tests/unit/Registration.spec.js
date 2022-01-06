import {mount} from "@vue/test-utils";
import AppBarStart from "@/components/AppBarStart";
import Registration from "@/views/Registration";



describe('Testing App.vue', ()=>{
    it('should show Footer', () =>{
        const wrapper = mount(Registration)

        const appBarStart = wrapper.findComponent(AppBarStart)
        expect(appBarStart.exists()).toBeTruthy()
    })



//hhus
})
