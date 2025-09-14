import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import { Link } from 'react-router'
import { formatDate } from '../lib/utils'
import api from '../lib/axios'
import toast from 'react-hot-toast'

export default function NoteCard({ note, setNotes }) {
  const handleDelete = async (e, id) => {
    e.preventDefault() // prevent navigation

    if (!window.confirm('Are you shure you wnat to delete this message?'))
      return

    try {
      await api.delete(`/notes/${id}`)
      setNotes((prev) => prev.filter((note) => note._id !== id)) // update ui when delet card
      toast.success('Note deleted successfully')
    } catch (error) {
      console.log('Error in handleDelete', error)
      toast.error('Failed to delete note')
    }
  }

  return (
    <Link
      to={`/note/${note._id}`}
      className='p-4 rounded-2xl bg-zinc-800 shadow-lg text-white hover:shadow-2xl'
    >
      <h2 className='font-bold text-3xl mb-2'>{note.title}</h2>
      <h3 className='font-semibold text-lg'>{note.content}</h3>
      <div className='flex items-center justify-between mt-6'>
        <span className='text-sm'>{formatDate(new Date(note.createdAt))}</span>
        <div className='flex items-center gap-2'>
          <PenSquareIcon className='size-4' />
          <button
            onClick={(e) => handleDelete(e, note._id)}
            className='btn btn-ghost btn-xs text-error'
          >
            <Trash2Icon className='size-4' />
          </button>
        </div>
      </div>
    </Link>
  )
}
