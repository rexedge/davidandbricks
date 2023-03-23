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
                         <span className={Classes.bgTitleText}>{bgtitle === '' ? title : bgtitle}</span>
                         <h2>{title}</h2>
                         <p>{description}</p>
                    </div>
               </div>
          </div>
     )
}
