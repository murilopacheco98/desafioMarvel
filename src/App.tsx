import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

import AppRoutes from './routes/AppRoutes';
import StylesGlobal from './config/GlobalStyles';
import store from './store/index';

const App: React.FC = () => {
  return (
    <Provider store={store}>
        {/* <StylesGlobal /> */}
        <AppRoutes />
    </Provider>
  );
};

export default App;
