import { View, Text, TouchableOpacity, Modal, TextInput, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useState, useEffect } from 'react'

export function HomeScreen(props) {
    const navigation = useNavigation()

    useEffect(() => {
        if (!props.authStatus) {
            navigation.navigate('Signin')
        }
    }, [props.authStatus])

    return (
        <View>
            <Text>Home Screen</Text>
            <TouchableOpacity style={styles.button} onPress={() => props.signOutHandler()} >
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    screen: {
      justifyContent: "center",
    },
    modal: {
      padding: 10,
      paddingTop: 50,
      flex: 1,
      justifyContent: "start",
      margin: 20,
      backgroundColor: "lightblue",
    },
    modalInput: {
      fontSize: 18,
      backgroundColor: "#ffffff",
    },
    modalInput2: {
      minHeight: 80,
      fontSize: 18,
      backgroundColor: "#ffffff",
    },
    modalLabel: {
      fontSize: 20,
      marginBottom: 10,
    },
    button: {
      backgroundColor: "#000000",
      padding: 5,
      flex: 1,
    },
    addButton: {
      padding: 5,
      backgroundColor: "green",
      flex: 1,
    },
    buttonText: {
      color: "#ffffff",
      fontSize: 12,
      textAlign: "center",
    },
    buttonsRow: {
      flexDirection: "row",
      marginVertical: 10,
    }
  })