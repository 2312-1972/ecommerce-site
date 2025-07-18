import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/main.scss';



const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
     <ThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </ThemeProvider>
  </React.StrictMode>
);


reportWebVitals();
