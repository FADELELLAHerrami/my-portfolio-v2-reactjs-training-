





export default function Experience(props){
    return(
        <div className="experience">
            <p className="experience--date">{props.startYear}-{props.endYear}</p>
            <p className="experience--job"><b>{props.degree}</b></p>
            <p className="experience--where">{props.institution}</p>
        </div>
    )
}