import { Text, TouchableOpacity } from "react-native";

function Child({onPress}) {
    return ( 
        <>
            <TouchableOpacity onPress={() => onPress("Jeremy")}>
                <Text>Click me</Text>
            </TouchableOpacity>
        </>
     );
}

export default Child;