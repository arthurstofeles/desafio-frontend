import { shallowMount, createLocalVue } from '@vue/test-utils'
import ErrorMessage from '@/components/ErrorMessage.vue'

describe('ErrorMessage.vue', () => {
    const localVue = createLocalVue()

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(ErrorMessage, {
            localVue,
            propsData: {
                message: 'Error'
            }
        })
    })

    it('Verificando se ErrorMessage é uma instancia Vue', () => {
        expect(wrapper.vm).toBeTruthy()
    })

    it('Verificando se a props message sendo passada e renderizada', () => {
        expect(wrapper.props().message).toBe('Error')
        const list = wrapper.find('span')
        expect(list.text()).toBe('Error')
    })

    it('Verificando se as class com componente', () => {
        expect(wrapper.attributes('class')).toBe('d-flex flex-column justify-center align-center my-12 pa-3')
    })
})