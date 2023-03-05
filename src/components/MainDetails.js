import React from 'react'

export default function MainDetails({name, address}) {
  return (
    <div>
        <section className="flex flex-col items-end justify-end">
        <h2 className="text-xl uppercase font-bold md:text-4xl">{name}</h2>
        <p>{address}</p>
      </section>
    </div>
  )
}
