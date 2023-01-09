import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {addUser} from './service/Api';

const PostApi = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const onAdd = async () => {
    let response = await addUser({
      title: title,
      body: body,
    });
    console.log(response.data);
    navigation.navigate('getAPIScreen');
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter title"
          placeholderTextColor="gray"
          value={title}
          onChangeText={title => setTitle(title)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter body"
          placeholderTextColor="gray"
          value={body}
          onChangeText={body => setBody(body)}
        />
      </View>
      <View style={styles.getButton_parent}>
        <TouchableOpacity style={styles.getButton} onPress={onAdd}>
          <Text style={styles.getButton_text}>POST USER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostApi;

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
    paddingLeft: 18,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#f2c035',
    backgroundColor: '#f2f2f2',
    marginTop: 20,
  },
});
