import Modal from 'react-bootstrap/Modal';
import Input from '../Input';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { showLoader } from '../../redux-store/loaderSlice';
import { deleteTask } from '../../services/TaskService';
import { displayTaskRerender } from '../../redux-store/taskSlice';
import { useEffect, useState } from 'react';

function TaskDeleteModal(props) {

    const { task } = useSelector(state => state.taskStore);

    const displayMessage = response => {
        if (response.status === 200) toast.success(response.message);
        if (response.status === 401) toast.error(response.message);
        if (response.status === 404) toast.warning(response.message);
        if (response.status === 500) toast.error(response.message);
    }

    const deleteOne = async () => {
        //todo - do not know why deleteTask do not work when showloader
        // dispatch(showLoader(true))
        props.setIsTaskDeleteModal(false);

        let response;
        try {
            response = await deleteTask(task._id);
            console.log(response, 'response FRONT');
        } catch (err) {
            console.log(err, 'ERROR');
        }
        //todo - do not know why deleteTask do not work when showloader
        // dispatch(showLoader(false))
        // if (response.status === 200) dispatch(displayTaskRerender(!taskRerender));
        response && displayMessage(response);
        if (response.status === 200) props.setTaskFlag(!props.taskFlag);
    }

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter" >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Delete task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        Are you sure u want to delete {task.title} task?
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Input type="submit" value="Delete" onClick={deleteOne} />
                    <Input type="submit" value="Cancel" onClick={() => props.setIsTaskDeleteModal(false)} />
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default TaskDeleteModal;