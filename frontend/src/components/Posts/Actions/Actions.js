
import { useState } from 'react';
import classes from './Actions.module.scss';
import ActionTypes from './ActionTypes';
import Reactions from './Reactions';
import Share from './Share';
import Comment from './Comment';

const Actions = props => {
    const [actionType, setActionType] = useState();


    return (
        <div className={classes.container}>
            { actionType === undefined ? 
                <ActionTypes 
                    setCommentSection={props.setCommentSection}
                    type={props.type} 
                    setActionType={setActionType} 
            /> : null}
            { actionType === 'react' && props.type !== 'reply' &&  <Reactions  setActionType={setActionType}  /> }
            { actionType === 'comment' && 
                <Comment 
                    setActionType={setActionType} 
                    type={props.type} 
                    {...props}
            /> }
            { actionType === 'share' && props.type !== 'reply' && <Share setActionType={setActionType}/> }
        </div>
    );
}
export default Actions;