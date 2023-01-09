import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {patchUser} from './service/Api';

const PatchApi = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);
  const [data, setData] = useState([]);

  const onAdd = async () => {
    let response = await patchUser(
      {
        title: title,
        body: body,
      },
      route.params.id,
    );
    console.log(response.data);
    setData(response.data);
    navigation.navigate('getAPIScreen');
  };

  useEffect(() => {
    setTitle(route.params.title);
    setBody(route.params.body);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.getButton_parent}>
        <TouchableOpacity style={styles.getButton} onPress={onAdd}>
          <Text style={styles.getButton_text}>PATCH USER</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.getButton_text}>Id: {route.params.id}</Text>
        <TextInput
          style={styles.inputStyle}
          numberOfLines={1}
          placeholder="Title"
          placeholderTextColor="gray"
          value={title}
          onChangeText={title => setTitle(title)}
        />
        <TextInput
          style={styles.inputStyle}
          numberOfLines={1}
          value={body}
          placeholder="Body"
          placeholderTextColor="gray"
          onChangeText={body => setBody(body)}
        />
      </View>
    </View>
  );
};

export default PatchApi;

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
    // padding: 15,
    // paddingLeft: 18,
    borderWidth: 1,
    borderColor: '#f2c035',
    backgroundColor: '#f2f2f2',
    marginTop: 20,
  },
});
