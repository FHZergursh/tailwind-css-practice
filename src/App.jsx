import React from 'react'

const App = () => {
  return (
    <div className='bg-slate-300 min-h-screen text-slate-900'> {/* Wraps around the whole page, gives a background. Min-h is needed to fit whole page*/}
      <div className='flex items-center justify-center h-12 bg-blue-500 text-white'>  {/* items-center does vertical, justify center does horizontal */}
        <div>Logo</div>
        <div>
          <span>Home</span>
          <span>About</span>
          <span>Contract</span>
        </div>

      </div>
    </div>
  )
}

export default App