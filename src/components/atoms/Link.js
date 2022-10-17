import Link from 'next/link'
import React from 'react'

const NextLink = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className="p-2 m-2 cursor-pointer">
        {children}
      </a>
    </Link >
  )
}

export default NextLink
