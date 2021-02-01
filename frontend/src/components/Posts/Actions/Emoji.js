import { faReact } from '@fortawesome/free-brands-svg-icons';
import {
    faAngry,
    faGrinHearts,
    faGrinSquintTears,
    faSadTear,
    faTimesCircle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Love = () => <FontAwesomeIcon icon={faGrinHearts} style={{color: '#2ae4f2'}}/>;
export const Haha = () =>  <FontAwesomeIcon icon={faGrinSquintTears} style={{color: '#ffdc46'}}/>;
export const Sad = () =>  <FontAwesomeIcon icon={faSadTear} style={{color: '#faaeae'}}/>;
export const Angry = () =>  <FontAwesomeIcon icon={faAngry} style={{color: '#f87b18'}}/>;
export const ReactEmoji = () =>  <FontAwesomeIcon icon={faReact} style={{color: '#03ddc3'}}/>;
export const Close = () =>  <FontAwesomeIcon icon={faTimesCircle}/>;

