import React from "react";
import ClassComponent from "./Pembahasan/ClassComponent";
import FunctionalComponent from "./Pembahasan/FunctionalComponent";

export default class Komponen extends React.Component {

    render() {
        return (
            <div>
              <ClassComponent></ClassComponent> 
              <FunctionalComponent></FunctionalComponent>
            </div>
        );
    }
}

export { ClassComponent };


// import ClassComponent from "./Pembahasan/classComponent";