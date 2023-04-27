import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import {
  getAuth,
  signInWithEmailAndPassword,
  currentUser,
} from "firebase/auth";
const auth = getAuth();
import { db } from "../firebaseConfig";
// import { Input } from "@rneui/themed";
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

// import Toast from 'react-native-toast-message';
// const firebaseConfig = {
//     apiKey: "AIzaSyBSqX27chazWngauvncclnrub-WhScEmbE",
//     authDomain: "jejuapp-1ae46.firebaseapp.com",
//     projectId: "jejuapp-1ae46",
//     storageBucket: "jejuapp-1ae46.appspot.com",
//     messagingSenderId: "963611345040",
//     appId: "1:963611345040:web:0624b1f97dd5e2ee3a1815",
//     measurementId: "G-NYD1LVSLQW"
//   };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = () => {
    if (email == "") {
      setEmailError("Please input an email");
    } else if (password == "") {
      setPasswordError("Please input a password");
    }
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const setId = async (id) => {
          await AsyncStorage.setItem("uniqueId", id);
        };
        // const user = currentUser(auth);
        // // access the user uid
        // if (user) {
        //   // uid = user.uid;
        //   console.log(user.uid);
        //   await setId(user.uid);
        // }
        // Disabled: the login fails if enabled
        // await setId(id);
        console.log("Logged In");
        // Signed In
        props.navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode == "auth/invalid-email") {
          //   Toast.show({
          //     type: "error",
          //     text1: "Email format is not correct.",
          //   });
          alert("Email format is not correct.");
        } else if (errorCode == "auth/user-not-found") {
          //   Toast.show({
          //     type: "error",
          //     text1: "Email does not exist.",
          //   });
          alert("Email does not exist!");
        } else if (errorCode == "auth/wrong-password") {
          //   Toast.show({
          //     type: "error",
          //     text1: "Email does not exist.",
          //   });
          alert("Incorrect Password!");
        }
        setLoading(false);
        console.log(errorCode);
      });
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
          marginLeft: 20,
        }}
      >
        Login
      </Text>
      <TextInput
        style={{
          backgroundColor: "#EEEEEE",
          padding: 15,
          fontSize: 15,
          borderRadius: 15,
          marginHorizontal: 20,
        }}
        placeholder="Email"
        autoCapitalize={"none"}
        onChangeText={(e) => {
          setEmail(e);
        }}
        onChange={() => {
          setEmailError("");
        }}
      ></TextInput>
      <TextInput
        style={{
          backgroundColor: "#EEEEEE",
          padding: 15,
          fontSize: 15,
          borderRadius: 15,
          marginBottom: 50,
          marginTop: 20,
          marginHorizontal: 20,
        }}
        placeholder="Password"
        autoCapitalize={"none"}
        onChangeText={(e) => {
          setPassword(e);
        }}
        onChange={() => {
          setPasswordError("");
        }}
      ></TextInput>
      <TouchableOpacity
        style={{
          backgroundColor: "#537FE7",
          //   backgroundColor: "#E64A19",
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
          padding: 15,
          borderRadius: 15,
        }}
        onPress={() => {
          login();
        }}
      >
        {loading ? (
          <ActivityIndicator color={"white"} />
        ) : (
          <Text
            style={{
              fontSize: 15,
              textAlign: "center",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Login
          </Text>
        )}
      </TouchableOpacity>
      <Text
        style={{
          textAlign: "center",
          marginTop: 5,
        }}
      >
        Don't have an account?
        <Text
          style={{ fontWeight: "bold" }}
          onPress={() => {
            props.navigation.navigate("SignUp");
          }}
        >
          {" "}
          Sign Up
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
});
