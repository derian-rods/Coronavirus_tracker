import React from 'react';
import '@testing-library/jest-dom';
import MapChart from '../components/Map';
import { shallow } from 'enzyme';

describe('test for chart map component', () => {

    test('should show <Mapchart /> correctly', () => {
        const countries = [
            {
                country: 'Spain', 
                countryInfo:{
                    flag: 'https://disease.sh/assets/img/flags/af.png'
                }
            }, 
            {  country: 'EEUU', 
               countryInfo:{
                 flag: 'https://disease.sh/assets/img/flags/af.png'}
            },
        ]

        const wrapper = shallow(<MapChart countries={countries}/>)

        expect(wrapper).toMatchSnapshot()
    })
    

});