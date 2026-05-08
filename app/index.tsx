import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/auth.styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>

      <Image
        source={require("../assets/images/react-logo.png")}
        style={{ width: 200, height: 200 }}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Navigate to Login")}
      >
        <Text style={styles.buttonText}>Go to Login</Text>
      </TouchableOpacity>
      <Pressable
        style={styles.button}
        onPress={() => alert("Navigate to Signup")}
      >
        <Text style={styles.buttonText}>Go to Signup</Text>
      </Pressable>
    </View>
  );
}
