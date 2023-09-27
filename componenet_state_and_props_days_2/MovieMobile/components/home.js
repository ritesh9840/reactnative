import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react';

export default function Home(props) {
   
    [name,setName]= useState('This is from react hooks')

    return (
        <View style={styles.container}>
            <Text>{props.msg}</Text>
            <Text>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
