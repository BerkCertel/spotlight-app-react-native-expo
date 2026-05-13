import { StyleSheet, Text, type TextProps } from "react-native";

type ThemedTextProps = TextProps & {
  type?: "default" | "title" | "link" | "subtitle";
};

export function ThemedText({
  style,
  type = "default",
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      style={[
        type === "default" && styles.default,
        type === "title" && styles.title,
        type === "link" && styles.link,
        type === "subtitle" && styles.subtitle,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    color: "#11181C",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#11181C",
  },
  link: {
    fontSize: 16,
    color: "#0a7ea4",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#11181C",
  },
});
