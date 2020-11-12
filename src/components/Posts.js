const Posts = data => {
  const posts = data.posts;

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
