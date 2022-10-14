import Counter from '@/pages/Counter.vue'
import { createTestingPinia } from '@pinia/testing'

import { describe, test, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { useCounterStore } from '@/stores/Counter'
describe('Component Counter Testing', () => {
  const wrapper = mount(Counter, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ],
    },
  })
  test('test render component', () => {
    // initial
    expect(Counter).toBeTruthy()

    // test render 6 button
    expect(wrapper.findAll('button').length).toBeGreaterThanOrEqual(6)

    // test render button types
    const inputTxt: string[] = [
      'Increment',
      'Decrement',
      'Increment (+5)',
      'Decrement (+5)',
      'Set (100)',
      'Reset',
    ]
    const buttons = wrapper.findAll('button')
    expect(
      [...buttons].every((item) => {
        const textButton = item.text()
        return inputTxt.includes(textButton)
      })
    ).toBe(true)

    // test render heading and contain Count
    expect(wrapper.find('p').exists())
    expect(wrapper.find('p').text()).toContain('Count')
  }),
    test('test handle click button', async () => {
      const counter = useCounterStore()
      const {
        increment,
        decrement,
        incrementValue,
        decrementValue,
        setValue,
        resetValue,
      } = counter
      // Click Increment
      await wrapper.find('.btn1').trigger('click')
      expect(increment).toHaveBeenCalledOnce()

      // Click Decrement
      await wrapper.find('.btn2').trigger('click')
      expect(decrement).toHaveBeenCalledOnce()
      // Click Increment + 5
      await wrapper.find('.btn3').trigger('click')
      expect(incrementValue).toHaveBeenCalledOnce()
      // Click Decrement - 5
      await wrapper.find('.btn4').trigger('click')
      expect(decrementValue).toHaveBeenCalledOnce()
      // Click Set value 100
      await wrapper.find('.btn5').trigger('click')
      expect(setValue).toHaveBeenCalledOnce()
      // Click Reset value
      await wrapper.find('.btn6').trigger('click')
      expect(resetValue).toHaveBeenCalledOnce()
    })
})
