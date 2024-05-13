// components/PostsTable.js

const PostsTable = ({ posts }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>StuId</th>
            <th>FirstName</th>
            <th>SisiID</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={index}>
              <td>{post.StuId}</td>
              <td>{post.FirstName}</td>
              <td>{post.SisiID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default PostsTable;
  