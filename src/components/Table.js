import React from 'react'

export default function Table ({ list, total}) {
  return (
    <div>
      <>
      <table width="100%" className='mb-10'>
      <thead>
              <tr className='bg-gray-300 p-10' key="">
                <td className='font-bold'>Description</td>
                <td className='font-bold'>Price</td>
                <td className='font-bold'>Quantity</td>
                <td className='font-bold'>Amount</td>
              </tr>
            </thead>
        {list.map(({ id, description, price, quantity, amount }) => (
           <React.Fragment key={id}>           
            <tbody>
              <tr>
                <td>{description}</td>
                <td> {price}</td>
                <td>{quantity}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
           </React.Fragment>
        ))}
      </table>

      <div>
        <h2 className='flex items-end justify-end text-gray-800 text-4xl font-bold'>NGN {total.toLocaleString()}</h2>
      </div>
      </>
    </div>
  )
}
