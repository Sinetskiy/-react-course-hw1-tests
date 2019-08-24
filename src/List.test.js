// Компонент List - список
// Напишите для него тесты.
// Компонент позволяет добавлять элементы в список.
// При добавлении нового элемента тексовое поле очищается.

// При клике на элементы списка они удаляются.

// Убедитесь, что вы протестировали всю функциональнось.

import React from 'react';
import { List } from './List';
import { shallow } from 'enzyme';

describe('List', () => {

    const wrapper = shallow(<List />);

    describe('Добавление записи', () => {

        it('Запись добавляется в список при нажатии на кнопку', () => {

            wrapper.find('input').simulate('change', { target: { value: 'item' }});
            wrapper.find('button').simulate('click');
            expect(wrapper.find('li').text()).toEqual( 'item' );
        });

        it('Поле ввода очищается после добавления', () => {
            expect(wrapper.find('input').props().value).toEqual( '' );
        });

    });

    describe('Удаление записи', () => {

        it('Запись удаляется из списка при клике', () => {

            const countLi = wrapper.find('li').length;
            wrapper.find('li').first().simulate('click');
            const newCountLi = wrapper.find('li').length;
            expect(newCountLi).toEqual( countLi - 1 );

        });

    });

});
