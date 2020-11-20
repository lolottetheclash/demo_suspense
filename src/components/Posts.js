const Posts = resource => {
  // Try to read posts info, although it might not have loaded yet
  const posts = resource.posts.read();

  return (
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
