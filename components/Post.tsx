// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import React from "react";
import UseStyles from "../styles/post";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
const Post = () => {
  const classes = UseStyles();
  return (
    <div className={classes.post}>
      <div className={classes.postImage}>
        <img
          src={`${"https://flagworlddotorg.files.wordpress.com/2019/12/800px-flag_of_none.svg1_.png?w=800"}`}
          alt=""
        />
      </div>
      <div className={classes.tetxtBlog}>
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          pariatur quos distinctio, consectetur laudantium alias ad in quo
          dolorem autem iste sunt recusandae, corporis blanditiis similique
          obcaecati nam, minima voluptates? Quos cum sunt hic ratione
          dignissimos animi ipsam id minima voluptatibus. Maiores esse nam
          quibusdam quis, aliquid culpa voluptates iusto. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Magnam pariatur quos distinctio,
          consectetur laudantium alias ad in quo dolorem autem iste sunt
          recusandae, corporis blanditiis similique obcaecati nam, minima
          voluptates? Quos cum sunt hic ratione dignissimos animi ipsam id
          minima voluptatibus. Maiores esse nam quibusdam quis, aliquid culpa
        </p>
      </div>
    </div>
  );
};

export default Post;
// ========================== COMPONENT ====================================
