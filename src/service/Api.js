import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async () => {
  try {
    return await axios.get(`${baseURL}/posts`);
  } catch (error) {
    console.log('Error while calling getUsers api ', error.message);
  }
};

// export const getUser = async id => {
//   try {
//     return await axios.get(`${baseURL}/posts/${id}`);
//   } catch (error) {
//     console.log('Error while calling getUser api ', error.message);
//   }
// };

export const addUser = async data => {
  try {
    return await axios.post(`${baseURL}/posts`, data);
  } catch (error) {
    console.log('Error while calling addUser api', error.message);
  }
};

export const patchUser = async (data, id) => {
  try {
    return await axios.put(`${baseURL}/posts/${id}`, data);
  } catch (error) {
    console.log('Error while calling patchUser api ', error.message);
  }
};

export const deleteUser = async id => {
  try {
    return await axios.delete(`${baseURL}/${id}`);
  } catch (error) {
    console.log('Error while calling deleteUser api ', error.message);
  }
};
