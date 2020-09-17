import React from 'react';
import '@testing-library/jest-dom';
import {List} from '../components/List';
import {shallow} from 'enzyme';

describe('tests of list component', () => {
    
    test('should show <List /> correctly ', () => {
        const countries = [{
            country: 'Spain', 
            countryInfo:{
                flag: 'https://disease.sh/assets/img/flags/af.png'
            }
        }, 
        {  country: 'EEUU', 
        countryInfo:{
            flag: 'https://disease.sh/assets/img/flags/af.png'
        }},
    ]
        const wrapper = shallow(<List countries={countries} />)
        expect(wrapper).toMatchSnapshot()
    });
})
