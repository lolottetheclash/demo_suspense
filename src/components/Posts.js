import { useEffect, useState } from 'react';
import axios from 'axios';

const initialState = [];

const Posts = () => {
  const [posts, setPosts] = useState(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(
      'Le composant POSTS est affiché, on lance le chargement des POSTS du user'
    );
    setLoading(true);
    const timer = setTimeout(() => {
      axios
        .get('https://jsonplaceholder.typicode.com/users/3/posts')
        .then(res => {
          setPosts(res.data);
          setLoading(false);
          console.log('Les POSTS sont récupérées 3 secondes plus tard');
        });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <h3>Loading User Posts ...</h3>
  ) : (
    <div>
      <h3>User Posts</h3>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
