import React  from 'react';
import SideBar from './compontents/SideBar';
import Video from './compontents/Video';
import {Provider} from "react-redux";
import store from './store';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Video/>
        <SideBar/> 
      </Provider>
    </div>
  );
}

export default App;
