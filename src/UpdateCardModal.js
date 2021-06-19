import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    InputGroupText,
    InputGroupAddon,
    InputGroup,
    Input,
} from 'reactstrap';
import {useState} from "react";

function UpdateCardModal(props) {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [cardName, setCardName] = useState(props.card.name)
    const [cardDescription, setCardDescription] = useState(props.card.description)
    const [priorityValue, setPriorityValue] = useState(props.card.priority)


    const saveButtonHandler = () => {
        const obj = {
            name: cardName,
            description: cardDescription,
            priority: priorityValue,
        }
        props.updateCard(props.card._id, obj)
        toggle()

    }

    let priority = [1, 2, 3, 4, 5]

    return (
        <>
            <Button color="outline-primary" onClick={toggle}>Update</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Update Card's Fields</ModalHeader>
                <ModalBody>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Card Name</InputGroupText>
                        </InputGroupAddon>
                        <Input value={cardName} onChange={e => setCardName(e.target.value)}/>
                    </InputGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Description</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="description" value={cardDescription}
                               onChange={e => setCardDescription(e.target.value)}/>
                    </InputGroup>

                    <select className="form-select" aria-label="Default select example"
                            value={priorityValue} onChange={e => setPriorityValue(e.target.value)}>
                        <option value={props.card.priority}>Priority</option>

                        {priority.map(el => <option key={el} value={el}>{el}</option>)}

                    </select>


                </ModalBody>
                <ModalFooter>
                    <Button color="btn btn-outline-primary" onClick={saveButtonHandler}>Save</Button>{' '}
                    <Button color="btn btn-outline-secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default UpdateCardModal;