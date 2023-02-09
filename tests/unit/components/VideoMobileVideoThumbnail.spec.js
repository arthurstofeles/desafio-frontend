import { shallowMount, createLocalVue } from '@vue/test-utils'
import VideoMobileVideoThumbnail from '@/components/VideoMobileVideoThumbnail.vue'

describe('VideoMobileVideoThumbnail.vue', () => {
    const localVue = createLocalVue()

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(VideoMobileVideoThumbnail, {
            localVue,
        })
    })

    it('Verificando se VideoMobileVideoThumbnail é uma instancia Vue', () => {
        expect(wrapper.vm).toBeTruthy()
    })
})
