import Link from 'next/link'
import React from 'react'
import { getPageLink } from '../../lib/blog-helper'

interface Props {
  numberOfPage: number
  tag: string
}

const Pagination = (props: Props) => {
  const { numberOfPage, tag } = props

  let pages: number[] = []
  for (let i = 1; i <= numberOfPage; i++) {
    pages.push(i)
  }

  return (
    <section className="flex justify-center items-center mt-8 mb-16">
      <ul className="flex items-center">
        {pages.map(page => (
          <li
            key={page}
            className="mx-1 h-10 w-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-900 hover:bg-sky-900 hover:text-gray-100 transition duration-300"
          >
            <Link href={getPageLink(tag, page)}>{page}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Pagination
