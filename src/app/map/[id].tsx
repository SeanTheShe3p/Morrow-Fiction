import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function ScreenName() {
  const params = useLocalSearchParams();
  const id = String(params.id);

  return (
    <View>
      <Text>Map {id}</Text>
      <Button
        title="Continue"
        onPress={() => router.push("/reader/${id}")}
        />
    </View>
  );
}