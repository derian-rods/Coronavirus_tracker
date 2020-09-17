import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
export const List = ({countries}) => {
    return (
     <>
                <div className="app__list">
                <div className="list">
                    <h3 className="list__title">Cases By Country</h3>
                    <ul className="list__ul">
                    {
                            countries.map(country => (
                                <li className="list__li" key={country.country}>
                                   <div>
                                       <img className="list__flag" src={country.countryInfo.flag} alt={country.country} />
                                   <span>{country.country}</span>
                                   </div>
                                    <span>{country.cases}<i className="fas fa-virus list__cases"></i></span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
     </>
    )
}

    List.propTypes = {
        countries: PropTypes.array.isRequired,
    }