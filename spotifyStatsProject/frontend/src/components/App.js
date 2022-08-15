import '../static/App.css';
import React from 'react';
import ExplicitPie from '../components/chartWrappers/ExplicitPie'
import ArtistAppsDonut from './chartWrappers/ArtistAppsDonut'
import FollowedBar from './chartWrappers/FollowedBar'
import SongStatsRadar from './chartWrappers/SongStatsRadar'
import PopBar from './chartWrappers/PopBar';
import CommonGenresDonut from './chartWrappers/CommonGenresDonut';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function App(props) {
  let access_token = props["access_token"]

  return (
    <div id="app">
      <h5> react explicit pie for top fifty</h5>
      <ExplicitPie access_token={access_token} top_fifty={true}/>
      <h5> react explicit pie for all saved</h5>
      <ExplicitPie access_token={access_token} top_fifty={false}/>

      <h5>React artist appearences donut for top fifty</h5>
      <ArtistAppsDonut access_token={access_token} top_fifty={true}/>
      <h5>React artist appearences donut for all saved</h5>
      <ArtistAppsDonut access_token={access_token} top_fifty={false}/>

      <h5>React Top 10 most followed in top 50</h5>
      <FollowedBar access_token={access_token} top_ten={true}/>
      <h5>React Top 10 least followed in top 50</h5>
      <FollowedBar access_token={access_token} top_ten={false}/>

      <h5>React Average stats for top fifty</h5>
      <SongStatsRadar access_token={access_token} top_fifty={true}/>
      <h5>React Average stats for all saved</h5>
      <SongStatsRadar access_token={access_token} top_fifty={false}/>

      <h5>React global popularities of top 50 artists</h5>
      <PopBar access_token={access_token} artists_bool={true}/>
      <h5>React global popularities of top 50 songs</h5>
      <PopBar access_token={access_token} artists_bool={false}/>

      <h5>React most frequent genres among top 50 artists</h5>
      <CommonGenresDonut access_token={access_token}/>

      <p> hi this is the main app component, in the future the charts will be child components of their chart wrappers which will be children of this App component </p>
    </div>
  );
}

export default App;

