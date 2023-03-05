import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from "uuid"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"

export default function TableForm({ description, setDescription, quantity, setQuantity, price, setPrice, amount, setAmount, list, setList, total, setTotal }) {

  const [isEditing, setisEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!description || !quantity || !price){
      alert("Please fill in all inputs")
    }
    else {
      const newItems = {
        id: uuidv4(),
        description,
        amount,
        price,
        quantity
      }
  
      setAmount("")
      setDescription("")
      setPrice("")
      setQuantity("")
      setList([...list, newItems])
    }
    }
 

  // calculate Items amount
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(price * quantity)
    }
    calculateAmount(amount)
  }, [amount, price, quantity, setAmount]);

  //calculate total amount on table
  useEffect(() => {
    let rows = document.querySelectorAll(".amount")
    let sum = 0

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
        setTotal(sum)
      }
    }
  })



  // Edit function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id)
    setList(list.filter((row) => row.id !== id))
    setisEditing(true)
    setDescription(editingRow.description)
    setQuantity(editingRow.quantity)
    setPrice(editingRow.price)


  }
  // Delete function
  const deleteRow = (id) => {
    setList(list.filter((row) => row.id !== id))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col md:mt-16'>
          <label htmlFor='description'>Item Description</label>
          <input type="text"
            name='description'
            id='descrpition'
            placeholder='item description'
            value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>

        <div className='md:grid grid-cols-3 gap-10'>
          <div className='flex flex-col'>
            <label htmlFor='quantity'>Item Quantity</label>
            <input type="text"
              name='quantity'
              id='descrpition'
              placeholder='item quantity'
              value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          </div>

          <div className='flex flex-col'>
            <label htmlFor='price'>Item Price</label>
            <input type="text"
              name='price'
              id='price'
              placeholder='item price'
              value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>

          <div className='flex flex-col'>
            <label htmlFor='amount'>Item Amount</label>
            <p>{amount}</p>
          </div>
        </div>
        <button type='submit' className="mb-5 bg-blue-500 py-2 px-8 rounded shadow boreder-2 border-blue-500 hover:bg-transparent hover:text-blue-500 text-white font-bold transition-all duration-300">Add Table Item</button>
      </form>

      {/* Table Items */}
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
                <td className='amount'>{amount}</td>
                <td><button onClick={() => deleteRow(id)}><AiOutlineDelete className='text-red-500 font-bold text-2xl' /></button></td>
                <td><button onClick={() => editRow(id)}><AiOutlineEdit className='font-bold text-2xl' /></button></td>

              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div>
        <h2 className='flex items-end justify-end text-gray-800 text-4xl font-bold'>NGN {total.toLocaleString()}</h2>
      </div>
    </>
  )
}
