import {mount} from "@vue/test-utils";
import ShoppingList from "@/views/ShoppingList";
import AppBarList from "@/components/AppBarList";


describe('Testing ShoppingList.vue', ()=>{

    it('should show AppBarList', () =>{
        const wrapper = mount(ShoppingList)

        const appBarList = wrapper.findComponent(AppBarList)
        expect(appBarList.exists()).toBeTruthy()
    })

    it('should render a item card for each item', () => {

        const wrapper = mount(ShoppingList, {
            propsData: {
                items: [
                    {
                        title:'hi',
                        link:'si'
                    },

                ]
            }
        })

        // then
        const shoppingList = wrapper.findAllComponents(ShoppingList)
        expect(shoppingList.length).toBe(1)
    })

    it('should render title', () => {



        // when
        const wrapper = mount(ShoppingList, {
            propsData: {
                items: {
                    title: 'Shopping-List',
                    link: 'By-Us'
                }
            }
        })

        // then
        const itemTitle = wrapper.find('v-list-item-title')
        expect(itemTitle.text()).toBe('Shopping-List')
    })


    //4. Test nicht gemacht, da bei Daniels Beispiel Bootstrap benutzt wurde und wir vuetifiy nutzen und deshalb leider keine Lösungsmöglichkeit finden konnten

})
