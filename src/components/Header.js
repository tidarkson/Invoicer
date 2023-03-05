import React from 'react'

export default function Header() {

  return (
    <div>
        <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
          <div>
            <img className='w-20' src="./image/header.png" alt="" />
          </div>
        <div>
          <h2 className="font-bold uppercase tracking-wide text-4xl mt-5">Invoicer</h2>
        </div>

        {/* <div>
          <ul className=" flex flex-wrap justify-between items-center">
            <li><button className="btn btn-print mt-5 bg-gray-500 py-2 px-8 rounded shadow boreder-2 border-gray-500 hover:bg-transparent hover:text-gray-500 text-white font-bold transition-all duration-300">Print</button></li>
            <li className='mx-2'>  <ReactToPrint
            trigger={() => <button className="mb-5 btn btn-print mt-5 bg-gray-500 py-2 px-8 rounded shadow boreder-2 border-gray-500 hover:bg-transparent hover:text-gray-500 text-white font-bold transition-all duration-300">Print/ Download</button>}
            content={() => componentRef.current} /></li>
            <li><button className="btn btn-send mt-5 bg-green-500 py-2 px-8 rounded shadow boreder-2 border-green-500 hover:bg-transparent hover:text-green-500 text-white font-bold transition-all duration-300">Send</button></li>
          </ul>
        </div> */}
      </header>
    </div>
  )
}
