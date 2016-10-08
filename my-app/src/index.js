//ReactJS
import React from 'react';
import ReactDOM from 'react-dom';

//GraphiQl
//import GraphiQL from 'graphiql';
//import fetch from 'isomorphic-fetch';

//import App from './App';
//import './index.css';

//Select-react
import Select from 'react-select';
import 'react-select/dist/react-select.css';

var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three'}
];

function logChange(val) {
    console.log("Selected: " + val);
};



ReactDOM.render(
    <Select
        name="form-field-name"
        value="one"
        options={options}
        onChange={logChange}
    />,
    document.getElementById('input1')
)

