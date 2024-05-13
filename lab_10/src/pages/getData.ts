
export async function getServerSideProps() {
  try {
    // Fetch data from API
    const res = await fetch('http://localhost:3000/api/blogs');
    console.log(res);
    
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await res.json();

    return {
      props: {
        posts: data.posts, // Pass the fetched posts data to the page component
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        posts: [], // Return an empty array in case of error
      },
    };
  }
}