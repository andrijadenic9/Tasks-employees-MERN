function Navbar({ isEmployeePage, setIsEmployeePage, setIsEmployeeAddModal, setIsTaskAddModal }) {

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
                            <li className="nav-item" onClick={() => setIsEmployeePage(true)}>
                                <a className="nav-link" href="#">Employee</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => setIsEmployeePage(false)}>Tasks</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => setIsEmployeePage(false)}>Average monthly salary</a>
                            </li>
                        </ul>
                        {
                            isEmployeePage ?
                                <button onClick={() => setIsEmployeeAddModal(true)}>Add employee</button> :
                                <button onClick={() => setIsTaskAddModal(true)}>Add task</button>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
