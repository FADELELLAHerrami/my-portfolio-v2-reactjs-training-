import darkLightImage from '../assets/images/dark&light.png';



export default function Menu(){
    return(
        <nav className='menu'>
            <h1 className='menu--title'>Fadel ellah <span>ERRAMI</span></h1>
            <div className='menu--darkLight'><img src={darkLightImage} /></div>
        </nav>
    )
}