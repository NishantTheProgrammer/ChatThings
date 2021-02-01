import { faCommentAlt, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./Actions.module.scss";
import {Angry, Haha, Love, ReactEmoji, Sad} from "./Emoji";


const ActionTypes = (props) => {

  if (props.type === "reply") {
    return (
      <div
        className={classes.comment}
        onClick={() => props.setActionType("comment")}
      >
        <FontAwesomeIcon className={classes.react} icon={faCommentAlt} />
      </div>
    );
  }


  
  return (
    <>
      <div
        className={classes.react}
        title="react"
        onClick={(e) => props.setActionType(e.target.title)}
      >
        {props.reaction === 'love' ? <Love/> : null}
        {props.reaction === 'haha' ? <Haha/> : null}
        {props.reaction === 'sad' ? <Sad/> : null}
        {props.reaction === 'angry' ? <Angry/> : null}
        {props.reaction === null ? <ReactEmoji /> : null}
      </div>
      <div
        className={classes.comment}
        title="comment"
        onClick={(e) => {
          props.setActionType(e.target.title);
          props.setCommentSection();
        }}
      >
        <FontAwesomeIcon className={classes.react} icon={faCommentAlt} />
      </div>
      <div
        className={classes.share}
        title="share"
        onClick={(e) => props.setActionType(e.target.title)}
      >
        <FontAwesomeIcon className={classes.react} icon={faShareAlt} />
      </div>
    </>
  );
};

export default ActionTypes;
