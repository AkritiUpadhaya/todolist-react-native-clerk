import { ClerkLoaded, ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { Stack, router, usePathname, useSegments } from 'expo-router';
import React, { useEffect } from 'react';
const publishableKey= process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

export function InitialLayout() {
  const {isLoaded, isSignedIn}= useAuth();
  const segments= useSegments();
  const pathname= usePathname();

  useEffect(()=>{
    if(!isLoaded) return;
    console.log(pathname);
    console.log(segments);
    const inAuthGroup= segments[0] === '(auth)';
    console.log(inAuthGroup);

    if(isSignedIn && !inAuthGroup){
      router.replace('/(auth)/(tabs)/today')
    }
    else if(!isSignedIn && inAuthGroup){
      router.replace('/')
    }
  },[isLoaded, isSignedIn, segments])

  return null;
}
const Rootlayout = () => {
    return (
        <ClerkProvider 
        publishableKey={publishableKey}
        tokenCache={tokenCache}
         >
          <ClerkLoaded>
          <InitialLayout/>
          <Stack>
      <Stack.Screen name="index" options={{headerShown:false}}/>
      <Stack.Screen name="(auth)" options={{headerShown:false}}/>
    </Stack>
          </ClerkLoaded> 
        </ClerkProvider>
    )
}
export default Rootlayout