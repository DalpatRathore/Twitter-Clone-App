import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "./config";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot(snapshot =>
      setPosts(snapshot.docs.map(doc => doc.data()))
    );
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox></TweetBox>
      <FlipMove>
        {posts.map(post => (
          <Post
            key={post.text}
            displayName={post.displayName}
            userName={post.userName}
            text={post.text}
            verified={post.verified}
            image={post.image}
            avatar={post.avatar}
          ></Post>
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
