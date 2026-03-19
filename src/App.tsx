import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from './components'
import {
  HomePage,
  AboutPage,
  TimelinePage,
  LeadersPage,
  VideosPage,
  GroupPage
} from './pages'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/leaders" element={<LeadersPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/group" element={<GroupPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
