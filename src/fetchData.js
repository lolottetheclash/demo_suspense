import axios from 'axios';

// Function to avoid code duplication in axios requests
const axiosDelayed = (url, ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (!error) {
        axios.get(url).then(res => resolve(res));
      }
    }, ms);
  });
};

// Axios request to get user details => returns a promise
const fetchUser = () => {
  return axiosDelayed('https://jsonplaceholder.typicode.com/users/3', 3000);
};

// Axios request to get user posts => returns a promise
const fetchPosts = () => {
  return axiosDelayed(
    'https://jsonplaceholder.typicode.com/users/3/posts',
    4000
  );
};

// Main function which waits for the promises to return user & posts data
const fetchData = () => {
  return Promise.all([fetchUser(), fetchPosts()]).then(([user, posts]) => {
    return { user, posts };
  });
};

export default fetchData;
