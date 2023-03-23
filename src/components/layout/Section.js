import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ children }) => {
     return (
          <section className="py-[100px]">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="sm:text-center lg:text-left">
                         <div>{children}</div>
                    </div>
               </div>
          </section>
     );
};

Section.propTypes = {
     children: PropTypes.node.isRequired,
};

export default Section;
