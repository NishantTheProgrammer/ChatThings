import QRCode from 'qrcode.react'
import { useEffect, useState } from 'react';
import classes from './Profile.module.scss';
import axios from '../../axios';
const Profile = props => {
    const [user, setUser] = useState();

    useEffect(() => {
        axios.get(`account/user/${props.match.params.username}/`)
        .then(res => {
            setUser(res.data)
        })
    }, [props.match.params.username])
    

    return (
        <div className={classes.container}>
            <QRCode value={props.match.params.username} />
        </div>
    );
}
export default Profile;