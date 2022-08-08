import React from 'react';
import { Provider } from 'react-redux';

import AppRoutes from './routes/AppRoutes';
import GlobalStyle from './config/GlobalStyles';
import store from './store/index';

const App: React.FC = () => {
  return (
    <Provider store={store}>
        <GlobalStyle />
        <AppRoutes />
    </Provider>
  );
};

export default App;
