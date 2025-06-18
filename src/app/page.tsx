'use client'

import { Clipboard } from 'lucide-react'
import { useEffect, useRef } from 'react'

const GoApotikUILibrary = () => {
  const copyRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/@goapotik/ui@latest/dist/ui.umd.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleCopy = () => {
    const text = 'npm install @goapotik/ui'
    navigator.clipboard.writeText(text)
    copyRef.current!.classList.add('animate-pulse', 'bg-green-500', 'text-white')
    setTimeout(() => {
      copyRef.current!.classList.remove('animate-pulse', 'bg-green-500', 'text-white')
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to GoApotik UI Library</h1>
        <div className="mb-8 mx-auto flex flex-col items-center">
          To get started, please run the following command in your terminal:
          <br />
          <button
            ref={copyRef}
            onClick={handleCopy}
            className="bg-gray-100 p-2 rounded-md flex items-center space-x-2 hover:bg-gray-200 mt-4"
          >
            <Clipboard size={20} />
            <code className="bg-gray-100 p-2 rounded-md">npm install @goapotik/ui</code>
          </button>
        </div>
        <p className="mb-8">
          By using GoApotik UI Library, you agree to our{' '}
          <a
            href="https://goapotik.com/terms-and-conditions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Terms and Conditions
          </a>
          .
        </p>
        <p className="text-center">
          &copy; {new Date().getFullYear()} GoApotik. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default GoApotikUILibrary
