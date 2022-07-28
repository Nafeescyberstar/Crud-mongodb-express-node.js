import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditEmp() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [state, setState] = useState({
        name: "",
        salary: "",
        age: ""
    })
    const { name, salary, age } = state;

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };
    const updateEmployee = async (e) => {
        await axios.patch(`http://localhost:4000/update/${id}`, {
            name: state.name,
            salary: state.salary,
            age: state.age
        });
        navigate('/');
    }
    useEffect(() => {
        getEmployeeId();
    }, [])

    const getEmployeeId = async () => {
        const response = await axios.get(`http://localhost:4000/edit/${id}`);
        setState(response.data)
    }
    return (
        <>
            <div className=" container-sm bg-danger  text-white  py-2 my-2 w-50 ">Update Employee Detail</div>
            <div className=" container-sm bg-success mt-0 text-white  py-3 my-5 w-50 ">
                {/* <div class="container-sm bg-dark mt-0 text-white  py-3 my-5 w-50  position-absolute translate-middle "> */}
                <form onSubmit={updateEmployee} className="" >
                    <div className="row mb-2">
                        <label for="name" className="col-sm-3 col-form-label">Employee Name</label>
                        <div className="col-sm-6">
                            <input type="text" name="name" className="form-control " value={state.name} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="salary" className="col-sm-3 col-form-label">Salary</label>
                        <div className="col-sm-6">
                            <input type="text" name="salary" className="form-control " value={state.salary} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="age" className="col-sm-3 col-form-label">Age</label>
                        <div className="col-sm-6">
                            <input type="text" name="age" className="form-control " value={state.age} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-5 offset-sm-2">
                            <button type="submit" className="btn btn-primary btn-sm me-4">Update</button>
                            <Link to="/"><button type="submit" className="btn btn-warning btn-sm">Home</button></Link>
                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}

export default EditEmp
