import { View, Text, Image } from "react-native"
import React from "react"

export default function ViewImageScreen() {
  return (
    <View className="h-full w-full bg-black">
      <View className="absolute left-10 top-20 h-10 w-10 bg-primary"></View>
      <View className="absolute right-10 top-20 h-10 w-10 bg-secondary"></View>
      <Image
        source={require("../assets/chair.jpg")}
        className="max-h-full w-full"
        resizeMode="contain"
      />
    </View>
  )
}
