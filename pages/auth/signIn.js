import React from 'react'
import {Test} from '../../components/auth/auth'
import Layout from '../../components/layout/Layout'
import Navbar from '../../components/layout/components/Navbar'
export default function signIn() {
  return (
    <Layout>
      <div className='flex flex-col items-center'>
      <div className='flex items-start'>
      <h1 className='text-3xl font-bold text-left my-2'>Login</h1>
      </div>
        <div className='lg:w-1/3 md:w-3/5 sm:w-full p-4 lg:m-4 md:m-4 sm:m-2 bg-white rounded shadow-xl'>
        <label class="block text-gray-700 text-sm mb-2" for="username">
        Username or email address*
      </label>
      <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
          <label class="block text-gray-700 text-sm  mb-2" for="password">
        Password*
      </label>
      <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="password"/>
        <div class="flex flex-row items-center my-4 mx-2">
       <input type="checkbox" value="" class="w-3 h-3 accent-green-500 text-white rounded focus:ring-green-500  focus:ring-1"/>
       <label class="ml-2 text-sm font-medium text-gray-900">Remember me</label>
       <button className='ml-8 bg-green-500 rounded-lg text-white p-2'>Login </button>
        </div>
        </div>
        </div>
    </Layout>
  )
}
