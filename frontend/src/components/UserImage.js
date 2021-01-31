import ReactImageFallback from "react-image-fallback";
import userFallbackImage from "./userFallback.png"

const UserImage = props => {
    return (
        <ReactImageFallback {...props} fallbackImage={userFallbackImage}/>
    );
}
export default UserImage;