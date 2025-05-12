import { ClerkLoaded, ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { router, Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
const publishableKey= process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

export function InitialLayout() {
  const {isLoaded, isSignedIn}= useAuth();

  useEffect(()=>{
    if(!isLoaded) return;

    if(isSignedIn){
      router.replace('/(auth)/(tabs)/today')
    }
    else{
      router.replace('/')
    }
  },[isSignedIn, isLoaded])

  if(!isLoaded){
    return(
      <View>
        <ActivityIndicator size='large' color={'black'}/>
      </View>
    )
  }
  return (
    <Stack screenOptions={{contentStyle:{backgroundColor:'white'}}}>
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