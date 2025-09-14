import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import toast from 'react-hot-toast'
import api from '../lib/axios'
// import axios from 'axios'

export default function CreatePage() {
  const [title, setTitle] = useState()
  const [content, setContent] = useState()
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title.trim() || !content.trim()) {
      toast.error('All fields are required')
      return
    }

    setLoading(true)

    try {
      await api.post('/notes', {
        title,
        content,
      })
      toast.success('Note created successfully!')
      navigate('/')
    } catch (error) {
      console.log('Error creating note', error)
      if (error.response.status === 429) {
        toast.error("Slow down! You're creating notes too fast", {
          duration: 4000,
          icon: '💀',
        })
      } else {
        toast.error('Failed to create note')
      }
    } finally {
      setLoading(false)
    }

    console.log(title)
    console.log(content)
  }

  return (
    <div className='min-h-screen flex flex-col justify-center items-center select-none'>
      <div className='w-[96%] lg:max-w-3xl bg-zinc-200 rounded-xl shadow-lg p-8'>
        <Link
          to={'/'}
          className='flex items-center gap-1 p-2 rounded-md bg-zinc-200 font-bold w-fit mb-10'
        >
          <ArrowLeft />
          Back to notes
        </Link>

        <div>
          <h2 className='text-3xl font-bold mb-6'>Create new note</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-control mb-4'>
              <label className='label'>
                <span className='label-text'>Title</span>
              </label>
              <input
                type='text'
                placeholder='Note Title'
                className='input input-bordered'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className='form-control mb-4'>
              <label className='label'>
                <span className='label-text'>Content</span>
              </label>
              <textarea
                placeholder='Write your note here...'
                className='textarea textarea-bordered h-32'
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            <div className='card-actions justify-end'>
              <button
                type='submit'
                className='btn btn-primary'
                disabled={loading}
              >
                {loading ? 'Creating...' : 'Create Note'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
