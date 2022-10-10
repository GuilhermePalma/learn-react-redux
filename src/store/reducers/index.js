import { combineReducers } from "redux";    
import classes from "./classes";   

// Combine Reducers é usado para quando se deseja manipular diversos Reducers (Ex: Aula, Usuario, etc)
export default combineReducers({ classes });

// New Mapping:
// {
//    classes: { activeModule: {}, activeLeasson: {}, modules: [] },
//    anotherObject: {}, ....
// }