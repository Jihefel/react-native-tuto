import { StyleSheet } from "react-native";
import { useState } from "react";
import { TouchableOpacity, Text } from "react-native"; //Bouton en React Native !!
import AgeDisplay from "./AgeDisplay";

export default function AgeCounter() {
  const [age, setAge] = useState(30);

  const increaseAge = () => {
    setAge((age) => age + 1);
  };

  return (
    <>
      <TouchableOpacity style={styles.bouton} onPress={increaseAge}>
        <Text>Augmenter</Text>
      </TouchableOpacity>
      <AgeDisplay age={age}></AgeDisplay>
    </>
  );
}
const styles = StyleSheet.create({
  bouton: {
    backgroundColor: "lightblue",
    width: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
