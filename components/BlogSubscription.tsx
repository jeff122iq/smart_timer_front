// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import React from "react";
import UseStyles from "../styles/blogSubscription";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
const BlogSubscription = () => {
  const classes = UseStyles();

  return (
    <div className={classes.blogSubscription}>
      <div className={classes.subscription}>
        <h1>STAY IN TOUCH</h1>
        <ul>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-pinterest-p"></i>
        </ul>
      </div>
      <div className={classes.subscription}>
        <h1>SIGN UP FOR NEWSLETTER</h1>
        <input type="text" placeholder="Email:" />
        <button>SUBSCRIBE</button>
      </div>
      <div className={classes.subscription}>
        <h1>POPULAR TAGS</h1>
        <button>EXAMPLE</button>
        <br />
        <button>EXAMPLE</button>
        <br />
        <button>EXAMPLE</button>
      </div>
    </div>
  );
};

export default BlogSubscription;
// ========================== COMPONENT ====================================
