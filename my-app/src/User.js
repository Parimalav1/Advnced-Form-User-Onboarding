import React from 'react';

export default function User({ info }) {

    if (!info) {
        return ('Finding, please wait')
    }
    return (
        <div className='form-div'>
            {/* <h2> {info.name}</h2> */}
            <p>{info.email}</p>
            {/* <p>{info.role}</p> */}
        </div>

    )
}