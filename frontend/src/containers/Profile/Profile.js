import QRCode from 'qrcode.react';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faImage, faQrcode, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import classes from './Profile.module.scss';
import axios from '../../axios';
import UserImage from '../../components/UserImage';
const Profile = props => {
    const [user, setUser] = useState();
    const [isBarCode, setIsBarCode] = useState(false);

    useEffect(() => {
        axios.get(`account/user/${props.match.params.username}/`)
        .then(res => {
            setUser(res.data)
        })
    }, [props.match.params.username])


    return user ? (
        <div className={classes.container}>
            {
                isBarCode
                ? <QRCode 
                    size={512}
                    className={classes.profile_picture}
                    style={{height: '100%', width: '100%', border: '.5vw solid white'}} 
                    value={props.match.params.username} />
                : <UserImage
                    className={classes.profile_picture}
                    src={`http://192.168.43.122:8000${user.picture}`}
                    alt={user?.username} />
            }
            <h1 className={classes.first_last_name}>{user?.first_name} {user?.last_name}</h1>
            <p className={classes.username}>@{user?.username}</p>


            <div className={classes.buttons}>
                <div
                    style={{ color: "#f22ab0" }}
                    title="Chat" >
                    <FontAwesomeIcon icon={faComment} />
                </div>
                <div
                    onClick={() => setIsBarCode(current => !current)}
                    title={isBarCode ? "Picture" : "Show BarCode"} >
                    
                    <FontAwesomeIcon icon={isBarCode ? faImage : faQrcode} />
                </div>
                <div
                    style={{ color: "#2ae4f2" }}
                    title="Send Request" >
                    <FontAwesomeIcon icon={faUserPlus} />
                </div>
            </div>
        </div>
    ): null;
}
export default Profile;