import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DenseTable from './components/tabla'
import reportWebVitals from './reportWebVitals';
import Filtro from './components/filtro';
// Importaciones adicionales
import { Provider } from 'react-redux';
import store from './redux/store';  // Asegúrate de que la ruta sea correcta
import Formulario from './components/formulario';

console.log('Ejecutando código en index.js');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <Filtro />
        <DenseTable />
        <Formulario />
      </header>
    </div>
  </Provider>

);

reportWebVitals();
