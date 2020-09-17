import React from 'react';
import '@testing-library/jest-dom';
import {LoadingScreen} from '../components/Layouts/Loading';
import {shallow} from 'enzyme';

describe('test for LoadingScreen component', () => {

    test('should show <LoadingScreen /> correctly ', () => {
        const wrapper = shallow(<LoadingScreen />);
        expect(wrapper).toMatchSnapshot();
    });
})
