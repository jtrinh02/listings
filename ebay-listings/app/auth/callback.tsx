import { useEffect } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function CallbackScreen() {
  const { code, state } = useLocalSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (code) {
      // Handle the OAuth exchange here (send `code` to your backend or fetch token directly)
      console.log("OAuth code:", code);

      // You could store token, make API calls, etc. Then redirect:
      router.replace("/");
    }
  }, [code]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Logging you in...</Text>
    </View>
  );
}
