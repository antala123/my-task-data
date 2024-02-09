import React, { useState } from 'react';
import Form from './Component/Fromdata';

const App = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    pnumber: '',
    city: '',
    isShow: false
  });

  const formSubmithandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const pnumber = event.target.pnumber.value;
    const city = event.target.city.value;

    const isShow = true;

    setFormData({
      ...formData,
      name,
      email,
      password,
      pnumber,
      city,
      isShow
    }, () => {
      console.log("data", formData);
    });
  };

  return (
    <div className='container mt-5'>
      <Form submit={formSubmithandler}
        isShow={formData.isShow}
        name={formData.name}
        email={formData.email}
        password={formData.password}
        pnumber={formData.pnumber}
        city={formData.city}></Form>
    </div>
  );
};

export default App;
