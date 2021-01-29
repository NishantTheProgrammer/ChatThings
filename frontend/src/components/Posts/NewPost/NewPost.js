
import { useState } from 'react';
import axios from '../../../axios';
import Button from '../../Button/Button';
import classes from './NewPost.module.scss';


const NewPost = props => {
    
    const [text, setText] = useState('');
    const [media, setMedia] = useState();
    
    const createNewPost = (e) => {
        e.preventDefault();
        const formData = new FormData();
        if(text) {
            formData.append('text', text);
        }
        if(media) {
            formData.append('media', media);
        }

        axios.post('http://127.0.0.1:8000/api/news/post/', formData)
        .then(res => {
            if(res.status === 201) {
                props.onPostCreated();
            }
        })
        .catch(err => console.log(err))
        setText('');
        setMedia();

    }



    return (
        <div className={classes.container}>
            <form onSubmit={createNewPost}>
                <textarea 
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="Type here..."/>
                <div>
                    <input 
                        file={media}
                        onChange={e => setMedia(e.target.files[0])}
                        type="file" />
                </div>
                <Button type="submit">Create Post</Button>
            </form>
        </div>
    );
}
export default NewPost;