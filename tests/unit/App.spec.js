import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from '@/App.vue'
import router from '@/router'
import Vuetify from 'vuetify'

describe('App.vue', () => {
    const localVue = createLocalVue()
    let vuetify

    localVue.use(router)
    let wrapper

    beforeEach(() => {
        vuetify = new Vuetify()
        wrapper = shallowMount(App, { localVue, vuetify })
    })

    it('Verificando se App é uma instancia Vue', () => {
        expect(wrapper.vm).toBeTruthy()
    })

    it('Verificando se o router-view está contido', () => {
        expect(wrapper.find('router-view-stub').exists()).toBeTruthy()
    })
})
