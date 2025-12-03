import { useState } from 'react'
import './App.css'
import List from './components/SelectItems'
import MandatoryDisplay from './components/MandatoryDisplay'
import CopyButton from './components/CopyButton';
import { DataMandatory } from './components/Mandatory';




function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  
  const Mandatory = DataMandatory();
  const selected = Mandatory.find(item => item.id === selectedId);

  return (
    <div className='flex items-center justify-center'>
      <List onSelect={(id) => setSelectedId(id)} />
      <MandatoryDisplay selectedId={selectedId} />
      {selected && <CopyButton text={selected.Mandatory} />}
    </div>
    
  )
}

export default App
