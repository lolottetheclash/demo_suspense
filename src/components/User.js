const User = resource => {
  // Try to read user info, although it might not have loaded yet
  const user = resource.user.read();

  return (
    <div>
      <h3>User Profile</h3>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default User;
