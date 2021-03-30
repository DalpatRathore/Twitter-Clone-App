import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import "./TweetBox.css";
import db from "./config";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const postTweet = e => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "U r ",
      userName: "u_r",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png",
    });
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form className="tweetBox__form">
        <div className="tweetBox__inputContainer">
          <Avatar></Avatar>
          <input
            value={tweetMessage}
            onChange={e => setTweetMessage(e.target.value)}
            type="text"
            placeholder="What's happening?"
          />
        </div>
        <input
          value={tweetImage}
          onChange={e => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          type="text"
          placeholder="Optional: Enter Image ULR"
        />
        <Button
          type="submit"
          onClick={postTweet}
          className="tweetBox__tweetBtn"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
