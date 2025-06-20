import React from 'react'

const Chat = () => {
  return (
     <div
      className="relative bg-cover bg-center bg-no-repeat py-24 flex flex-col items-center justify-center text-center px-4"
      style={{
        backgroundImage: `url('/images/business-background.png')`, // Replace with your background image path
      }}
    >
      <div className="absolute inset-0 bg-red-700 opacity-90 z-0"></div>

      <div className="relative z-10 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Ready to Grow Your Business?
        </h2>

        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-white text-red-600 font-medium px-6 py-3 rounded-full shadow hover:bg-gray-100 transition-all">
            Start selling
          </button>
          <button className="bg-transparent border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-red-600 transition-all">
            Chat with consultant
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chat
