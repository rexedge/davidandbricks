import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link';

const Button = ({ children, variant, size, disabled, onClick, ariaLabel, href, as }) => {
     const isLink = href !== undefined;
     const buttonClasses = classNames('py-2 px-4 rounded-md font-medium', {
          'bg-blue-500 text-white hover:bg-blue-600': variant === 'primary',
          'bg-gray-300 text-gray-700 hover:bg-gray-400': variant === 'secondary',
          'border border-gray-300 text-gray-700 hover:bg-gray-100': variant === 'outline',
          'text-sm': size === 'small',
          'text-lg': size === 'large',
     });

     if (isLink) {
          return (
               <Link href={href} as={as}>
                    <span className={buttonClasses} onClick={onClick} aria-label={ariaLabel} disabled={disabled}>
                         {children}
                    </span>
               </Link>
          );
     }

     return (
          <button
               className={buttonClasses}
               onClick={onClick}
               aria-label={ariaLabel}
               disabled={disabled}
          >
               {children}
          </button>
     );
};

Button.propTypes = {
     children: PropTypes.node.isRequired,
     variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
     size: PropTypes.oneOf(['small', 'medium', 'large']),
     disabled: PropTypes.bool,
     onClick: PropTypes.func,
     ariaLabel: PropTypes.string.isRequired,
     href: PropTypes.string,
     as: PropTypes.string,
};

Button.defaultProps = {
     variant: 'secondary',
     size: 'medium',
     disabled: false,
     ariaLabel: 'button'
};

export default Button;
