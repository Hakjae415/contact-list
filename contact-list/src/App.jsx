import { useState } from 'react'
import ContactList from './components/ContactList'
import './App.css'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>{
      
    }
      <ContactList/>
    </>
  )
}

export default App
