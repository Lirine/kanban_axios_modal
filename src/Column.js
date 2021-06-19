import Card from "./Card";

function Column(props) {


    return (
        <div className="col-sm">
            <h3>{props.status.title}</h3>
            {props.cards
                .filter(el => el.status === props.status.title)
                .map(el => <Card key={el._id} card={el}
                                 stasuses={props.statuses}

                                 cards={props.cards}


                                 deleteCard = {props.deleteCard}
                                 updateCard = {props.updateCard}
                                 moveCard={props.moveCard}
                />)}

        </div>


    )
}

export default Column