import Posts from './Posts';

const User = ({ user, posts }) => {
  return (
    <div>
      <h3>User Profile</h3>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <Posts posts={posts} />
    </div>
  );
};

export default User;
