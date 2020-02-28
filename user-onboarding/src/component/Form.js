import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * Yup from 'yup';
import axios from 'axios';

const Form = ({ values, errors, touched, status }) => {
    const [users, setUsers] = useState([]);
useEffect(() =>{
    if (status) {
        setUsers([...users, status]);
    }
}, [status]);

return (
    <div className='from'>
        <h1>User Onboarding</h1>
        <From>
            <Field type='text' name='name' placeholder='Name'/>
        </From>
    </div>
)


