import React from 'react';
import {createRoot} from 'react-dom/client';

const element = <h1>Roushan is the best</h1>
console.log(element)

const container = document.getElementById("root")
const root = createRoot(container);

root.render(element)
















