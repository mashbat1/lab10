import React, { useEffect, useState } from 'react';
import { Post } from '../pages/types'; // Import the Post interface

const Page = () => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/blogs');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await res.json();
        console.log(jsonData);
        
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
                {jsonData.posts.map((post: Post) => ( // Explicitly specify the type of post as Post
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
        //setData(jsonData.posts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();

};

export default Page;
