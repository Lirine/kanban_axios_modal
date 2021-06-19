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

function AddCardModal (props) {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [cardName, setCardName] = useState('')
    const [cardDescription, setCardDescription] = useState('')
    const [priorityValue, setPriorityValue] = useState('')

    console.log(priorityValue)

    const saveButtonHandler = () => {
        const obj = {
            name: cardName,
            description: cardDescription,
            priority: priorityValue,
            status: 'todo'
        }
        props.addCard(obj)
        toggle()
        setCardName('')
        setCardDescription('')
        setPriorityValue('')
    }

    let priority = [1,2,3,4,5]

    return (
        <div>
            <Button color="outline-success" onClick={toggle}>Add Card</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>...add card</ModalHeader>
                <ModalBody>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Card Name</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="card name" value={cardName} onChange={e => setCardName(e.target.value)} />
                    </InputGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Description</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="description" value={cardDescription} onChange={e => setCardDescription(e.target.value)}/>
                    </InputGroup>

                    <select className="form-select" aria-label="Default select example"
                    value={priorityValue} onChange={e => setPriorityValue(e.target.value)}>
                        <option>Priority</option>

                        {priority.map(el => <option key={el} value={el}>{el}</option>)}

                    </select>




                </ModalBody>
                <ModalFooter>
                    <Button color="btn btn-outline-primary" onClick={saveButtonHandler}>Save</Button>{' '}
                    <Button color="btn btn-outline-secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default AddCardModal;