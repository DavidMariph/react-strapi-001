{/*import { useEffect, useState } from "react";
import { fetchPosts } from "./api";

function App() {
  const [posts, setPosts] = useState([]);
  const strapiUrl = "http://localhost:1337"

  useEffect(() => {
    async function getData() {
      const data = await fetchPosts();
      if (data) setPosts(data.data);
    }
    getData();
  }, []);

  return (
    <div>
      <h1>Strapi Data</h1>
      <p>
        {posts.map((post) => (
          <h1 key={post.id}>{post.TITLE}</h1>
        ))}
      </p>
      <div>
        {posts.map((post) => (
          <p key={post.id}>{post.content}</p>
        ))}
      </div>
    </div>
  );
}

export default App;*/}

import { useEffect, useState } from "react";
import { fetchPosts } from "./api";

function App() {
  const [posts, setPosts] = useState([]);
  const strapiUrl = "http://localhost:1337"; // Adjust for production

  useEffect(() => {
    async function getData() {
      const data = await fetchPosts();
      console.log("Fetched Data:", data);
      if (data) setPosts(data.data);
    }
    getData();
  }, []);

  return (
    <div>
      <h1>Strapi Data</h1>

      {/* Titles */}
      <div>
        {posts.map((post) => (
          <h2 key={post.id}>{post.TITLE}</h2>
        ))}
      </div>

      {/* Content */}
      <div>
        {posts.map((post) => (
          <p key={`content-${post.id}`}>{post.content}</p>
        ))}
      </div>

      {/* Images */}
      <div>
        {posts.map((post) => (
          <div key={`post-${post.id}`}>
            {post.PICTURES && post.PICTURES.length > 0 ? (
              post.PICTURES.map((image) => {
                const imageUrl = image.formats?.medium?.url || image.formats?.small?.url || image.url; // Prioritize best quality
                return (
                  <img
                    key={image.id}
                    src={`${strapiUrl}${imageUrl}`}
                    alt={image.name || "Strapi Image"}
                    style={{ width: "300px", height: "200px", objectFit: "cover", margin: "10px" }}
                  />
                );
              })
            ) : (
              <p>No Image Available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
