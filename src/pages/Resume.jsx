import Experience from "../components/experience"
import Skill from "../components/skill"





export default function Resume(){
    // education data
    const educationData = [
        
        {
            institution: 'Hassan II High School , Ouled Teima .',
            degree: 'High school diploma in mathematics, option B',
            startYear: 2019,
            endYear: 2020,
        },{
            institution: 'the Higher School of Technology , Sidi Bennour .',
            degree: 'University diploma in computer Engineering Technology',
            startYear: 2020,
            endYear: 2022,
        },
        {
            institution: 'the Higher School of Technology , Essaouira .',
            degree: 'Bachelor\'s degree in information Systems and Software Engineering',
            startYear: 2022,
            endYear: 2023,
        },
    ]
    // 
    const experienceData = [
        
        {
            institution: ' InfoSat , Agadir,',
            degree: 'Front-end developer specializing in HTML and CSS',
            startYear: "one months internship",
        },{
            institution: 'ARDEV,  Tetouan',
            degree: 'Web development with Django',
            startYear: "two months internship",
        },
        {
            institution: 'Cherradi Holding , Agadir .',
            degree: 'Final year project internship, focusing on an Odoo ERP study and mobile development using React Native.',
            startYear: "two months internship",
        },
    ]
    // soft skills data
    const softSkills = [
        {
            name :'Communication',
        },
        {
            name :'Teamwork',
        },
        {
            name :'Problem Solving',
        },
        {
            name :'Time Management',
        },
        {
            name :'Leadership',
        },
        {
            name :'Adaptability',
        },
        {
            name :'Self Motivation',
        },
        {
            name :'Creativity',
        },
    ]
    // work skills data
    const workSkills = [
        {
            name :'HTML5',
        },
        {
            name :'CSS3',
        },
        {
            name :'JavaScript',
        },
        {
            name :'java',
        },
        {
            name: 'PHP',
        },
        {
            name: 'nodejs'
        },
        {
            name: 'django',
        },
        {
            name: 'reactjs',
        },
        {
            name: 'nodejs',
        },
        {
            name: 'java swing',
        },
        {
            name: 'nodejs',
        },
    ]

    return(
            <div className="resume">
                <div>
                    <img />
                    <h2>Education</h2>
                    {educationData.map((item,index)=>(
                        <Experience
                            key={index}
                            startYear = {item.startYear}
                            endYear = {item.endYear}
                            degree = {item.degree}
                            institution = {item.institution}
                        />
                    ))
                    }
                </div>
                <div>
                    <img />
                    <h2>Experience</h2>
                    {
                        experienceData.map((item,index)=>(
                            <Experience
                                key={index}
                                startYear = {item.startYear}
                                degree = {item.degree}
                                institution = {item.institution}
                        />
                        ))
                    }
                </div>
                <div>
                    <h2>work skills</h2>
                    {
                        workSkills.map((item,index)=>(
                            <Skill
                                key={index}
                                name = {item.name}
                        />
                        ))
                    }
                </div>
                <div>
                    <h2>soft skills</h2>
                    {
                        softSkills.map((item,index)=>(
                            <Skill
                                key={index}
                                name = {item.name}
                        />
                        ))
                    }
                </div>
            </div>
    )
}