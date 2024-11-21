import { createRoot } from 'react-dom/client';
import * as React from 'react';

const root = createRoot(document.getElementById('root'));

const element = React.createElement('h1', {}, 'Hello World!');

console.log(element);

root.render(element);
