import React from 'react';

export default function Form(props) {
    const { values, change, submit, disabled, errors } = props;

    return (
        <form className='form' onSubmit={submit}>
            <div style={{backgroundColor: 'white'}}className='form-div'>
                <h2 style={{ color: 'coral' }}>Enter user information</h2>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>
                <div className='input-div'>
                    <div style={{ margin: '20px 0' }}>
                        <label style={{ color: 'green' }}>Name:&nbsp;
                        <input
                                name='name'
                                type='text'
                                value={values.name}
                                onChange={change}
                            >
                            </input>
                        </label>
                    </div>
                    <div style={{ margin: '20px 0' }}>
                        <label style={{ color: 'coral' }}>Email:&nbsp;
                        <input
                                value={values.email}
                                onChange={change}
                                name='email'
                                type='email'
                            />
                        </label>
                    </div>
                    <div style={{ margin: '20px 0' }}>
                        <label style={{ color: 'green' }}>Password:&nbsp;
                        <input
                                value={values.password}
                                onChange={change}
                                name='password'
                                type='password'
                            />
                        </label>
                    </div>
                    <div style={{ margin: '20px 0' }}>
                        <label style={{ color: 'coral' }}>Role:&nbsp;
                        <select
                                onChange={change}
                                value={values.role}
                                name='role'
                            >
                                <option value=''>**Select an option**</option>
                                <option value='Volunteer'>Volunteer</option>
                                <option value='Alumni'>Alumni</option>
                                <option value='Instructor'>Instructor</option>
                                <option value='Service Worker'>Service Worker</option>
                            </select>
                        </label>
                    </div>
                    <div style={{ margin: '20px 0' }}>
                        <label style={{ color: 'green' }}>Terms
                        <input
                                checked={values.serviceTerms}
                                value={values.serviceTerms}
                                onChange={change}
                                name='serviceTerms'
                                type='radio'
                            />
                        </label>
                    </div>
                    {/* <label>Terms
                        <input
                            checked={values.serviceTerms === 'disagree'}
                            value='disagree'
                            onChange={change}
                            name='serviceTerms'
                            type='radio'
                        />
                    </label> */}
                </div >
                <button style={{ color: 'coral', margin: '20px 20px', padding: '10px 10px' }} disabled={disabled}>Submit</button>
            </div >
        </form >
    )
}