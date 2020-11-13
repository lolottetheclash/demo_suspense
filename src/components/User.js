import { Suspense } from 'react';
import Posts from './Posts';

const User = resource => {
  const user = resource.user.read();
  // const posts = resource.posts.read();

  return (
    <div>
      <h3>User Profile</h3>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
      {/* <Suspense fallback={<h1>Chargement des posts...</h1>}>
        <Posts posts={posts} />
      </Suspense> */}
    </div>
  );
};

export default User;
