import { useState } from 'react'
import './App.css'
import List from './components/SelectItems'
import MandatoryDisplay from './components/MandatoryDisplay'
import CopyButton from './components/CopyButton';




function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selected = Mandatory.find(item => item.id === selectedId);

  return (
    <div className='flex items-center justify-center'>
      <List onSelect={(id) => setSelectedId(id)} />
      <MandatoryDisplay selectedId={selectedId} />
      <CopyButton  text={selected}/>
    </div>
    
  )
}

export default App
