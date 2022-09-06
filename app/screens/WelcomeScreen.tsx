import { Image, ImageBackground, Text, View } from "react-native"
import React from "react"

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      className="flex h-full w-full flex-col justify-end"
    >
      <View className="absolute top-16 flex h-fit w-full flex-col items-center">
        <Image
          source={require("../assets/logo-red.png")}
          className="h-40 w-40"
        />
        <Text className="m-2 text-xl font-bold">Sell What You Don't Need</Text>
      </View>
      <View className="h-14 w-full bg-primary"></View>
      <View className="h-16 w-full bg-secondary"></View>
    </ImageBackground>
  )
}
