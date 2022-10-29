import React from 'react'

export function Button({ children, className, ...rest }:any) {
  return (
    <button
      type="button"
      className={`first-line:inline-flex items-center px-4 py-2 border  text-sm font-medium rounded-md text-gray-700  ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
