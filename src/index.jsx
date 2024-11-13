import React from 'react';
import { createRoot } from 'react-dom/client';
import TodosApp from './page/TodosApp';
import './styles/style.css';
import { Provider } from 'react-redux';
import { store } from './store';

const root = createRoot(document.getElementById('root'));
root.render(<Provider store={store}><TodosApp /></Provider>) ;