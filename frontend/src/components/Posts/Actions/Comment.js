import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import axios from '../../../axios';

import classes from './Actions.module.scss';

const Comment = props => {

    const [comment, setComment] = useState('');


    const createNewComment = (e) => {
        e.preventDefault();
        const data = props.item;
        data.text = comment;
        axios.post(props.endPoint, data)
          .then((res) => {
            if (res.status === 201) {
              props.onPostCreated()
            }
          })
          .catch((err) => console.log(err));
        setComment('');
      };

    return (
        <>
            <form style={{color: '#2ae4f2'}} onSubmit={createNewComment}>
                    <input 
                        type="text" 
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        placeholder="Type comment..." />
            </form>
            <div className={classes.close_btn} onClick={() => {
                props.setActionType()
                if(props.type === 'comment') {
                  props.setCommentSection()
                }   
              }}>
                <FontAwesomeIcon icon={faTimesCircle}/>
            </div>
        </>
    );
}
export default Comment;