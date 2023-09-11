import { Alert, Image, Platform, Text, View } from "react-native"; // Platform sert à établir quel est le device utilisé
import Human from "./components/Human";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FlexDemo from "./components/FlexDemo";
import AgeCounter from "./components/AgeCounter";
import Child from "./components/Child";

export default function App() {
  const hello = (name) => {
    Alert.alert(`Hello ${name}`);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <FlexDemo />
        <Human firstName='Jeremy' name='Flament'>
          <Image src={"https://static.wikia.nocookie.net/terminator/images/8/85/Trjs67656.jpg/revision/latest?cb=20090525095809"} style={{ width: 200, height: 300 }} />
        </Human>
        <AgeCounter />
        {Platform.OS === "android" ? <Text>Hello Android</Text> : <Text>Hello Apple</Text>}
        <Child onPress={hello} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
