import classes from './Post.module.scss';

const Post = props => {
    return (
        <div className={classes.container}>
            <h1>{props.title}</h1>
        </div>
    );
}
export default Post;