import Link from 'next/link'
import React from 'react'

type Props = {
  tags: string[]
}

const Tag = (props: Props) => {
  const { tags } = props

  return (
    <div className="mx-4">
      <section className="lg:w-1/2 mb-8 mx-auto bg-gray-50 rounded-md p-5 shadow-lg hover:shadow-none hover:-translate-y-1 duration-300 transition-all">
        <h2 className="text-lg font-medium text-gray-900 mb-4">タグ検索</h2>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag: string, index: number) => (
            <Link href={`/posts/tag/${tag}/page/1`} key={index}>
              <span className="px-2 py-1 text-xs font-medium text-white bg-sky-900 rounded-full cursor-pointer hover:bg-sky-800 transition duration-300">
                {tag}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Tag
