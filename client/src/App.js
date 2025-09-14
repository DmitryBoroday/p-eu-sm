import { Route, Routes } from 'react-router'
import HomePage from './routes/HomePage'
import CreatePage from './routes/CreatePage'
import NoteDetailPage from './routes/NoteDetailPage'

function App() {
  return (
    <main data-theme='light'>
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/create'
          element={<CreatePage />}
        />
        <Route
          path='/note/:id'
          element={<NoteDetailPage />}
        />
      </Routes>
    </main>
  )
}

export default App
