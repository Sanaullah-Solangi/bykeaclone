import { Colors } from "@/constants/Colors";
import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

interface ThemeTextProps {
  children: string | ReactNode;
  style?: object;
  color?: string;
}

export default function ThemeText({ style, children, color }: ThemeTextProps) {
  return (
    <Text style={[styles.text, style && style, color && { color: color }]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.light.textColor,
    fontWeight: "bold",
  },
});
