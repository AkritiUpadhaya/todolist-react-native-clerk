import { ClerkLoaded, ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { Stack } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
const publishableKey= process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY
const tokenCache = {
     async getToken(key:string) {
     try {
      return SecureStore.getItemAsync(key);
      }
     catch (err) {
      return null;
      }
    },
    async saveToken(key:string, value:string) {
    try {
     return SecureStore.setItemAsync(key, value);
    }
    catch (err) {
     return null;
    }
  },
};

export default function InitialLayout() {
  return (
    <Stack/>
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