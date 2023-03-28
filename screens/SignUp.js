import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { useEffect, useState } from "react";

export function SignUpScreen ( props ) {
    const [email, setEmail] = useState("")
    const [validEmail, setValidEmail] = useState(false)
    const [password, setPassword] = useState("")
    const [validPassword, setValidPassword] = useState(false)
    const [validForm, setValidForm] = useState(false)

    useEffect( () =>{
        if(email.indexOf('@') > 0) {
            setValidEmail(true)
        }
        else {
            setValidEmail(false)
        }
    }, [email])

    useEffect( () =>{
        if(password.length >= 8){
            setValidPassword(true)
        }
        else{
            setValidPassword(false)
        }
    }, [password])

    useEffect(() => {
        if(validEmail && validPassword) {
            setValidForm(true)
        }
        else {
            setValidForm(false)
        }
    })
    return (
      <View style={styles.page}>
        <Text style={styles.title}>Sign Up Screen</Text>
        <View style={styles.inputGroup}>
            <Text>Email address</Text>
            <TextInput 
            style={(validEmail) ? styles.validInput : styles.input}
            placeholder="you@domain.com"
            value={email}
            onChangeText={(emailText) => setEmail(emailText)}
             />
        </View>
        <View style={styles.inputGroup}>
            <Text>Password</Text>
            <TextInput 
                style={(validPassword) ? styles.validInput : styles.input}
                placeholder='minimum 8 characters'
                value={password}
                onChangeText={(passwordText) => setPassword(passwordText)}
                secureTextEntry={true}
            />
        </View>
        <TouchableOpacity style={(validForm) ? styles.button : styles.buttonDisabled}
            disabled={(validForm) ? false : true}>
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
        borderWidth: 1,
        borderColor: "#cccccc",

    },
    validInput: {
        borderColor: "green",
        borderWidth: 1,
        backgroundColor: '#ffffff',
        padding: 5,
    },
    inputGroup: {
        marginVertical: 5,
    },
    button: {
        backgroundColor: 'green',
        padding: 10,
        marginVertical: 10,
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
    },
    buttonDisabled: {
        backgroundColor: '#666666',
        padding: 10,
        marginVertical: 10,
    }
  })