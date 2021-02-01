
import axios from "../../../axios";

import { Angry, Haha, Love, Sad } from "./Emoji";

import classes from "./Actions.module.scss";

const Reactions = (props) => {
  const createReaction = (e) => {
    axios
      .post("news/reaction/", {
        post: props.post_id,
        reaction_type: e.target.title,
      })
      .then((res) => {
        console.log(res.status);
      })
      .catch((error) => {
        console.log(error);
      });
    props.setActionType();
    props.onPostCreated();
  };


  return (
    <>
      <div
        style={{ color: "#2ae4f2" }}
        title="love"
        onClick={createReaction}
        className={props.reaction === "love" ? classes.active_reaction : null}
      >
        <Love />
      </div>
      <div
        style={{ color: "#ffdc46" }}
        title="haha"
        onClick={createReaction}
        className={props.reaction === "haha" ? classes.active_reaction : null}
      >
        <Haha />
      </div>
      <div
        style={{ color: "#faaeae" }}
        title="sad"
        onClick={createReaction}
        className={props.reaction === "sad" ? classes.active_reaction : null}
      >
        <Sad />
      </div>
      <div
        style={{ color: "#f87b18" }}
        title="angry"
        onClick={createReaction}
        className={props.reaction === "angry" ? classes.active_reaction : null}
      >
        <Angry />
      </div>
    </>
  );
};
export default Reactions;
