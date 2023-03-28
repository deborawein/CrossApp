import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//firebase
import { firebaseConfig } from "./config/Config";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

//screens
import { HomeScreen } from './screens/HomeScreen'
import { SignUpScreen } from './screens/SignUp'
import { SignInScreen } from './screens/SignIn';

const Stack = createNativeStackNavigator();

const FbApp = initializeApp(firebaseConfig)
const FbAuth = getAuth(FbApp) 


export default function App() {

  const SignUp = (email, password) => {
    createUserWithEmailAndPassword(FbAuth, email, password)
    .then( () =>(userCredential) => console.log(userCredential))
    .catch( (error) => console.log(error))
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signup">
          { (props) => <SignUpScreen {...props} handler={SignUp} />}
        </Stack.Screen>
        <Stack.Screen name="Signin" component={ SignInScreen } />
        <Stack.Screen name="Home" component={ HomeScreen } />

      </Stack.Navigator>
    </NavigationContainer>
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
