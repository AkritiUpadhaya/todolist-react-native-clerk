import { Tabs } from 'expo-router'
import React from 'react'

export default function tablayout() {
  return (
    <Tabs>
        <Tabs.Screen name="today" options={{title:"Today", tabBarIcon:({focused})=>"house"}}/>
        <Tabs.Screen name="search" options={{title:"Search", tabBarIcon:()=>"search"}}/>
        <Tabs.Screen name="browse" options={{title:"Browse", tabBarIcon:()=>"home"}}/>
        <Tabs.Screen name="upcoming" options={{title:"Upcoming", tabBarIcon:()=>"calendar"}}/>
    </Tabs>
  )
}