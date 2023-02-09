import { shallowMount, createLocalVue } from '@vue/test-utils'
import VideoThumbnail from '@/components/VideoThumbnail.vue'

describe('VideoThumbnail.vue', () => {
    const localVue = createLocalVue()

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(VideoThumbnail, {
            localVue,
        })
    })

    it('Verificando se VideoThumbnail é uma instancia Vue', () => {
        expect(wrapper.vm).toBeTruthy()
    })
})
