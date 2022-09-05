import { StatusBar } from "expo-status-bar"
import { Text, Image, SafeAreaView, TouchableOpacity } from "react-native"
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks"

export default function App() {
  const dimensions = useDimensions()
  const orientation = useDeviceOrientation()
  console.log("App executed")
  console.log(dimensions)
  console.log(orientation)

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-blue-500">
      <Text>Hello, World!</Text>
      <TouchableOpacity>
        <Image
          fadeDuration={1000}
          blurRadius={10}
          source={{
            uri: "https://picsum.photos/200/300",
            height: 300,
            width: 200,
          }}
        />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}
