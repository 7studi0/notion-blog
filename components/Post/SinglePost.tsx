import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  description: string
  date: string
  tags: string[]
  slug: string
  isPaginationPage: boolean
}

const SinglePost = (props: Props) => {
  const { title, description, date, tags, slug, isPaginationPage } = props

  return (
    <>
      <section
        className={`${
          isPaginationPage ? 'mb-4' : 'lg:w-1/2 mb-8'
        } mx-auto rounded-md p-5 bg-gray-50 hover:bg-gray-100 shadow-lg transform hover:-translate-y-1 transition duration-300`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-medium text-gray-900">
            <Link href={`/posts/${slug}`}>{title}</Link>
          </h2>
          <div className="text-gray-400">{date}</div>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap">
          {tags.map((tag: string, index: number) => (
            <Link
              href={`/posts/tag/${tag}/page/1`}
              key={index}
              className="mr-2 mb-2"
            >
              <span className="px-2 py-1 text-xs font-medium text-white bg-sky-900 rounded-full cursor-pointer hover:bg-sky-800 transition duration-300">
                {tag}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default SinglePost
