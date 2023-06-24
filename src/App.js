import React, { useEffect } from 'react';
import { AppContextProvider } from './Context/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './AppRoutes';

const App = () => {

  return (
    <>
      <AppContextProvider>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </AppContextProvider>
    </>
  )
}

export default App;