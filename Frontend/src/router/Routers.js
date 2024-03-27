import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Reagister from '../Pages/Reagister'
import RegistrationSuccess from '../Pages/RegistrationSuccess'

const Routers = () => {
  return (
    <Routes>
       <Route path ='/' element={<Navigate to = '/register' />}/>
       <Route path='/register' element={<Reagister/>}/>
       <Route path='/register-success' element={<RegistrationSuccess/>}/>
    </Routes>
  )
}

export default Routers