import React, { useState } from 'react';
import Submit from './Submit';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        pnumber: '',
        city: ''
    });

    const [isShow, setIsShow] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsShow(true);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name:- </label>
                    <input type="text" name='name' value={formData.name} onChange={handleChange} className="form-control" id="name" placeholder="Enter Your Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email:- </label>
                    <input type="email" name='email' value={formData.email} onChange={handleChange} className="form-control" id="email" placeholder="Enter Your Email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" autoComplete='false' name='password' value={formData.password} onChange={handleChange} className="form-control" id="password" placeholder="Enter Your Email Password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Phone Number:- </label>
                    <input type="number" name='pnumber' value={formData.pnumber} onChange={handleChange} className="form-control" id="pnumber" placeholder="Enter Your Phone Number" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">City:- </label>
                    <input type="text" name='city' value={formData.city} onChange={handleChange} className="form-control" id="city" placeholder='Enter Your City' />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            {isShow === false ? "" : <Submit name={formData.name} email={formData.email} password={formData.password} pnumber={formData.pnumber} city={formData.city}></Submit>}
        </div>
    );
};

export default Form;
