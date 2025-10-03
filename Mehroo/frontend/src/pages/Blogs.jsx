import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/CSS/blog.css"; // Custom CSS for styling
import Header from "../Components/Header";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts"); // Replace with your API
        setPosts(response.data);
      } catch (err) {
        setError("Failed to fetch blog posts");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (

     <>
   
      <Header />
    <div className="container py-5">

      <h1 className="text-center mb-5 blog-title">Our Latest Blog Posts</h1>

      {loading ? (
        <div className="text-center py-5">Loading...</div>
      ) : error ? (
        <div className="text-center py-5 text-danger">{error}</div>
      ) : posts.length === 0 ? (
        <div className="text-center py-5">No blog posts found.</div>
      ) : (
        <>
          <div className="row g-4">
            {currentPosts.map((post) => (
              <div className="col-12 col-md-6 col-lg-4" key={post.id}>
                <div className="card blog-card h-100 shadow-sm border-0">
                  <img
                    src={post.image}
                    className="card-img-top blog-image"
                    alt={post.title}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.summary}</p>
                    <a href={`/blog/${post.id}`} className="mt-auto btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination d-flex justify-content-center mt-5">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`page-btn btn ${currentPage === i + 1 ? "btn-primary" : "btn-outline-primary"} mx-1`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
    </>
  );
}
