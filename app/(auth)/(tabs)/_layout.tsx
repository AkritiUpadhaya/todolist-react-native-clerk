import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function tablayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="today"
        options={{
          title: "Today",
          tabBarIcon: ({ focused }) => (
            <Ionicons name="home" size={24} color={focused ? "blue" : "gray"} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <Ionicons name="search" size={24} color={focused ? "blue" : "gray"} />
          ),
        }}
      />
      <Tabs.Screen
        name="browse"
        options={{
          title: "Browse",
          tabBarIcon: ({ focused }) => (
            <Ionicons name="compass" size={24} color={focused ? "blue" : "gray"} />
          ),
        }}
      />
      <Tabs.Screen
        name="upcoming"
        options={{
          title: "Upcoming",
          tabBarIcon: ({ focused }) => (
            <Ionicons name="calendar" size={24} color={focused ? "blue" : "gray"} />
          ),
        }}
      />
    </Tabs>
  );
}