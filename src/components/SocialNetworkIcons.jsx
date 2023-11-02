import fbIcon from '../assets/images/fbIcon.png';
import lkIcon from '../assets/images/lkIcon.png';
import xIcon from '../assets/images/xIcon.png';
import gitIcon from '../assets/images/gitIcon.png';







export default function SocialNetworkIcons(){
    return(
        <div className='SocialNetworkIcons'>
            <div className='SocialNetworkIcons--icon'>
                <img src={fbIcon} />
            </div>
            <div className='SocialNetworkIcons--icon'>
                <img src={lkIcon} />
            </div>
            <div className='SocialNetworkIcons--icon'>
                <img src={xIcon} />
            </div>
            <div className='SocialNetworkIcons--icon'>
                <img src={gitIcon} />
            </div> 
        </div>
    )
}