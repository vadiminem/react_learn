import React from 'react';
import ReactDOM from 'react-dom';

import { TasksProvider } from 'providers';
import { App } from 'App';
import 'index.css';

ReactDOM.render(
  <React.StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
