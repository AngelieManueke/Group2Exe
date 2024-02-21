import React from 'react';
import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const App = () => {
  const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.th}>Registration</Text>
      </View>
      <ScrollView>
        <View style={styles.u}>
          <Text style={styles.name}> Name </Text>
        </View>
        <TextInput
          placeholder='Masukkan nama lengkap anda'
          style={styles.in2}
        />
        <View style={styles.u}>
          <Text style={styles.username}> Username </Text>
        </View>
        <TextInput
          placeholder='Masukkan username anda'
          style={styles.in2}
        />
        <View style={styles.u}>
          <Text style={styles.email}> Email </Text>
        </View>
        <TextInput
          placeholder='Masukkan email anda'
          style={styles.in2}
        />
        <View style={styles.u}>
          <Text style={styles.address}> Address </Text>
        </View>
        <TextInput
          placeholder='Masukkan alamat anda'
          style={styles.in2}
        />
        <View style={styles.u}>
          <Text style={styles.number}> Phone Number </Text>
        </View>
        <TextInput
          placeholder='Masukkan Nomor telepon anda'
          style={styles.in2}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header:{
    marginTop:25,
    marginLeft:10,
  },
  th:{
    fontWeight:'bold',
    color:'black'
  },
  name:{
    fontWeight:'bold',
    color:'black',
  },
  username:{
    fontWeight:'bold',
    color:'black',
  },
  email:{
    fontWeight:'bold',
    marginLeft:4,
    color:'black',
  },
  address:{
    fontWeight:'bold',
    marginLeft:4,
    color:'black',
  },
  number:{
    fontWeight:'bold',
    marginLeft:4,
    color:'black',
    
  },
  in2:{
    borderColor: 'black',
    borderWidth: 1,
  },
  sign:{
    color:'white',
  },
});

export default App;git