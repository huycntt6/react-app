import React from 'react';

import HPlatform, { HMap, HMapMarker } from "react-here-map";

const coords = {lat: 10.824456, lng: 106.772890};

const icon =
  '<svg width="24" height="24" ' +
  'xmlns="http://www.w3.org/2000/svg">' +
  '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
  'height="22" /><text x="12" y="18" font-size="12pt" ' +
  'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
  'fill="white">H</text></svg>';

export default ()=>(
    <HPlatform
        app_id="6m9ALfWLL5BMuX4tnCvW"
        app_code="TO06XKqqymooI5Ju5IzM"
        apikey="0HCuGh98c7BcldYc8eVZG01szdMEwbJeTpc60K6UGP0"
        useCIT
        useHTTPS
        includeUI
        includePlaces
    >
        <HMap
        style={{
            height: "365px",
            minWidth: "500px",
        }}
        mapOptions={{ center: {lat: 10.824456, lng: 106.772890}, zoom: 14 }}
        >
            <HMapMarker coords={coords} icon={icon} />
        </HMap>
    </HPlatform>
);