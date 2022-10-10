import React from "react";

import * as ClassesAction from "../../store/actions"

// Conncet: Pattern do react usado para compartilhar informações entre componentes
import { connect } from "react-redux";

const SideBar = ({ modules, dispatch }) => (
  <aside>
    {modules.map((module) => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.leassons.map((leasson) => (
            <li key={leasson.id}>
                {leasson.title}
                <button onClick={() => dispatch(ClassesAction.toggleLesson(module, leasson))}>Selecionar</button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

export default connect((state) => ({ modules: state.classes.modules }))(SideBar);
