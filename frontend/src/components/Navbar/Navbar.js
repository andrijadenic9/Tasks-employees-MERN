import { Link } from "react-router-dom"

function Navbar({ isEmployeePage, isTaskPage, setIsEmployeeAddModal, setIsTaskAddModal }) {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand">Andrija Denic</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/employees'>Employee</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/tasks'>Tasks</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/statistics'>Stats</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/top-5'>Top 5</Link>
                            </li>
                        </ul>
                        {isEmployeePage ? <button onClick={() => setIsEmployeeAddModal(true)}>Add employee</button> : null}
                        {isTaskPage ? <button onClick={() => setIsTaskAddModal(true)}>Add task</button> : null}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
