import { 
  Modal, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  Image 
} from 'react-native'

import React, { useState } from 'react'

export default function TarjetaProductos(props) {

const [visible, setVisible] = useState(false);

return (
    <View> {/* 👈 Padre único */}

      {/* TARJETA */}
    <TouchableOpacity 
        style={styles.card}
        onPress={() => setVisible(true)}
    >
        <Image 
        source={{ uri: props.item.imagen }}
        style={styles.image}
        />
        <Text style={styles.title}>{props.item.nombre}</Text>
        <Text style={styles.price}>${props.item.precio}</Text>
        </TouchableOpacity>

      {/* MODAL */}
        <Modal
        visible={visible}
        animationType="fade"
        transparent={true}
        >
        <View style={styles.modalContainer}>
        <Image 
            source={{ uri: props.item.imagen }}
            style={styles.modalImage}
        />
        <Text style={styles.modalTitle}>{props.item.nombre}</Text>
        <Text style={styles.modalDescription}>
            {props.item.descripcion}
        </Text>
        <Text style={styles.modalPrice}>
            ${props.item.precio}
        </Text>

        <TouchableOpacity 
            style={styles.closeButton}
            onPress={() => setVisible(false)}
        >
            <Text style={styles.closeButtonText}>Cerrar</Text>
        </TouchableOpacity>
        </View>
        </Modal>

    </View>
    )
}

const styles = StyleSheet.create({})