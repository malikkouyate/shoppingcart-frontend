import {mount} from "@vue/test-utils";
import ShoppingList from "@/views/ShoppingList";
import AppBarList from "@/components/AppBarList";


describe('Testing ShoppingList.vue', ()=>{

    it('should show AppBarList', () =>{
        const wrapper = mount(ShoppingList)

        const appBarList = wrapper.findComponent(AppBarList)
        expect(appBarList.exists()).toBeTruthy()
    })

    it('should render a person card for each person', () => {

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

    it('should render first name and last name', () => {



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
        const itemTitle = wrapper.findComponent('v-list-item-title')
        expect(itemTitle.text()).toBe('Shopping-List')
    })






})
