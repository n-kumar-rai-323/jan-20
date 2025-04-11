import Head from 'next/head'
import Image from 'next/image'
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
    <>
     <Head>
        <title>Register | Jatra</title>
      </Head>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl relative overflow-hidden">
          {/* Subtle background effect */}
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-blue-300 via-white to-gray-300 z-0"></div>

          {/* Jatra Logo */}
          <div className="flex justify-center mb-6 z-10 relative">
            <Image
              src="/jatra.jpg" // Make sure the file is here
              alt="Jatra Logo"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>

          <h2 className="mb-6 text-center text-2xl font-bold text-orange-600 z-10 relative">
            Create your Jatra account
          </h2>

          <form className="space-y-5 z-10 relative">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-orange-500 px-4 py-2 text-white font-semibold shadow-md hover:bg-orange-600 transition-all duration-300"
            >
              Register
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600 z-10 relative">
            Already have an account?{" "}
            <a href="/login" className="text-orange-500 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </>

    // </RegisterHOC>


  )
}

export default Register
