
import moment from 'moment';

import classes from './Post.module.scss';


const imageRegex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
const videoRegex = /\.(mp4|3gp|mkv|webm)$/i;
const audioRegex = /\.(mp3|wav)$/i;


const Post = props => {

    let media;
    if(imageRegex.test(props.data.media)) {
        media = <img src={props.data.media} alt={props.data.text || ''} />
    } 
    else if(videoRegex.test(props.data.media)) {
        media = <video src={props.data.media}  controls />
    }
    else if (audioRegex.test(props.data.media)) {
        media = <audio src={props.data.media}  controls />
    }


    

    return (
        <div className={classes.container}>
            <h1>{props.data.author.username}</h1>
            <h2>{moment(props.data.created_at).fromNow()}</h2>
            <p>{props.data.text}</p>
            {media}
        </div>
    );
}
export default Post;