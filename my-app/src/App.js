import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import User from './User';
import FormSchema from './FormSchema'
import axios from 'axios'
import * as Yup from 'yup'


const firstFormValues = {
  name: '',
  email: '',
  password: '',
  role: '',
  serviceTerms: false
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  role: ''
}

const firstUser = [];
const initialOff = false;

function App() {
  const [formValues, setFormValues] = useState(firstFormValues);
  const [users, setUsers] = useState(firstUser);
  const [error, setError] = useState(initialFormErrors);
  const [off, setOff] = useState(initialOff);

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        console.log(JSON.stringify(res));
        console.log(JSON.stringify(res.data.data));
        setUsers(res.data.data)
      })
      .catch(err => {
        console.error('Error');
        debugger
      })
  }


  const postNewUser = (newUser) => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([...users, res.data])
        console.log(JSON.stringify(users));
      })
      .catch(err => {
        console.error('Error');
        debugger
      })
      .finally(() => {
        setFormValues(firstFormValues)
      })
  }

  const onInputChange = evt => {
    let { name, value } = evt.target;
    Yup
      .reach(FormSchema, name)
      //we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(() => {
        setError({
          ...error,
          [name]: ""
        });
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
        returned from yup (that we created in our schema) */
      .catch(err => {
        setError({
          ...error,
          [name]: err.errors[0] // investigate
        })
      })

    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }

  // const onCheckboxChange = evt => {
  //   const { name, checked } = evt.target
  //   setFormValues({
  //     ...formValues: checked,
  //   })
  // }

  const onSubmit = evt => {
    evt.preventDefault();
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      role: formValues.role,
      serviceTerms: formValues.serviceTerms
    }
    console.log('submitted user: ' + JSON.stringify(newUser));
    postNewUser(newUser);
  }

  useEffect(() => {
    getUsers();
  }, [])

  useEffect(() => {
    FormSchema.isValid(formValues).then(valid => {
      console.log('valid: ' + valid);
      setOff(!valid);
    })
  }, [formValues])


  return (
    <div style={{background: 'white'}}className="App">
        <h1 style={{color: 'green'}}>Users</h1>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      <div className='form-container'>
        <Form
          values={formValues}
          change={onInputChange}
          // checkboxChange={onCheckboxChange}
          submit={onSubmit}
          disabled={off}
          errors={error}
        />
        {
          users.map(x => {
            return <User key={x.id} info={x} />
          })
        }
      </div>
    </div>
  );
}

export default App;
