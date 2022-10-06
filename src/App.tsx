import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppRoutes from './routes/AppRoutes';
import GlobalStyle from './config/GlobalStyles';
import { store, persistor } from './store/index';

const App: React.FC = () => {
  return (
    // <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        {/* <h1 className="text-3xl bg-black font-bold underline">Hello world!</h1> */}
        <AppRoutes />
      </PersistGate>
    </Provider>
    // </>
  );
};

export default App;
