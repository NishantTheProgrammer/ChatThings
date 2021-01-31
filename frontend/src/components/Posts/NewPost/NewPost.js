import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axios from "../../../axios";
import Button from "../../Button/Button";
import classes from "./NewPost.module.scss";

const imageRegex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
const videoRegex = /\.(mp4|3gp|mkv|webm)$/i;
const audioRegex = /\.(mp3|wav)$/i;

const NewPost = (props) => {
  const [text, setText] = useState("");
  const [media, setMedia] = useState();
  const [newMediaType, setNewMediaType] = useState();

  const createNewPost = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (text) {
      formData.append("text", text);
    }
    if (media) {
      formData.append("media", media);
    }
    axios
      .post("news/post/", formData)
      .then((res) => {
        if (res.status === 201) {
          props.onPostCreated();
        }
      })
      .catch((err) => console.log(err));
    setText("");
    setMedia();
    setNewMediaType();
  };

  const uploadFileHandler = (e) => {
    setMedia(e.target.files[0]);
    if (imageRegex.test(e.target.value)) {
      setNewMediaType('image');
    } else if (videoRegex.test(e.target.value)) {
      setNewMediaType('video');
    } else if (audioRegex.test(e.target.value)) {
      setNewMediaType('audio');
    }
  };

  return (
    <div className={classes.container}>
      <form onSubmit={createNewPost}>
        <textarea
          rows="10"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a post..."
        />
        {(media && newMediaType === 'image' )&& <img src={URL.createObjectURL(media)} alt=''/>}
        {(media && newMediaType === 'video' )&& <video src={URL.createObjectURL(media)} controls/>}
        {(media && newMediaType === 'audio' )&& <audio src={URL.createObjectURL(media)} controls/>}
        <div className={classes.upload_actions}>
            <label htmlFor="upload-photo">
            {media ? 'Change Media File' : 'Upload Media File'}
            <input
                file={media}
                className={classes.file}
                id="upload-photo"
                onChange={uploadFileHandler}
                type="file"
                accept="image/*, video/*, audio/*"
            />
            </label>
            {
                media 
                ?   <button type="button" className={classes.delete_btn} onClick={() => setMedia()}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                : null
            }
        </div>
        {(text || media) && <Button type="submit" className={classes.button}>
          Create Post
        </Button>}
      </form>
    </div>
  );
};
export default NewPost;
