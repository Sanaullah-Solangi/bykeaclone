import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="index" screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
      <Stack.Screen name="register" options={{ headerTitle: "Register" }} />
    </Stack>
  );
}
