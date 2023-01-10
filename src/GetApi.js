import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {deleteUser, getUser, getUsers} from './service/Api';
import Icon from 'react-native-vector-icons/FontAwesome';
import DeleteIcon from 'react-native-vector-icons/AntDesign';
import EyeIcon from 'react-native-vector-icons/Ionicons';

const GetApi = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [data, setData] = useState([]);

  const getAllUsers = async () => {
    let response = await getUsers();
    setData(response.data);
  };

  const onDelete = async id => {
    let response = await deleteUser(id);
    console.log(response);
    getAllUsers();
  };

  // useFocusEffect(
  //   useCallback(() => {
  //     getUsers();
  //   }, []),
  // );

  return (
    <View style={styles.container}>
      <View style={styles.getButton_parent}>
        <TouchableOpacity style={styles.getButton} onPress={getAllUsers}>
          <Text style={styles.getButton_text}>GET USERS</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={[styles.getButton_parent, {marginTop: 10}]}>
        <TouchableOpacity style={styles.getButton} onPress={()=> navigation.navigate('detailPageScreen')}>
          <Text style={styles.getButton_text}>DETAIL PAGE</Text>
        </TouchableOpacity>
      </View> */}

      <View style={[styles.getButton_parent, {marginTop: 10}]}>
        <TouchableOpacity
          style={styles.getButton}
          onPress={() => navigation.navigate('postApiScreen')}>
          <Text style={styles.getButton_text}>For POST API</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => (
          <View>
            <Text style={styles.getButton_text}>ID: {item.id}</Text>
            <Text style={styles.getButton_text} numberOfLines={1}>
              Title: {item.title}
            </Text>
            <Text style={styles.getButton_text} numberOfLines={1}>
              Body: {item.body}
            </Text>
            <View style={styles.iconParent}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('patchApiScreen', {
                    id: item.id,
                    // title: item.title,
                    // body: item.body,
                  })
                }>
                <Icon name="edit" size={25} style={styles.iconColor} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onDelete(item.id)}>
                <DeleteIcon name="delete" size={25} style={styles.iconColor} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('detailPageScreen', {
                    id: item.id,
                  })
                }>
                <EyeIcon
                  name="eye-outline"
                  size={25}
                  style={styles.iconColor}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.divider}></View>
          </View>
        )}
      />
    </View>
  );
};

export default GetApi;

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
  },

  getButton_text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 4,
  },
  divider: {
    height: 4,
    backgroundColor: '#f2c035',
    margin: 5,
  },
  iconColor: {
    color: 'black',
  },
  iconParent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
