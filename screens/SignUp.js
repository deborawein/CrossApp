import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { useEffect, useState } from "react";

export function SignUpScreen ( props ) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
      <View style={styles.page}>
        <Text style={styles.title}>Sign Up Screen</Text>
        <View style={styles.inputGroup}>
            <Text>Email address</Text>
            <TextInput 
            style={styles.input}
            placeholder="you@domain.com"
            value={email}
            onChangeText={(emailText) => setEmail(emailText)}
             />
        </View>
        <View style={styles.inputGroup}>
            <Text>Password</Text>
            <TextInput 
                style={styles.input}
                placeholder='minimum 8 characters'
                value={password}
                onChangeText={(passwordText) => setPassword(passwordText)}
                secureTextEntry={true}
            />
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>

        </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({

    page: {
      marginHorizontal: 60,  
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
    input: {
        backgroundColor: '#ffffff',
        padding: 5,

    },
    inputGroup: {
        marginVertical: 5,
    },
    button: {
        backgroundColor: '#000000',
        padding: 10,
        marginVertical: 10,
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
    }
  })