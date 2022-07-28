import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


function AddEmp() {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');
    const [age, setAge] = useState('');

    const navigate = useNavigate();


    const saveEmployee = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/adduser', {
            name: name,
            salary: salary,
            age: age
        });
        navigate('/');
    }
    return (
        <>
            <div className=" container-sm bg-danger  text-white  py-2 my-2 w-50 ">Add Employee</div>
            <div className=" container-sm bg-dark mt-0 text-white  py-3 my-5 w-50 ">
                {/* <div class="container-sm bg-dark mt-0 text-white  py-3 my-5 w-50  position-absolute translate-middle "> */}
                <form onSubmit={saveEmployee} className="" >
                    <div className="row mb-2">
                        <label for="name" className="col-sm-3 col-form-label">Employee Name</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control form-control-sm" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="salary" className="col-sm-3 col-form-label">Salary</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control form-control-sm" placeholder="Enter Salary" value={salary} onChange={(e) => setSalary(e.target.value)} required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="age" className="col-sm-3 col-form-label">Age</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control form-control-sm" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} required />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-5 offset-sm-2">
                            <button type="submit" className="btn btn-primary btn-sm me-4 ">Save</button>
                            <Link to="/"><button type="submit" className="btn btn-success btn-sm">Home</button></Link>
                        </div>


                    </div>



                </form>

            </div>
        </>

    )
}

export default AddEmp