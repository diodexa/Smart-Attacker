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
      const [mandatoryText, setMandatoryText] = useState("");
      const [solusiText, setsolusiText] = useState("");

      useEffect(() => {
        if (selectedId !== null) {
          localStorage.setItem("selectedId", String(selectedId));
        }
      }, [selectedId]);

      useEffect(() => {
        if (!selected) return;
        setMandatoryText(selected.Mandatory);
      }, [selectedId]);

      useEffect(() => {
        if (!selected) return;
        setsolusiText(selected.Solusi);
      }, [selectedId]);

      const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();

        const droppedText = e.dataTransfer.getData("text/plain");
        if (!droppedText) return;

        setMandatoryText(prev =>
          prev.replace(/xxxxxx/g, droppedText)
        );

        setsolusiText(prev =>
          prev.replace(/xxxxxx/g, droppedText)
        );
      };

      const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
      };

    return (
        <div className='flex flex-col w-screen '
        onDrop={handleDrop}
        onDragOver={handleDragOver}>
            <List onSelect={(id) => setSelectedId(id)} />
                <div className='flex gap-2'>
                <div className='w-full'>
                    {selected && <CopyButton text={mandatoryText} />}
                    <MandatoryDisplay
                      key={selectedId}         
                      selectedId={selectedId}
                      value={mandatoryText}     
                      onChange={setMandatoryText}
                    />
                </div>
                <div className='w-full  '>
                    {selected && <CopyButton text={solusiText} />}
                    <SolusiDisplay 
                      key={selectedId}         
                      value={solusiText}     
                      onChange={setsolusiText}
                    />
                </div>
                </div>
        </div>
    )
}
export default TiketPages