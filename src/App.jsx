import React from 'react'
import './App.css'
import Hero from './components/Hero'
const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Hero />
      <div className='h-screen w-full bg-gradient-to-b from-violet-50 to-violet-100'>
        <div className='absolute-center h-full w-full'>
        </div>
      </div>
    </main>
  )
}

export default App