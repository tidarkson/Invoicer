import React from 'react'

export default function Footer ({name, address, website, email, phone, bankAccount, bankName}) {
    return (
        <div>
            <footer className='footer border-t-2 border-gray-200 pt-5'>
                <ul className="flex flex-wrap items-center justify-center">
                    <li><span className="font-bold">Your Name:</span>{name}</li>
                    <li><span className="font-bold">Email:</span> {email}</li>
                    <li><span className="font-bold">Phone Number:</span> {phone}</li>
                    <li><span className="font-bold">Bank:</span> {bankName}</li>
                    <li><span className="font-bold">Account Number:</span> {bankAccount}</li>
                    <li><span className="font-bold">Account holder name:</span> {name}</li>
                    <li><span className="font-bold">Website</span> {website}</li>

                </ul>
            </footer>
        </div>
    )
}
