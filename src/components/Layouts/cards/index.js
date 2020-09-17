import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
export const Card = ({title, total, increment, icon, icon2, color}) => {
    return (
        <div className="card">
           <div className="card__body">
           <h4 className="card__title">{title}</h4>
            <h3 className={color}>
              {
                  increment === 0 ? (
                    <i className="far fa-smile"></i>
                  ):(

                  <span>+{increment && new Intl.NumberFormat("es-ES").format(increment)} <i className={icon2}></i></span>
                  )
              }
            </h3>
            <span className="card__text">
                {new Intl.NumberFormat("es-ES").format(total)} total <i className={icon}></i>
            </span> <br/>
           </div>  
        </div>
    )
}
Card.propType = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number,
  increment: PropTypes.number,
  icon: PropTypes.string,
  icon2: PropTypes.string,
  color: PropTypes.string
}