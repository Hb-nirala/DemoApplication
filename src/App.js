import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './AppRoutes';

const App = () => {

  return (
    <>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </>
  )
}
const styles = StyleSheet.create({
})
export default App;