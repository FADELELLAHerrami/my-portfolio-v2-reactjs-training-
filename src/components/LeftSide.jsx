import SocialNetworkIcons from "./SocialNetworkIcons"
import myPhoto from '../assets/images/myPhoto.png';
import Main from "./Main";



export default function LeftSide(){
    return(
        <div className="leftSide">
            <img className="leftSide--image" src={myPhoto} />
            <h3 className="leftSide--name"><b>Fadel ellah ERRAMI</b></h3>
            <p className="leftSide--function">computer scientist</p>
            <SocialNetworkIcons />
            <Main />
        </div>
    )
}