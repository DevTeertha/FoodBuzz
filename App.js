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
import OnBoardScreen from './components/OnBoardScreen/OnBoardScreen';

export const stateContext = createContext();

const App = () => {
  const [cart, setCart,userInfo, setuserInfo] = useState([]);
  return (
      <stateContext.Provider value={[cart, setCart, userInfo, setuserInfo]}>
        <Cart></Cart>
        <Login></Login>
        <OnBoardScreen></OnBoardScreen>
      </stateContext.Provider>
  );
};
export default App;
