import React from 'react';
import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const Signin = () => {
  const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.th}>Welcome</Text>
      </View>
      <ScrollView>
        <View style={styles.u}>
          <Text style={styles.cu}> Username </Text>
        </View>
        <TextInput
          placeholder='Masukan username anda'
          style={styles.in1}
        />
        <View style={styles.cp}>
          <Text style={styles.password}> Password </Text>
        </View>
        <TextInput
          placeholder='Masukan password anda'
          style={styles.in2}
        />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.sign}>Sign In</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
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
  u:{
    marginBottom:6,
  },
  cu:{
    fontWeight:'bold',
    marginLeft:4,
    fontSize:20,
    color:'black',
  },
  cp:{
    marginBottom:6,
  },
  password:{
    fontWeight:'bold',
    fontSize:20,
    marginLeft:4,
    color:'black',
  },
  in1:{
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius:10,
    marginBottom: 16,
    marginLeft:9,
    paddingLeft: 10,
    width: '95%', 
    
  },
  in2:{
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius:10,
    marginBottom: 16,
    marginLeft:9,
    paddingLeft: 10,
    width: '95%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'darkorange',
    padding: 10,
    marginTop:30,
    width:'95%',
    height: 50,
    borderRadius:15,
    marginLeft:9,
  },
  sign:{
    paddingTop:4,
    color:'white',
  },
});

export default Signin;