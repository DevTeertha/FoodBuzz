import React, { useState, createContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';

export const stateContext = createContext();

const App = () => {
  const [cart, setCart,userInfo, setuserInfo] = useState([]);
  return (
      <stateContext.Provider value={[cart, setCart, userInfo, setuserInfo]}>
        <Cart></Cart>
        <Login></Login>
      </stateContext.Provider>
  );
};
export default App;
