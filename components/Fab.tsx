import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { toast } from 'sonner-native'


export default function Fab() {
  const onPress = () => {
    toast.success('Fab pressed')
}
  return (
    <TouchableOpacity onPress={onPress} style={styles.fab}>
      <Text>Fab</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({  
  fab:{
      position:'absolute',
      bottom:20,
      right:20,
      
    }
})
    