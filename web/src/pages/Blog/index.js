import React, { useState, useEffect } from "react";
import "./styles.css";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PostBox from "../../components/PostBox";

const Blog = () => {

  // const [posts, setPosts] = useState([]);
  // const [numberOfPosts, setNumberOfPosts] = useState(4);
  // const loadStep = 2;

  // this will be a request to api needs delete this
  const posts = [
    {
      _id: 1,
      title: "Lorem Ipsum Doloar - Uma abordagem X",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, elit at imperdiet cursus, sem leo vulputate ligula, ut euismod sem nisi condimentum augue. Sed non leo lectus.",
      postURL: "/blog/post-test",
      author: "https://linkedin.com/in/edvaldojuniordev",
      imageURL: "http://localhost:3000/static/media/about-main-background.dc49b00f.jpg",
      postDate: "01/01/2020"
    }, 
    {
      _id: 2,
      title: "Lorem Ipsum Doloar - Uma abordagem X",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, elit at imperdiet cursus, sem leo vulputate ligula, ut euismod sem nisi condimentum augue. Sed non leo lectus.",
      postURL: "/blog/post-test",
      author: "https://linkedin.com/in/edvaldojuniordev",
      imageURL: "http://localhost:3000/static/media/about-main-background.dc49b00f.jpg",
      postDate: "01/01/2020"
    }, 
    {
      _id: 3,
      title: "Lorem Ipsum Doloar - Uma abordagem X",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, elit at imperdiet cursus, sem leo vulputate ligula, ut euismod sem nisi condimentum augue. Sed non leo lectus.",
      postURL: "/blog/post-test",
      author: "https://linkedin.com/in/edvaldojuniordev",
      imageURL: "http://localhost:3000/static/media/about-main-background.dc49b00f.jpg",
      postDate: "01/01/2020"
    }, 
    {
      _id: 4,
      title: "Lorem Ipsum Doloar - Uma abordagem X",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, elit at imperdiet cursus, sem leo vulputate ligula, ut euismod sem nisi condimentum augue. Sed non leo lectus.",
      postURL: "/blog/post-test",
      author: "https://linkedin.com/in/edvaldojuniordev",
      imageURL: "http://localhost:3000/static/media/about-main-background.dc49b00f.jpg",
      postDate: "01/01/2020"
    }, 
    {
      _id: 5,
      title: "Lorem Ipsum Doloar - Uma abordagem X",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, elit at imperdiet cursus, sem leo vulputate ligula, ut euismod sem nisi condimentum augue. Sed non leo lectus.",
      postURL: "/blog/post-test",
      author: "https://linkedin.com/in/edvaldojuniordev",
      imageURL: "http://localhost:3000/static/media/about-main-background.dc49b00f.jpg",
      postDate: "01/01/2020"
    }, 
    {
      _id: 6,
      title: "Lorem Ipsum Doloar - Uma abordagem X",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, elit at imperdiet cursus, sem leo vulputate ligula, ut euismod sem nisi condimentum augue. Sed non leo lectus.",
      postURL: "/blog/post-test",
      author: "https://linkedin.com/in/edvaldojuniordev",
      imageURL: "http://localhost:3000/static/media/about-main-background.dc49b00f.jpg",
      postDate: "01/01/2020"
    }, 
  ];

  // this is for load more posts
  // function handleLoadPosts() {
  //   setNumberOfPosts(numberOfPosts + loadStep);

  //   useEffect(() => {
  //     api.get('posts', {
  //       numberOfPosts
  //     }).then(response => {
  //         setPosts(response.data);
  //     })
  //   }, [posts]);
  // }
  
  return (
    <>
      <Navbar />

      <div id="blog">
        <div className="container">
          <div className="posts-grid">
            {posts.map( (post) => (
              <PostBox key={post._id}
                title={post.title}
                text={post.text}
                postURL={post.postURL}
                author={post.author}
                authorURL={post.authorURL}
                imageURL={post.imageURL}
                postDate={post.postDate}
              />
            ))}
          </div>

          <button className="button">Carregar Mais Posts</button>

          <div className="insta-grid">
            {/* Adicionar os posts do instagram */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
