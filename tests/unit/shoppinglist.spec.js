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

        const testItem = {
            title: 'hi',
            link: 'si'
        }

        // when
        const wrapper = mount(ShoppingList, {
            propsData: {
                item: testItem
            }
        })

        // then
        const cardTitle = wrapper.find('.card-title')
        expect(cardTitle.text()).toBe('Max Mustermann')
    })

    it.each`
    vaccinated | expected
    ${true}    | ${'geimpft'}
    ${false}   | ${'nicht geimpft'}
  `('should render vaccination status (status is $vaccinated)', ({ vaccinated, expected }) => {
        // when
        const testPerson = {
            id: 1,
            firstName: 'Max',
            lastName: 'Mustermann',
            vaccinated: vaccinated,
            pets: []
        }
        const wrapper = mount(PersonCard, {
            propsData: {
                person: testPerson
            }
        })

        // then
        const cardTitle = wrapper.find('.card-text')
        expect(cardTitle.text()).toContain(`${testPerson.firstName} ${testPerson.lastName} ist ${expected}`)
    })

    it.each`
    pets        | expected
    ${[]}       | ${'0 Haustier(e)'}
    ${[{}]}     | ${'1 Haustier(e)'}
    ${[{}, {}]} | ${'2 Haustier(e)'}
  `('should render amount of pets ($pets.length pets)', ({ pets, expected }) => {
        // when
        const testPerson = {
            id: 1,
            firstName: 'Max',
            lastName: 'Mustermann',
            vaccinated: true,
            pets: pets
        }
        const wrapper = mount(PersonCard, {
            propsData: {
                person: testPerson
            }
        })

        // then
        const cardTitle = wrapper.find('.card-text')
        expect(cardTitle.text()).toContain(`und hat ${expected}`)
    })


})
