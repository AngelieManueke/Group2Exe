import React from 'react';
import { View, Text, Image, TextInput, ScrollView, StyleSheet } from 'react-native';

const MAD = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Mobile App Development</Text>
        <Image
          style={styles.image}
          source={{
            uri: 'https://th.bing.com/th/id/OIP.6jV3WQimrUz34S7KoS1kywHaHa?pid=ImgDet&w=195&h=195&c=7&dpr=1.3',
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Flowers Name"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 15,
    justifyContent: 'center', 
  },
  box: {
    backgroundColor: '#FFE0EE',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#FFE8F2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',
  },
});

export default MAD;