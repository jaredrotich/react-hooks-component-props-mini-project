import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import BlogList from "./BlogList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <BlogList posts={blogData.posts} />
      <ArticleList posts={blogData.posts} />

    </div>
  )
}

export default App;
