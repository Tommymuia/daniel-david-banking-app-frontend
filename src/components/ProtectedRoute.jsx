import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

export default function ProtectedRoute({ children }) {
  const { user } = useAuth()

  if (!user) return <Navigate to="/login" replace />

  return (
    <div className="flex min-h-screen bg-[#0A192F]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}