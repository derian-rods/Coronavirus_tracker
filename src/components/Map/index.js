import React, { useEffect, useState } from "react";
import { scaleQuantile } from "d3-scale";
import {Table} from './Table'
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  ZoomableGroup,
  Graticule,
} from "react-simple-maps";
import PropTypes from 'prop-types'
import './style.css'

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  
  const MapChart = ({countries}) => {
    const [data, setData] = useState([]);
    
    const colorScale = scaleQuantile()
      .domain(data.map(d => d.cases))
      .range([   
        "#ffedea",
        "#ffcec5",
        "#ffad9f",
        "#ff8a75",
        "#ff5533",
        "#e2492d",
        "#be3d26",
        "#9a311f",
        "#782618",
    ]);
      
  useEffect(() => {
    
   const valueInfo = countries.map(country =>({
      name: country.country,
      cases: country.cases,
      iso3: country.countryInfo.iso3,
      deaths: country.deaths,
      recovered: country.recovered
    }));

    setData(valueInfo)
  
  },[countries]);  
  return (
    <div className="app__map">
        <div className="card__map">
          <h2 className="map__title">World Map</h2>
          <div className="map__table">
             <Table />
          </div>
        <ComposableMap
                projectionConfig={{
                    rotate: [-10, 0, 0],
                    scale: 160
                }}
                >
                <ZoomableGroup>
                <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
                <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
                {data.length > 0 && (
                    <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => {
                        const d = data.find((s) => s.iso3 === geo.properties.ISO_A3);
                        return (
                            <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={d ? colorScale(d.cases) : "#ffedea"}
                            />
                        );
                        })
                    }
                    </Geographies>
                )}
                </ZoomableGroup>
                </ComposableMap>
        </div>
    </div>
  );
};

MapChart.propTypes = {
  countries: PropTypes.array.isRequired,
}


export default MapChart;