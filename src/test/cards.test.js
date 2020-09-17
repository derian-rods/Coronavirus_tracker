import React from 'react';
import '@testing-library/jest-dom';
import { Card } from '../components/Layouts/cards';
import { shallow } from 'enzyme';

describe('test for card component', () => {
    test('should show <Cards /> correctly ', () => {
        const title = 'Card title'
        const wrapper = shallow( <Card  title={title} />)
        expect(wrapper).toMatchSnapshot()
    });
});