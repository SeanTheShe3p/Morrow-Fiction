import { router } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";
import { stories } from "../data/stories";
export default function LibraryScreen() {
  return (
    <View>
      <Text>Morrow Fiction</Text>

      <Button
        title="Open Zork"
        onPress={() => router.push("/story/zork1")}
        />

      <Button
        title="Morrow"
        onPress={() => router.push("/morrow")}
        />

      <Button
        title="settings"
        onPress={() => router.push("/settings")}
        />
      
      {stories.map(story => (
        <Text key={story.id}>
          {story.title}
        </Text>
      ))}



    </View>
  );
}