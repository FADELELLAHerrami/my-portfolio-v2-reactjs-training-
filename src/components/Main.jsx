import emailIcon from '../assets/icons/emailIcon.svg';
import locationIcon from '../assets/icons/locationIcon.svg';
import phoneIcon from '../assets/icons/phoneIcon.svg';



export default function Main(){
    return(
        <div className="Main">
            <div className='Main--contents'>
                <img src={phoneIcon} className='Main--icon' />
                <div className="Main--content">
                <p className="Main--text1">Phone</p>
                <p className="Main--text2"><b>(+212) 619887858</b></p>
                </div>
            </div>
            <div className='Main--contents'>
                <img src={emailIcon} className='Main--icon' />
                <div className="Main--content">
                <p className="Main--text1">Email</p>
                <p className="Main--text2"><b>fadelellaherrami@gmail</b></p>
            </div>
                </div>
            <div className='Main--contents'>
                <img src={locationIcon} className='Main--icon' />
                <div className="Main--content">
                <p className="Main--text1">Location</p>
                <p className="Main--text2"><b>Morocco, Ouled teima</b></p>
                </div>
            </div>
            <div className='Main--btn--container'>
                <button className='Main--btn'>Download resume</button>
            </div>
        </div>
    )
}