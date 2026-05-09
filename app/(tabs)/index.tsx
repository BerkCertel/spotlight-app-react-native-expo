import { Link } from "expo-router";
import { View } from "react-native";
import { styles } from "../../styles/auth.styles";

export default function index() {
  return (
    <View style={styles.container}>
      <Link href="/notifications">Feed Screen in tabs</Link>
    </View>
  );
}
