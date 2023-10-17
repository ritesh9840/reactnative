import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import React,{useState} from 'react';

export default function Home(props) {
   
    [name,setName]= useState('This is from react hooks')

    return (
        <View style={styles.home}>
            <Text>{props.msg}</Text>
            <Text style={styles.name}>{name}</Text>
            <TextInput 
            style={{height:40,backgroundColor:'red'}}
            value={name} 
            placeholder="type in your name"
            onChangeText={(text)=>setName(text)} />
            <Button onPress={()=> alert(name+ " click the button")} 
            title="Click me"
            />
               

        </View>
    );
}

const styles = StyleSheet.create(
    {
         home: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
         justifyContent: 'center',
         flexDirection:'column'
        //flexDirection:'row'
       // flexDirection:'column-reverse'
      // flexDirection:'row-reverseS'
         },
         name:{
             marginBottom: 50,
        },

       
        

    }
);
