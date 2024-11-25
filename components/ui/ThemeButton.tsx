import { Colors } from "@/constants/Colors";
import { ReactNode } from "react";
import { StyleSheet, TextStyle, TouchableOpacity } from "react-native";
import ThemeText from "./ThemeText";
interface ThemeButtonProps {
  children: string | ReactNode;
  bgColor?: string;
  style?: object;
  onPress?: () => void;
  mt?: number;
  mb?: number;
  textColor?: string;
  textStyle?: TextStyle;
}
export default function ThemeButton({
  children,
  bgColor,
  style,
  onPress,
  mt,
  mb,
  textColor,
  textStyle,
}: ThemeButtonProps) {
  return (
    <TouchableOpacity
    activeOpacity={0.7}
      style={[
        styles.buttonDefaultStyle,
        style && style,
        bgColor && { backgroundColor: bgColor },
        mt ? { marginTop: mt } : null,
        mb ? { marginTop: mb } : null,
      ]}
      onPress={onPress}
    >
      <ThemeText style={textStyle} color={textColor || "#fff"}>
        {children}
      </ThemeText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonDefaultStyle: {
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light.primaryTwo,
    borderRadius: 8,
  },
});
