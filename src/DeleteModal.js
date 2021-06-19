import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function DeleteModal (props) {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const deleteCard = () => {
        props.deleteCard(props.card._id)
        toggle()
    }

    return (
        <>
            <Button color="outline-danger" onClick={toggle}>Delete</Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Delete Card</ModalHeader>
                <ModalBody>
                     Do you want to delete this card?
                </ModalBody>
                <ModalFooter>
                    <Button color="outline-primary" onClick={deleteCard}>Confirm</Button>{' '}
                    <Button color="outline-secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default DeleteModal;