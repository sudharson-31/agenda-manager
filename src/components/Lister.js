
export default function Lister(props){
console.log(props)
    return (
        <div className="list">
            <div className="name">
                {props.title}
            </div>
            <div className="content">
                <ul>
                {props.topic.map(e=>{
                    return <li>{e}</li>
                }) }
                </ul>

            </div>
            <div className="description">
                {props.description}
            </div>
        </div>
    )
}