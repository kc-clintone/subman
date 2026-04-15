import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import {styled} from "nativewind"
import { SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView)

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-3xl font-sans-extrabold text-primary">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary px-4 py-4">
        <Text className="text-white  font-sans-bold">Go to Onboarding</Text>
      </Link>

      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded bg-primary px-4 py-4"
      >
        <Text className="text-white  font-sans-bold">Go to Sign In</Text>
      </Link>

      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded bg-primary px-4 py-4"
      >
        <Text className="text-white  font-sans-bold">Go to Sign Up</Text>
      </Link>

      <Link
        href="/subscriptions/spotify"
        className="mt-4 rounded bg-primary px-4 py-4"
      >
        <Text className="text-white  font-sans-bold">Spotify Subscriptions</Text>
      </Link>

      <Link
        href={{
            pathname: "/subscriptions/[id]",
            params: { id: "claude" }
        }}
      >
        Claude Subs
      </Link>
    </SafeAreaView>
  );
}
