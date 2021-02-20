import { useEffect, useState } from 'react';
import axios from '../../axios';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import classes from './Posts.module.scss';



const Posts = props => {

    const [postData, setPostData] = useState();

    const fetchPosts = () => {
        axios.get('news/post/')
        .then(res => {
            setPostData(res?.data.slice().reverse())
        })
    }

    useEffect(fetchPosts, [])

    return (
        <div className={classes.contininer}>
            <NewPost onPostCreated={fetchPosts}/>
            {
                postData?.slice(0).reverse().map(post => (
                    <Post 
                        onPostCreated={fetchPosts}
                        key={post.id} 
                        data={post} 
                />))
            }
        </div>
    );
}
export default Posts;