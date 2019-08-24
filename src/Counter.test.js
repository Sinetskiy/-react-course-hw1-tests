// Компонент Counter - простой счётчик
// Напишите для него тесты.
// Убедитесь, что вы протестировали всю функциональнось.
// Также проверьте что компонент рендерится верно, используя Snapshot тест.

// * Задание со звёздочкой - выполнять не обязательно

// Вынесите логику в хук и протестируйте его
import React from 'react';
import { Counter } from './Counter';
import { shallow } from 'enzyme';

describe('Counter', () => {

    describe('render', () => {
        it('Содержит div с текстом 0', () => {
            const wrapper = shallow(<Counter />);

            expect(wrapper.find('div')).toHaveLength(1);
            expect(wrapper.find('div').text()).toEqual('0');
        });

        it('Увеличивает счетчик при нажатии первой кнопки', () => {
            const wrapper = shallow(<Counter />);

            wrapper.find('button').first().simulate('click');
            expect(wrapper.find('div').text()).toEqual('1');
        });

        it('Уменьшает счетчик при нажатии второй кнопки', () => {
            const wrapper = shallow(<Counter />);

            wrapper.find('button').last().simulate('click');
            expect(wrapper.find('div').text()).toEqual('-1');
        });

    });

});
