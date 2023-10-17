import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList} from 'react-native';
import React,{useState} from 'react';

export default function Home(props) {
   
    [name,setName]= useState('This is from react hooks')

    return (
        <View style={styles.home}>

            {
            
            <FlatList
            data={[
            {key:'ritesh 1'},
            { key: 'ritesh 2' },
            { key: 'ritesh 3' },
            { key: 'ritesh 4' },
            { key: 'ritesh 5' },
            { key: 'ritesh 6' },
            { key: 'ritesh 7' },
            { key: 'ritesh 8' },

            ]}

            renderItem={({item})=> <Text style={styles.text}>{item.key}</Text> }

            />

           
            
            
            
            /* <ScrollView>
            
            <Text style={styles.text}>{name} 1 </Text>
            <Text style={styles.text}>{name} 2 </Text>
            <Text style={styles.text}>{name} 3</Text>
            <Text style={styles.text}>{name} 4</Text>
            <Text style={styles.text}>{name} 5</Text>
            <Text style={styles.text}>{name} 6</Text>
            <Text style={styles.text}>{name} 7</Text>
            <Text style={styles.text}>{name} 8</Text>
            <Text style={styles.text}>{name} 9</Text>
            <Text style={styles.text}>{name} 10</Text>
            <Text style={styles.text}>{name} 11</Text>
            </ScrollView> */}

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
         text:{
             fontSize: 40,
        },

       
        

    }
);
