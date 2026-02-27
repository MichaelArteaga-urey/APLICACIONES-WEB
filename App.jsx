import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {MyTabs} from './navigation/BottomNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CarritoProvider } from './context/Carrito.Context';
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

    <CarritoProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </CarritoProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
