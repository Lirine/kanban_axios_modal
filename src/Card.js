import UpdateCardModal from "./UpdateCardModal";
import DeleteModal from "./DeleteModal";
import {useState} from "react";

function Card(props) {

    const [priority, setPriority] = useState(props.card.priority)

    const updatePriority = (direction) => {
        const newPriority = priority + direction
        setPriority(newPriority)
        console.log('IL  '+newPriority)
        const obj = {
            priority: newPriority
        }
        console.log('IL  '+ props.card._id +  obj)
        props.updateCard(props.card._id, obj)
    }

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h6 className="card-title">{props.card.name}</h6>
                    <div>
                        {props.card.description}
                    </div>
                    <div>
                        Priority: {priority}

                        <button type="button" className="btn btn-outline-secondary btn-sm"
                                onClick={() => updatePriority(1)} disabled={priority===5}>⬆
                        </button>
                        <button type="button" className="btn btn-outline-secondary btn-sm"
                                onClick={() => updatePriority(-1)} disabled={priority===1}>⬇
                        </button>
                    </div>

                    <p>
                        Status:
                        <button type="button" className="btn btn-outline-primary btn-sm"
                                onClick={() => props.moveCard(props.card._id, props.card.status, -1)}>⬅
                        </button>
                        <button type="button" className="btn btn-outline-primary btn-sm"
                                onClick={() => props.moveCard(props.card._id, props.card.status, 1)}
                        >➡
                        </button>
                    </p>


                    <UpdateCardModal card={props.card} updateCard={props.updateCard}/>

                    <DeleteModal card={props.card} deleteCard={props.deleteCard}/>

                </div>
            </div>
        </div>
    )
}

export default Card