import React from 'react'

const Register = () => {
  const RegisterHOC = ({ children }) => {
    return (
      <div className='bg-amber-400'>
        {children}
      </div>
    )
  }
  return (
    // <RegisterHOC>
    <div className='h-100 w-100 bg-gray-500'>
      <from>
        <label for="email">
          Email
        </label>
        <input placeholder='Enter your email' id="email" />
        <br />
        <label>
          Password
          <input placeholder='Enter your password' />
        </label>
<button  className='cursor-pointer blur-sm'>login</button>
      </from>
    </div>

    // </RegisterHOC>


  )
}

export default Register
