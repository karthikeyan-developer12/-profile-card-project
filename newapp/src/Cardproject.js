import "./Card.css"

export const Card = (props) =>{
    return(<div className="main">
        <span className={props.condition ? "on" : "off"}>{props.condition ? "ONLINE" : "OFFLINE"}</span>
        <img src={props.img}alt="firstname"></img>
        <h2 className="name">{props.name}</h2>
        <h2 className="position">{props.position}</h2>
        <div class="butt">
        <button>follow</button>
        <button>message</button>
        </div>
        <div className="skills">
        <h4>skills</h4>
        
        <ul>
            {props.skills.map((skill,index) => (
                <li key={index}>
                {skill}
                </li>
            ))}
          
        </ul>
        </div>

    </div>)
}
const skillset=["UI","python","react","javascript","sql"]
export const Usercard  = () =>{
    return(
        <>
        <Card name="KARTHIKEYAN S" condition={true} position="FRONTENDDEVELOPER" img="./first.png" skills={skillset} />
        <Card name="ABCD" condition={true} position="FULLSTACKDEVELOPER" img= "./second.png" skills={skillset} />
        <Card name="JESICA" condition={false} position="BACKENDDEVELOPER" img="./third.webp" skills={skillset}/>
        <Card name="KARTHIKEYAN S" condition={true} position="FRONTENDDEVELOPER" img="./first.png" skills={skillset} />
        <Card name="JESICA" condition={false} position="BACKENDDEVELOPER" img="./third.webp" skills={skillset}/>
        <Card name="JESICA" condition={false} position="BACKENDDEVELOPER" img="./third.webp" skills={skillset}/>

        </>
    )
}