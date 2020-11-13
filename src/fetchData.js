import axios from 'axios';

const fetchUser = () => {
  return new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
      setTimeout(() => {
        axios
          .get('https://jsonplaceholder.typicode.com/users/3')
          .then(res => resolve(res.data))
          .catch(e => console.log(e));
      }, 2000);
    }
  });
};

const fetchPosts = () => {
  return new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
      setTimeout(() => {
        axios
          .get('https://jsonplaceholder.typicode.com/users/3/posts')
          .then(res => resolve(res.data))
          .catch(e => console.log(e));
      }, 3000);
    }
  });
};

const fetchData = () => {
  const userPromise = fetchUser();
  const postsPromise = fetchPosts();
  return {
    user: wrapPromise(userPromise),
    posts: wrapPromise(postsPromise),
  };
};

const wrapPromise = promise => {
  let status = 'pending';
  let result;
  let suspender = promise.then(
    res => {
      status = 'success';
      result = res;
    },
    err => {
      status = 'error';
      result = err;
    }
  );

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
};

export default fetchData;
