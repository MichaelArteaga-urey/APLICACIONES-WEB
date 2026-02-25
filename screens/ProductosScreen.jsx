import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import videojuegos from '..//assets/video_juegos.json'
import TarjetaProductos from '../components/TarjetaProductos'
import { FlatList } from 'react-native-gesture-handler'

export default function ProductosScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={videojuegos.videojuegos}
        numColumns={2}
        renderItem={({ item }) =>
          <TarjetaProductos item={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 10,
  }
})