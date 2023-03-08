import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";
import { useEffect } from "react";

const BlogList = (props) => {
  const [posts, setPosts] = useState([])
  const fetchBlogPosts = async () => {
    try {
      const res = await fetch
      (process.env.REACT_APP_BE_URL)
      // ("http://localhost:3001/blogPosts%22");
      if (res.ok) {
        const data = await res.json();
        setPosts(data)
      } else {
        alert("Error fetching blog posts");
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchBlogPosts();
  },[])
  return (
    <Row>
      {posts.map((post) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={post.title} {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
