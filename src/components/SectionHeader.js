import React from 'react'
import Classes from '../styles/section-header.module.css'

export default function SectionHeader(
     {
          title = 'Title',
          description = 'Destination',
          bgtitle = ''
     }
) {
     return (
          <div className="row">
               <div className="columns-1">
                    <div className={Classes.sectionTitle}>
                         <span className={`${Classes.bgTitleText} text-primary/40`}>{bgtitle === '' ? title : bgtitle}</span>
                         <h2 className='text-dark'>{title}</h2>
                         <p>{description}</p>
                    </div>
               </div>
          </div>
     )
}
