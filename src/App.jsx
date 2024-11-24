import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-200">
      <div className="flex flex-col gap-4">
        <button className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:from-purple-600 hover:to-purple-600">
          Button 1
        </button>
        <button className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:from-purple-600 hover:to-purple-600">
          Button 2
        </button>
        <button className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:from-purple-600 hover:to-purple-600">
          Button 3
        </button>
      </div>
    </div>
  )
}

export default App
