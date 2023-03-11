import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Employee from './pages/Employee';
import Task from './pages/Task';
import { useState } from 'react';
import Loader from './components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [isEmployeePage, setIsEmployeePage] = useState(true);
  const [isEmployeeAddModal, setIsEmployeeAddModal] = useState(false);
  const [isTaskAddModal, setIsTaskAddModal] = useState(false);

  return (
    <>
      <Loader />
      <div div className='container'>
        <Navbar
          isEmployeePage={isEmployeePage}
          setIsEmployeePage={setIsEmployeePage}
          setIsEmployeeAddModal={setIsEmployeeAddModal}
          setIsTaskAddModal={setIsTaskAddModal} />
        {
          isEmployeePage ?
            <Employee
              isEmployeeAddModal={isEmployeeAddModal}
              setIsEmployeeAddModal={setIsEmployeeAddModal} /> :
            <Task
              isTaskAddModal={isTaskAddModal}
              setIsTaskAddModal={setIsTaskAddModal} />
        }
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored" />
      </div >
    </>
  );
}

export default App;
