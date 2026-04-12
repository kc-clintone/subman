import { Link } from 'expo-router'
import { View, Text } from 'react-native'

const signIn = () => {
  return (
    <View>
      <Text>sign in</Text>
      <Link href="/(auth)/sign-up">Don&apos;t have an account? Sign Up</Link>
    </View>
  );
}

export default signIn 