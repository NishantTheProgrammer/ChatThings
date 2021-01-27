import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../axios';
import NavBar from '../../components/NavBar/NavBar';
import Post from '../../components/Post/Post';
import classes from './Home.module.scss';

const Home = props => {
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/hello/')
            .then(res => {
                console.log(res)
            })
    })

    return (
        <>
            <NavBar />
            <div className={classes.container}>
                <Post title={" A super cool post"} />
                <Post title={" Another super cool post"} />
                <h1>Home page</h1>
                <h1>
                    <Link to="/logout">logout</Link>
                </h1>
            </div>
        </>
    );
}
export default Home;