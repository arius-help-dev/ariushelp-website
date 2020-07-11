import React from "react";
import "./styles.css";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PostBox from "../../components/PostBox";

import exemplo from "../../assets/about-main-background.jpg";

const Blog = () => {
  return (
    <>
      <Navbar />

      <div id="blog">
        <div className="container">
          <div className="posts-grid">
            <PostBox
              title="Lorem Ipsum Doloar - Uma abordagem X"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, elit at imperdiet cursus, sem leo vulputate ligula, ut euismod sem nisi condimentum augue. Sed non leo lectus."
              postURL="/blog/post-test"
              author="Edvaldo Junior"
              authorURL="https://linkedin.com/in/edvaldojuniordev"
              imageURL={exemplo}
              postDate="01/01/2020"
            />

            <PostBox
              title="Lorem Ipsum Doloar - Uma abordagem X"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, elit at imperdiet cursus, sem leo vulputate ligula, ut euismod sem nisi condimentum augue. Sed non leo lectus."
              postURL="/blog/post-test"
              author="Edvaldo Junior"
              authorURL="https://linkedin.com/in/edvaldojuniordev"
              imageURL={exemplo}
              postDate="01/01/2020"
            />

            <PostBox
              title="Lorem Ipsum Doloar - Uma abordagem X"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, elit at imperdiet cursus, sem leo vulputate ligula, ut euismod sem nisi condimentum augue. Sed non leo lectus."
              postURL="/blog/post-test"
              author="Edvaldo Junior"
              authorURL="https://linkedin.com/in/edvaldojuniordev"
              imageURL={exemplo}
              postDate="01/01/2020"
            />

            <PostBox
              title="Lorem Ipsum Doloar - Uma abordagem X"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, elit at imperdiet cursus, sem leo vulputate ligula, ut euismod sem nisi condimentum augue. Sed non leo lectus."
              postURL="/blog/post-test"
              author="Edvaldo Junior"
              authorURL="https://linkedin.com/in/edvaldojuniordev"
              imageURL={exemplo}
              postDate="01/01/2020"
            />
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
