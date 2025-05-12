import { Tabs } from 'expo-router'
import React from 'react'

export default function tabayout() {
  return (
    <Tabs>
        <Tabs.Screen name="home" options={{title:"Home", tabBarIcon:()=>"house"}}/>
        <Tabs.Screen name="profile" options={{title:"Profile", tabBarIcon:()=>"person"}}/>
    </Tabs>
  )
}