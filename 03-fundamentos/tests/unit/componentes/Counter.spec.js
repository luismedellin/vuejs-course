import { shallowMount, mount } from  '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter component', () => {
    // test('debe de hacer match con el snapshot', () => { 

    //     const wrapper = shallowMount(Counter)

    //     expect (wrapper.html()).toMatchSnapshot()
    //  })

    test('should h2 debe tener el valor por defecto "Counter"', () => { 
        const wrapper = shallowMount(Counter)

        expect(wrapper.find('h2').exists()).toBeTruthy()

        const h2 = wrapper.find('h2')
        expect(h2.text()).toBe('Counter')

        const h2Value = wrapper.find('h2').text()
        expect(h2Value).toBe('Counter')
    })
})