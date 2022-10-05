import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppRoutes from './routes/AppRoutes';
import GlobalStyle from './config/GlobalStyles';
import { store, persistor } from './store/index';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <AppRoutes />
      </PersistGate> 
    </Provider>
  );
};

export default App;
