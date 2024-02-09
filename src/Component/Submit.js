import React from 'react';

const Submit = (props) => {
    return (
        <div>
            <h2>Thank you for joining us.</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Phone Number</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.name}</td>
                        <td>{props.email}</td>
                        <td>{props.password}</td>
                        <td>{props.pnumber}</td>
                        <td>{props.city}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Submit;
