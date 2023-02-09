import { shallowMount, createLocalVue } from '@vue/test-utils'
import Loading from '@/components/Loading.vue'

describe('Loading.vue', () => {
    const localVue = createLocalVue()

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(Loading, {
            localVue,
        })
    })

    it('Verificando se Loading é uma instancia Vue', () => {
        expect(wrapper.vm).toBeTruthy()
    })

    it('Verificando se as class com componente', () => {
        expect(wrapper.attributes('class')).toBe('d-flex justify-center align-center loading py-12')
    })
})
