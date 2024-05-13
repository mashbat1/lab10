import React from 'react';
import { Post } from '../pages/types';

interface MyComponentProps {
  posts: Post[];
}

const MyComponent: React.FC<MyComponentProps> = ({ posts }) => {
  console.log("kkk",posts);
  
  return (
    <div>
      <h2>Posts</h2>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>First Name</th>
            <th>Sisi ID</th>
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

export default MyComponent;
