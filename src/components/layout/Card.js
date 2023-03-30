import React from 'react'

export default function Card({
     children,
     p = '6',
     bg = 'light'
}) {
     return (
          <div className={`rounded overflow-hidden shadow-md m-2 p-${p} bg-${bg}`}>
               {children}
          </div>
     )
}
