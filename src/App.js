import Header from "./components/Header";
import ClientsDetails from "./components/ClientsDetails";
import Footer from "./components/Footer";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";
import Dates from "./components/Dates";
import React, { useState, useRef } from "react";
import TableForm from "./components/TableForm";
import ReactToPrint from 'react-to-print'


function App() {
  const [showInvoice, setShowInvoice] = useState(true)
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [bankName, setBankName] = useState("")
  const [bankAccount, setBankAccount] = useState("")
  const [website, setWebsite] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setNotes] = useState("")
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [amount, setAmount] = useState("")
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  const componentRef = useRef()


  return (
    <main className="p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:mx-w-4xl lg:mx-auto bg-white">

      {showInvoice ?
        <>
          <Header />
          <ReactToPrint
            trigger={() => <button className="mb-5 btn btn-print mt-5 bg-green-500 py-2 px-8 rounded shadow boreder-2 border-gray-500 hover:bg-transparent hover:text-gray-500 text-white font-bold transition-all duration-300">Print Invoice</button>}
            content={() => componentRef.current} />
          <div ref={componentRef}>
            <MainDetails name={name} address={address} />
            <ClientsDetails clientName={clientName} clientAddress={clientAddress} />
            <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
            <Table description={description} quantity={quantity} price={price} amount={amount} list={list} setList={setList} total={total} setTotal={setTotal} />
            <Notes notes={notes} />
            <Footer name={name}
              address={address}
              website={website}
              email={email}
              phone={phone}
              bankAccount={bankAccount}
              bankName={bankName} />
          </div>
          <button onClick={() => setShowInvoice(false)} className=" mt-5 bg-blue-500 py-2 px-8 rounded shadow boreder-2 border-blue-500 hover:bg-transparent hover:text-blue-500 text-white font-bold transition-all duration-300">Edit Information</button>
        </>
        :
        <>
          <div className="flex flex-col justify=center">

            <article className="md:grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label htmlFor="name">Full Name</label>
                <input type="text"
                  placeholder="Enter your Name"
                  id="name"
                  name="text"
                  autoComplete="off "
                  value={name}
                  onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="flex flex-col">
                <label htmlFor="address"> Address</label>
                <input type="text"
                  placeholder="Enter your Address"
                  id="address"
                  name="address"
                  autoComplete="off "
                  value={address}
                  onChange={(e) => setAddress(e.target.value)} />
              </div>
            </article>

            <article className="md:grid grid-cols-3 gap-10">
              <div className="flex flex-col">
                <label htmlFor="email"> email</label>
                <input type="email"
                  placeholder="Enter your email"
                  id="email"
                  name="email"
                  autoComplete="off "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="flex flex-col">
                <label htmlFor="website">Website</label>
                <input type="url"
                  placeholder="Enter your website"
                  id="website"
                  name="website"
                  autoComplete="off "
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)} />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone">Phone</label>
                <input type="number"
                  placeholder="Enter your phone"
                  id="phone"
                  name="phone"
                  autoComplete="off "
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)} />
              </div>
            </article>

            <article className="md:grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label htmlFor="bankName">Bank Name</label>
                <input type="text"
                  placeholder="Enter your bank Name"
                  id="bankName"
                  name="bankName"
                  autoComplete="off "
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)} />
              </div>

              <div className="flex flex-col">
                <label htmlFor="bankAccount"> Account Number</label>
                <input type="number"
                  placeholder="Enter your bank Account Number"
                  id="bankAccount"
                  name="bankAccount"
                  autoComplete="off "
                  value={bankAccount}
                  onChange={(e) => setBankAccount(e.target.value)} />
              </div>
            </article>

            <article className="md:grid grid-cols-2 gap-10 md:mt-20" >
              <div className="flex flex-col">
                <label htmlFor="clientName"> Client's Name</label>
                <input type="text"
                  placeholder="Enter your Client's Name"
                  id="clientName"
                  name="clientName"
                  autoComplete="off "
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)} />
              </div>

              <div className="flex flex-col">
                <label htmlFor="clientAddress"> Client's Address</label>
                <input type="text"
                  placeholder="Enter your Client's Address"
                  id="clientAddress"
                  name="clientAddress"
                  autoComplete="off "
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)} />
              </div>
            </article>


            <article className="md:grid grid-cols-3 gap-10">
              <div className="flex flex-col">
                <label htmlFor="invoiceNumber"> Invoice Number</label>
                <input type="text"
                  placeholder=" Invoice Number"
                  id="invoiceNumber"
                  name="invoiceNumber"
                  autoComplete="off "
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)} />
              </div>

              <div className="flex flex-col">
                <label htmlFor="invoiceDate"> Invoice Date</label>
                <input type="date"
                  placeholder=" Invoice Date"
                  id="invoiceDate"
                  name="invoiceDate"
                  autoComplete="off "
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)} />
              </div>

              <div className="flex flex-col">
                <label htmlFor="DueDate"> Due Date</label>
                <input type="date"
                  placeholder=" Due Date"
                  id="DueDate"
                  name="DueDate"
                  autoComplete="off "
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)} />
              </div>
            </article>

            <TableForm description={description}
              setDescription={setDescription}
              quantity={quantity}
              price={price}
              amount={amount}
              setAmount={setAmount}
              setQuantity={setQuantity}
              setPrice={setPrice}
              list={list}
              setList={setList}
              total={total}
              setTotal={setTotal}
            />


            <label htmlFor="notes">Additional Notes</label>
            <textarea cols="30" rows="10" name="notes" id="notes" placeholder="Additional Notes To The client" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>

            <button onClick={() => setShowInvoice(true)} className="bg-blue-500 py-2 px-8 rounded shadow boreder-2 border-blue-500 hover:bg-transparent hover:text-blue-500 text-white font-bold transition-all duration-300">Preview Invoice</button>
          </div>
        </>


      }

    </main>
  );
}

export default App;
