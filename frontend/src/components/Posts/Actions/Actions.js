
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode'
import classes from './Actions.module.scss';
import ActionTypes from './ActionTypes';
import Reactions from './Reactions';
import Share from './Share';
import Comment from './Comment';

const Actions = props => {
    const [actionType, setActionType] = useState();

    const [reaction, setReaction] = useState(null);

    useEffect(() => {
        const user_id = jwtDecode(localStorage.getItem('access_token')).user_id;
        const reaction = props.reactions?.find(reaction => reaction.user.id === user_id)
        setReaction(reaction ? reaction.reaction_type : null);
    }, [props.reactions])


    return (
        <div className={classes.container}>
            { actionType === undefined ? 
                <ActionTypes 
                    reaction={reaction}
                    setActionType={setActionType} 
                    {...props}
            /> : null}
            { actionType === 'react' && props.type !== 'reply' &&  <Reactions  
                reaction={reaction}
                setActionType={setActionType} 
                post_id={props.item.post} {...props} /> }
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