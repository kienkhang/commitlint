import { test, it, expect, describe } from 'vitest'
import { mount } from '@vue/test-utils'
import ChangeTitle from '@/components/ChangeTitle.vue'

describe('Change Title Component Test !!! ', () => {
  it('test render component', () => {
    expect(ChangeTitle).toBeTruthy()

    const wrapper = mount(ChangeTitle)
    // const title = "Hello Vue";
    // const testTitle = "Hello Vue"
    expect(wrapper.find('h1').exists()).toBeTruthy()
    expect(wrapper.find('.input').exists()).toBeTruthy()
    expect(wrapper.find('button').exists()).toBeTruthy()
  })
})
