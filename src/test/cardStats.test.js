import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom'
import { CardStats } from '../components/Statistics';

describe('Test for component CardStates', () => {
    test('should show <CardStats /> correctly ', () => {
        const data = {
            active: 232313,
            cases: 232012141,
            critical: 2332,
        }
        const wrapper = shallow (<CardStats data={data} />)
        expect(wrapper).toMatchSnapshot()

    });
})
