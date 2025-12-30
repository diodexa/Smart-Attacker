import { useEffect, useState } from 'react';
import List from '../components/SelectItems'
import { DataMandatory } from '../components/Mandatory';
import CopyButton from '../components/CopyButton';
import MandatoryDisplay from '../components/MandatoryDisplay';

import SolusiDisplay from '../components/SolusiDisplay';

const TiketPages = () => {
    const [selectedId, setSelectedId] = useState<number | null>(()=> {
         const saved = localStorage.getItem("selectedId");
        return saved ? Number(saved) : null;
    });

      const Mandatory = DataMandatory();
      const selected = Mandatory.find(item => item.id === selectedId);

      useEffect(() => {
    if (selectedId !== null) {
      localStorage.setItem("selectedId", String(selectedId));
    }
  }, [selectedId]);


    return (
        <div className='flex flex-col w-screen '>
            <List onSelect={(id) => setSelectedId(id)} />
                <div className='flex gap-2'>
                <div className='w-full h-dvh'>
                    {selected && <CopyButton text={selected.Mandatory} />}
                    <MandatoryDisplay selectedId={selectedId} />
                </div>
                <div className='w-full  '>
                    {selected && <CopyButton text={selected.Solusi} />}
                    <SolusiDisplay selectedId={selectedId} />
                </div>
                </div>
        </div>
    )
}
export default TiketPages