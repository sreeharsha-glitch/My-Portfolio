import './FormStyles.css'
import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label className='label'> Your Name</label>
            <input type="text" placeholder='Your Name'></input>
            <label className='label'> Email</label>
            <input type="email" placeholder='Email'></input>
            <label className='label'> Subject</label>
            <input type="text" placeholder='Subject'></input>
            <label className='label'> Message</label>
            <textarea rows="6" typeholder="Type your message here" placeholder='Type your message here'/>
            <br/>
            <button className='btnk'>Submit</button>
        </form>

    </div>
  )
}

export default Form