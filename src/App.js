import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios";
import {useEffect, useState} from "react";
import Column from "./Column";

import AddCardModal from "./AddCardModal";


function App() {

    const [statuses, setStatuses] = useState([])
    const [cards, setCards] = useState([])

    const getStatuses = () => {
        axios
            .get("https://nazarov-kanban-server.herokuapp.com/column")
            .then(res => {
                setStatuses(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        getStatuses()
        getCards()
    }, [])

    const getCards = () => {
        axios
            .get("https://nazarov-kanban-server.herokuapp.com/card")
            .then(res => {
                setCards(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const addCard = (obj) => {
        console.log(obj)
        axios
            .post("https://nazarov-kanban-server.herokuapp.com/card", {...obj})
            .then(res => {
                getCards()

            })
            .catch(error => {
                console.log(error)
            })
    }

    const deleteCard = (id) => {
        axios
            .delete(`https://nazarov-kanban-server.herokuapp.com/card/${id}`)
            .then(res => {
                getCards()

            })
            .catch(error => console.log(error))
    }

    const updateCard = (id, obj) => {
        console.log(obj)
        axios
            .patch(`https://nazarov-kanban-server.herokuapp.com/card/${id}`, {...obj})
            .then(res => {
                getCards()
            })
            .catch(error => console.log(error))
    }

    const moveCard = (id, status, direction) => {
        const arrayStasuses = statuses.map(el => el.status)
        const newStatus = arrayStasuses[arrayStasuses.indexOf(status) + direction]
        axios
            .patch(`https://nazarov-kanban-server.herokuapp.com/card/${id}`, {
                status: newStatus
            })
            .then(res => {
                getCards()
            })
            .catch(error => console.log(error))
    }

    return (

        <div className="container">
            <h1>Kanban Board</h1>

            <AddCardModal addCard={addCard}/>

            <div className="row align-items-start">
                {statuses.map((el, index) => <Column
                    key={el._id}
                    status={el}
                    cards={cards}

                    statuses={statuses}

                    deleteCard={deleteCard}
                    updateCard={updateCard}
                    moveCard={moveCard}

                />)}
            </div>

        </div>
    );
}

export default App;
