import moment from "moment";
import { useState } from "react";
import { Link } from "react-router-dom";

import UserImage from "../../UserImage";
import Actions from "../Actions/Actions";
import classes from "./Post.module.scss";

const imageRegex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
const videoRegex = /\.(mp4|3gp|mkv|webm)$/i;
const audioRegex = /\.(mp3|wav)$/i;

const Post = (props) => {
  const [commentSection, setCommentSection] = useState(false);

  let media;
  if (imageRegex.test(props.data.media)) {
    media = <img src={props.data.media} alt={props.data.text || ""} />;
  } else if (videoRegex.test(props.data.media)) {
    media = <video src={props.data.media} controls autoPlay muted />;
  } else if (audioRegex.test(props.data.media)) {
    media = <audio src={props.data.media} controls />;
  }

  const getUser = (user) => (
    <div className={classes.header}>
      <div className={classes.info}>
        <UserImage
          className={classes.authorPicture}
          src={user.author.picture}
          alt={user.author.username}
        />
        <div>
          <Link to={`/users/${user.author.username}`}>
            {user.author.username}
          </Link>
          <p>{moment(user.created_at).fromNow()}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className={classes.container}>
      {getUser(props.data)}
      <p className={classes.text}>{props.data.text}</p>
      {media}
      <Actions
        type="comment"
        endPoint="news/comment/"
        onPostCreated={props.onPostCreated}
        item={{post: props.data.id}}
        setCommentSection={() => setCommentSection((current) => !current)}
      />
      <div className={classes.comments}>
        {commentSection &&
          props.data.comment.slice(0).reverse().map((comment) => (
            <div key={comment.id} className={classes.comment}>
              {getUser(comment)}
              <p className={classes.text}>{comment.text}</p>
              <Actions 
                onPostCreated={props.onPostCreated}
                item={{comment: comment.id}}
                type="reply" 
                endPoint="news/reply/"/>
              {comment.reply.slice(0).reverse().map((reply) => (
                <div key={reply.id} className={classes.reply}>
                  {getUser(reply)}
                  <p className={classes.text}>{reply.text}</p>
                </div>
              ))}
            </div>
          ))}

      </div>
    </div>
  );
};
export default Post;
