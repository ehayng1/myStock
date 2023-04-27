import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  currentUser,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
const auth = getAuth();

export default function SignUp(props) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const getUserId = async function uploadBeforePromise() {
    return new Promise(function (resolve, reject) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve(user.uid);
        } else {
        }
      });
    });
  };

  const register = () => {
    if (email == "") {
      setEmailError("Please enter an email.");
      return;
    } else if (name == "") {
      setNameError("Please enter your name.");
      return;
    } else if (password == "") {
      setPasswordError("Please enter a password.");
      return;
    } else if (confirmPassword == "") {
      setConfirmPasswordError("Please confirm your password.");
      return;
    } else if (password != confirmPassword) {
      setConfirmPasswordError("Password does not match.");
      return;
    }

    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // const setId = async (id) => {
        // };
        console.log("The user account is created.");
        const id = await getUserId();
        // setId(id);
        // const uniqueId = await AsyncStorage.getItem("uniqueId");
        const uniqueId = id;
        console.log("ID: ", uniqueId);
        await setDoc(doc(db, "users", uniqueId), {
          email: email,
          name: name,
          balance: 5000,
          balanceHistory: [10000, 10000, 10000, 10000, 10000],
          revenueHistory: [10000, 10000, 10000, 10000, 10000],
          weeklyProfit: 0,
        });
        await setDoc(doc(db, "transaction", uniqueId), {
          history: [],
        });
        await setDoc(doc(db, "purchaseHistory", uniqueId), {});
        await setDoc(doc(db, "holdingStack", uniqueId), {});
        const init = async () => {};
        // props.navigation.reset({
        //   index: 0,
        //   routes: [{ name: "Login" }],
        // });
        props.navigation.navigate("Login");
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == "auth/email-already-in-use") {
          // Toast.show({
          //   type: "error",
          //   text1: "Email is already used.",
          // });
          alert("Email is already used.");
        } else if (errorCode == "auth/invalid-email") {
          // Toast.show({
          //   type: "error",
          //   text1: "Email format is not correct.",
          // });
          alert("Email format is not correct.");
        } else if (errorCode == "auth/invalid-email") {
          // Toast.show({
          //   type: "error",
          //   text1: "Email format is not correct.",
          // });
          alert("Email format is not correct.");
        } else if (errorCode == "auth/weak-password") {
          // Toast.show({
          //   type: "error",
          //   text1: "Password is too weak.",
          // });
          alert("Password is too weak.");
        }
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      {/* <KeyboardAwareScrollView> */}
      <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
          marginLeft: 20,
          // marginTop: hp(20),
          marginTop: "20%",
        }}
      >
        Sign Up
      </Text>
      <TextInput
        style={{
          backgroundColor: "#EEEEEE",
          padding: 15,
          fontSize: 15,
          marginTop: 50,
          borderRadius: 15,
          marginHorizontal: 20,
        }}
        autoCapitalize={"none"}
        placeholder="Email"
        onChangeText={setEmail}
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
          marginTop: 20,
          marginHorizontal: 20,
        }}
        autoCapitalize={"none"}
        placeholder="Name"
        onChangeText={setName}
        onChange={() => {
          setNameError("");
        }}
      ></TextInput>
      <TextInput
        style={{
          backgroundColor: "#EEEEEE",
          padding: 15,
          fontSize: 15,
          marginTop: 20,
          borderRadius: 15,
          marginHorizontal: 20,
        }}
        autoCapitalize={"none"}
        onChange={() => {
          setPasswordError("");
        }}
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={setPassword}
      ></TextInput>
      <TextInput
        style={{
          backgroundColor: "#EEEEEE",
          padding: 15,
          fontSize: 15,
          marginTop: 20,
          borderRadius: 15,
          marginHorizontal: 20,
        }}
        autoCapitalize={"none"}
        onChange={() => {
          setConfirmPasswordError("");
        }}
        secureTextEntry={true}
        placeholder="Confirm Password"
        onChangeText={setConfirmPassword}
      ></TextInput>
      <TouchableOpacity
        style={{
          backgroundColor: "#537FE7",
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
          padding: 15,
          borderRadius: 15,
        }}
        onPress={() => {
          register();
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
            Sign Up
          </Text>
        )}
      </TouchableOpacity>
      <Text
        style={{
          textAlign: "center",
          marginTop: 5,
        }}
      >
        Already have an account?
        <Text
          style={{ fontWeight: "bold" }}
          onPress={() => {
            props.navigation.navigate("Login");
          }}
        >
          {" "}
          Login
        </Text>
      </Text>
      {/* </KeyboardAwareScrollView> */}
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
