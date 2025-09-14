import { Link } from 'react-router'
import { PlusIcon } from 'lucide-react'

export default function Navbar() {
  return (
    <header className='bg-base-300 border-b bordr-base-content/10'>
      <div className='mx-auto max-w-6xl p-4'>
        <div className='flex items-center justify-between'>
          <h1 className='font-bold text-3xl text-primary tracking-tight'>
            Test App
          </h1>
          <div className='flex items-center gap-4'>
            <Link
              to={'/create'}
              className='btn btn-primary'
            >
              <PlusIcon className='size-5' />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
