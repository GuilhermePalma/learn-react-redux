import React from 'react';
import {connect} from "react-redux";

const Video = ({activeModule, activeLeasson}) => (
    <div>
      <strong>Módulo {activeModule.title}</strong> - <span>Aula {activeLeasson.title}</span>
    </div>
);

export default connect(state => ({
  activeModule: state.classes.activeModule,
  activeLeasson: state.classes.activeLeasson,
}))(Video);