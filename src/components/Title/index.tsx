import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

const Title = () => {
    return(
    <View style={styles.header}>
      <Text style={styles.th}>Welcome</Text>
    </View>
    )
}; 
const styles = StyleSheet.create({ 
    header:{
        marginBottom:50,
        marginTop:25,
        marginLeft:10,
    },
    th:{
        fontSize:35,
        fontWeight:'bold',
        color:'black'
    },
});

export default Title;