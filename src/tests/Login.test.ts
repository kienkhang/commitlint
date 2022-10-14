import { describe, expect, it, vitest } from 'vitest';
import Login from '@/pages/Login.vue'
import { mount } from '@vue/test-utils'

describe('Login', () => {
    it('test validate form visible form message', async () => {
        const wrapper = mount(Login)
        await wrapper.find('#btn-submit').trigger('click')
        expect(wrapper.find('#err-username').text()).toEqual("username cannot be empty")
        expect(wrapper.find('#err-password').text()).toEqual("password cannot be empty")
    })

    it('test validate form invisible form message' , async () => {
        const wrapper = mount(Login)
        await wrapper.find('#username').setValue('nguyentu')
        await wrapper.find('#password').setValue('12345678')

        await wrapper.find('#btn-submit').trigger('click')

        expect(wrapper.find('#err-username').exists()).toBe(false)
        expect(wrapper.find('#err-password').exists()).toBe(false)

        vitest.spyOn(window, 'alert').mockImplementation(() => {});


    })
})