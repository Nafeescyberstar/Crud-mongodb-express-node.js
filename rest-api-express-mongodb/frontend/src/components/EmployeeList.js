import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Table ,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';


function EmployeeList() {
    const [empdetails, setEmpdetails] = useState([]);
    // const [empid, setEmpid] = useState([]);
    // const [v, setV] = useState(false);


    useEffect(() => {
        getEmployee();
    }, [])

    const getEmployee = async () => {
        const response = await axios.get('http://localhost:4000');

        setEmpdetails(response.data);
    }

    const deleteProduct = async (id) => {
        // setEmpid(id)
        // setV(true)
        const confirm = window.confirm("Are you sure, you want to delete this row")
        if (confirm) {
            await axios.delete(`http://localhost:4000/delete/${id}`);
            getEmployee();
        }

    }

    return (
        <>
            <div className="container bg-light text-dark">
                <h2>Employee Details</h2>

            </div>

            <div className=" my-4">
                <Link to="/add" className="btn btn-primary btn-sm"><span>Add New User</span></Link>
            </div>

            <div className="container table-responsive-sm">
                <Table className="table table-borderless table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee Name</th>
                            <th>Salary</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empdetails.map((item, index) => (
                            <tr>
                                <td>{index + 416}</td>
                                <td>{item.name}</td>
                                <td>{item.salary}</td>
                                <td>{item.age}</td>
                                <td>
                                    <Link to={`/edit/${item._id}`}><button className="btn btn-primary btn-sm">Edit</button></Link>&nbsp;
                                    <button onClick={() => deleteProduct(item._id)} className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </Table>
                {/* <Modal show={v}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        are
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" >
                            
                        </Button>
                    </Modal.Footer>
                </Modal> */}
            </div>
        </>
    )

}

export default EmployeeList