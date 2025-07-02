// App.js
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/toastify-neon.scss';


function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar
  closeOnClick
  pauseOnHover
  theme="dark"
  toastClassName="neon-toast"
  bodyClassName="neon-body"
/>

    </BrowserRouter>
  );
}

export default App;
