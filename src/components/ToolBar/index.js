import React from 'react';
import PropTypes from 'prop-types'
import './style.css';

export const ToolBar = ({ countries, country, handleCountryChange}) => {

    return (
        <>
                <div className="navbar">
                <div className="navbar__brand">
                 <img className="brand__img" src='https://www.flaticon.com/svg/static/icons/svg/2785/2785819.svg' alt="corona virus"></img>
                 <span className="brand__text">Tracker</span>
                </div>
                <div className="navbar__card">
                     <select value={country} onChange={handleCountryChange}>
                         <option >World Wide</option>
                         {countries.map(c => (
                             <option key={c.country}>{c.country}</option>
                         ))}
                     </select>
                </div>
             </div>
        </>
    )
}

ToolBar.propTypes = {
    countries: PropTypes.array.isRequired,
    country: PropTypes.string.isRequired,
    hadleCountryChange: PropTypes.func
}