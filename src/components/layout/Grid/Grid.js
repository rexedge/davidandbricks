import React from 'react'

export default function Grid({
     children,
     md = '2',
     lg = '3',
     gap = '4'
}) {
     return (
          <div className={`w-full grid grid-cols-1 md:grid-cols-${md} lg:grid-cols-${lg} gap-${gap}`}>
               {children}
          </div>
     )
}
