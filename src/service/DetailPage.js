import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {getUser} from './Api';

const DetailPage = () => {
  const route = useRoute();
  const [data, setData] = useState([]);

  const getById = async id => {
    let response = await getUser(id);
    setData(response.data);
    // console.log(response.data);
  };

  useEffect(() => {
    getById(route.params.id);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.getButton_parent}>
        <View style={styles.getButton}>
          <Text style={styles.getButton_text}>DETAIL PAGE</Text>
        </View>
      </View>
      <View>
        <Text style={styles.getButton_text}>Id: {route.params.id}</Text>
        <Text style={styles.inputStyle}>{data.title}</Text>
        <Text style={styles.inputStyle}>{data.body}</Text>
      </View>
    </View>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },

  getButton_parent: {
    alignItems: 'center',
  },

  getButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2c035',
    width: 150,
    height: 40,
    borderRadius: 30,
    marginTop: 20,
  },

  getButton_text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  inputStyle: {
    color: 'black',
    padding: 15,
    // paddingLeft: 18,
    borderWidth: 1,
    borderColor: '#f2c035',
    backgroundColor: '#f2f2f2',
    marginTop: 20,
  },
});
