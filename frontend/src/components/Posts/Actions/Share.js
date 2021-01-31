import {
    faLink,
    faTimesCircle
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './Actions.module.scss';

const Share = props => {
    return (
        <>
            <div style={{color: '#2ae4f2'}}>
                <FontAwesomeIcon icon={faFacebook}/>
            </div>
            <div style={{color: '#91ff46'}}>
                <FontAwesomeIcon icon={faWhatsapp}/>
            </div>
            <div style={{color: '#00b2ff'}}>
                <FontAwesomeIcon icon={faTwitter}/>
            </div>
            <div style={{color: '#f87b18'}}>
                <FontAwesomeIcon icon={faInstagram}/>
            </div>
            <div style={{color: 'white'}}>
                <FontAwesomeIcon icon={faLink}/>
            </div>
            <div className={classes.close_btn} onClick={() => props.setActionType()}>
                <FontAwesomeIcon icon={faTimesCircle}/>
            </div>
        </>
    );
}
export default Share;