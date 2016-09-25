import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ContactsAppContainer from './ContactsAppContainer';

/*let contacts = [
    { name: "Cassio Zen", email: "cassiozen@gmail.com" },
    { name: "Dan Abramov", email: "gaearon@somewhere.com" },
    { name: "Pete Hunt", email: "floydophone@somewhere.com" },
    { name: "Paul O'Shannessy", email: "zpao@somewhere.com" },
    { name: "Ryan Florence", email: "rpflorence@somewhere.com" },
    { name: "Sebastian Markbage", email: "sebmarkbage@here.com" }
];*/

// console.log(contacts);
ReactDOM.render(<ContactsAppContainer />, document.getElementById('root'));
