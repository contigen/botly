"use client"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/react"
import { useCompletion } from "ai/react"

export default function SloganGenerator() {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion()

  return (
    <div className='flex flex-col w-full max-w-md py-24 mx-auto stretch'>
      <form onSubmit={handleSubmit}>
        <input
          className='fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl'
          value={input}
          placeholder='Describe your business...'
          onChange={handleInputChange}
        />
        <Button type='submit'>Submit</Button>
      </form>
      <div className='my-6 whitespace-pre-wrap'>{completion}</div>
    </div>
  )
}
