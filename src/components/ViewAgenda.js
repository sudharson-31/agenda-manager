import agendas from "./agendas";
import Lister from "./Lister";

export default function ViewAgenda(){
    return (
    <div>
        {agendas.map(e=>{
            return <Lister title={e.title} description={e.description} topic={e.topic} />
        })

        }
    </div>
    )
}