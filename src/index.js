import React from 'react';
import { render } from 'react-dom';

import Map from './components/Map';

const center = {
    lat: 47.6062095,
    lng: -122.3320708 
};

render(
    <Map 
        app_id="YOUR_APP_ID"
        app_code="YOUR_APP_CODE"
        center={center}
        zoom={14}
    />,
    document.getElementById('root')
)