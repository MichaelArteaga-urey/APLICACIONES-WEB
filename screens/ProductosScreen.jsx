import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import videojuegos from '..//assets/video_juegos.json'
import TarjetaProductos from '../components/TarjetaProductos'
import { FlatList } from 'react-native-gesture-handler'

export default function ProductosScreen() {
  return (
    <View>
      <FlatList
        data={videojuegos}
        renderItem={({ item }) => <TarjetaProductos item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({

})