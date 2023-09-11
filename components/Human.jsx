import { Image, Text } from "react-native";

function Human({firstName, name, children}) {
  return (
  <>
  {children}
    <Text>
      {firstName} {name}
    </Text>
  </>
  );
}

export default Human;
