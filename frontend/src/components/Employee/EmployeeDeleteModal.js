import Modal from 'react-bootstrap/Modal';
import Input from '../Input';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { showLoader } from '../../redux-store/loaderSlice';
import { deleteEmployee } from '../../services/EmployeeService';
import { displayEmployeeRerender } from '../../redux-store/employeeSlice';
import { useEffect, useState } from 'react';

function EmployeeDeleteModal(props) {

    const { employee } = useSelector(state => state.employeeStore);

    const displayMessage = response => {
        if (response.status === 200) toast.success(response.message);
        if (response.status === 401) toast.error(response.message);
        if (response.status === 404) toast.warning(response.message);
        if (response.status === 500) toast.error(response.message);
    }

    const deleteOne = async () => {
        //todo - do not know why deleteEmployee do not work when showloader
        // dispatch(showLoader(true))
        props.setIsEmployeeDeleteModal(false);

        let response;
        try {
            response = await deleteEmployee(employee._id);
            console.log(response, 'response FRONT');
        } catch (err) {
            console.log(err, 'ERROR');
        }
        //todo - do not know why deleteEmployee do not work when showloader
        // dispatch(showLoader(false))
        // if (response.status === 200) dispatch(displayEmployeeRerender(!employeeRerender));
        response && displayMessage(response);
        if (response.status === 200) props.setEmployeeFlag(!props.employeeFlag);
    }

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter" >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Delete employee
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        Are you sure u want to delete {employee.fullName} employee?
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Input type="submit" value="Delete" onClick={deleteOne} />
                    <Input type="submit" value="Cancel" onClick={() => props.setIsEmployeeDeleteModal(false)} />
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EmployeeDeleteModal;