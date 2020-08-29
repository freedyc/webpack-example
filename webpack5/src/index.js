// import './index.css';
import output from './main.js';

console.log(`${await output}🍎`);

import('./asyncFile.js').then((_) => {
    console.log(_.default);
});

import('./asyncFile1.js').then((_) => {
    console.log(_.default);
});