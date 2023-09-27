import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react';

export default function Home(props) {
   
    [name,setName]= useState('This is from react hooks')

    return (
        <View style={styles.home}>
            <Text>{props.msg}</Text>
            <Text style={styles.name}>{name}</Text>
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
         },
         name:{
            color:'#00ff00',
             marginTop: 30
        }
    }
);
