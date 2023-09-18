import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { NewMemory } from '../pages/NewMemory';
import { Profile } from '../pages/Profile';
import { ShowMemory } from '../pages/ShowMemory';

export function AppRoutes () {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/new' element={<NewMemory />}/>
      <Route path='/ShowMemory/:id' element={<ShowMemory />}/>
      <Route path="*" element={<div> Not Found or You do not have permission.</div>}/>
    </Routes>
  )
}