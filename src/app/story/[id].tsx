import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { stories } from "../../data/stories";


export default function ScreenName() {
  const { id } = useLocalSearchParams();
  const story = stories.find(
    s => s.id === id
  );
  return (
    
      
    <View>
      <Stack.Screen
      options={{
        title: story?.title ?? "Story",
      }}
      />
      <Text>{story?.title}</Text>
      <Text>{story?.author}</Text>
    </View>
  );
}