import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "@app/store";
import { worker } from './mock/browser';


async function enableMocking() {
  return worker.start()
}




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
})