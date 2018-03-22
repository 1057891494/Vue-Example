import { expect } from 'chai';
import { shallow } from '@vue/test-utils';
import Event from '../src/components/Event.vue';

import '../luna.min.js';

describe('Event.vue', () => {
    it('点击改变文字为New Info', () => {
        //获取vue可操作对象
        const wrapper = shallow(Event);
        //触发点击事件
        wrapper.find('#doit2').trigger('click');
        //检测值
        expect(wrapper.find('#info2').text()).contains('New Info');
    })
});
