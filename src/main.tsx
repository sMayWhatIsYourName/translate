import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/globals.scss';
import { Provider } from 'react-redux';
import { store } from './slices/index';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
