import { ClerkLoaded, ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { Stack } from 'expo-router';
import React from 'react';
const publishableKey= process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

export function InitialLayout() {
  return (
    <Stack screenOptions={{contentStyle:{backgroundColor:'#e5e5e5'}}}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
}
const Rootlayout = () => {
    return (
        <ClerkProvider 
        publishableKey={publishableKey}
        tokenCache={tokenCache}
         >
          <ClerkLoaded>
          <InitialLayout/>
          </ClerkLoaded> 
        </ClerkProvider>
    )
}
export default Rootlayout