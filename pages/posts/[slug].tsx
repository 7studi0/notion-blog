import React from 'react'
import { getAllPosts, getSinglePost } from '../../lib/notionAPI'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import Link from 'next/link'

export const getStaticPaths = async () => {
  const allPosts = await getAllPosts()
  const paths = allPosts.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug)

  return {
    props: {
      post,
    },
    revalidate: 10,
  }
}

const Post = ({ post }) => {
  const tagClassName =
    'inline-block px-2 py-1 text-white rounded-full mr-2 mt-2 font-medium transition-all duration-300 ease-in-out transform hover:scale-105 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:from-purple-600 hover:to-blue-500'

  return (
    <section className="container mx-auto mt-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-medium">{post.metadata.title}</h2>
        <div className="border-b-2 w-1/3 mt-1 border-sky-900"></div>
        <p className="text-gray-500 mt-1">Posted on {post.metadata.date}</p>
        <div className="flex flex-wrap mt-4">
          {post.metadata.tags.map((tag: string, index: number) => (
            <Link key={index} href={`/posts/tag/${tag}/page/1`}>
              <div className={tagClassName}>{tag}</div>
            </Link>
          ))}
        </div>
        <ReactMarkdown
          className="mt-10 text-gray-700 leading-8"
          components={{
            code({ node, inline, className, children }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  className="p-4 rounded-lg overflow-auto"
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code>{children}</code>
              )
            },
          }}
        >
          {post.markdown}
        </ReactMarkdown>
        <div className="mt-16">
          <Link href="/">
            <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:from-purple-600 hover:to-blue-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              ← Back to Home
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Post
