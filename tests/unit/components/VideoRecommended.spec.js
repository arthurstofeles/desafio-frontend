import { shallowMount, createLocalVue } from '@vue/test-utils'
import VideoRecommended from '@/components/VideoRecommended.vue'

describe('VideoRecommended.vue', () => {
    const localVue = createLocalVue()

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(VideoRecommended, {
            localVue,
            videos: []
        })
    })

    it('Verificando se VideoRecommended é uma instancia Vue', () => {
        expect(wrapper.vm).toBeTruthy()
    })
    
    it('Verificando se as class com componente', () => {
        expect(wrapper.attributes('class')).toBe('recommended')
    })
})
