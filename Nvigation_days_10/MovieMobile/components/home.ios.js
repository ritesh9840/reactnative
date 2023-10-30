import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Platform,Button} from 'react-native';
import React,{useState} from 'react';

export default function Home(props) {
   
    [name,setName]= useState('This is from react hooks')

    return (
        <View style={styles.home}>
            

            {/* <Text>{Platform.OS == 'ios' ? 'I am on IOS' : 'I am on Android'}</Text> */}
            <Text>I am on IOS</Text> 
            <Button
                title="go to Details"
                onPress={() =>props.navigation.navigate("Detail") }
            />
            

        </View>
    );
}

const styles = StyleSheet.create(
    {
         home: {
        flex: 1,
            backgroundColor: Platform.OS =='ios'? '#fff':'#00ff00',
        alignItems: 'center',
         justifyContent: 'center',
         },
         text:{
             fontSize: 40,
        },

       
        

    }
);
