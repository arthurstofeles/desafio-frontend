import { shallowMount, createLocalVue } from '@vue/test-utils'
import VideoThumbnailResult from '@/components/VideoThumbnailResult.vue'

describe('VideoThumbnailResult.vue', () => {
    const localVue = createLocalVue()

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(VideoThumbnailResult, {
            localVue,
        })
    })

    it('Verificando se VideoThumbnailResult é uma instancia Vue', () => {
        expect(wrapper.vm).toBeTruthy()
    })
})
