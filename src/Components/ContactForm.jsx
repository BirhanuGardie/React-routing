import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <form >
        <input type="text" placeholder='Name'/>
        <br/>
        <input type="email" placeholder='Email'/>
        <br/>
        <textarea placeholder='Message' cols="30" rows="10"></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
