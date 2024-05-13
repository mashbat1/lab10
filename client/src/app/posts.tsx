// pages/posts.tsx

import { useEffect, useState } from "react";

type Post = {
  StuId: number;
  FirstName: string;
  SisiID: string;
};

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "OK") {
          setPosts(data.posts);
        } else {
          console.error("Error fetching posts:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div>
      <h1>Posts Table</h1>
      <table>
        <thead>
          <tr>
            <th>StuId</th>
            <th>FirstName</th>
            <th>SisiID</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.StuId}>
              <td>{post.StuId}</td>
              <td>{post.FirstName}</td>
              <td>{post.SisiID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default PostsPage;