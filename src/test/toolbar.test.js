import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import {ToolBar} from '../components/ToolBar'

describe('test of Toolbar component', () => {
    test('should show <ToolBar /> correctly ', () => {
        

       let country = 'Word Wide'
        
        
        const handleCountryChange = () => {
                return 'Spain'
        }

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


        const wrapper = shallow(<ToolBar country ={country} countries={countries} handleCountryChange={handleCountryChange}/>)
    
        expect(wrapper).toMatchSnapshot()
    
    });
});