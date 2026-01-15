import { useEffect, useState } from 'react';
import List from '../components/SelectItems'
import { DataMandatory } from '../components/Mandatory';
import CopyButton from '../components/CopyButton';
import MandatoryDisplay from '../components/MandatoryDisplay';

import SolusiDisplay from '../components/SolusiDisplay';

const TiketPages = () => {
  const [selectedId, setSelectedId] = useState<number | null>(() => {
    const saved = localStorage.getItem("selectedId");
    return saved ? Number(saved) : null;
  });

  const Mandatory = DataMandatory();
  const selected = Mandatory.find(item => item.id === selectedId);

  const [mandatoryText, setMandatoryText] = useState("");
  const [solusiText, setSolusiText] = useState("");

      useEffect(() => {
        if (selectedId !== null) {
          localStorage.setItem("selectedId", String(selectedId));
        }
      }, [selectedId]);

      useEffect(() => {
        if (!selected) return;
        setMandatoryText(selected.Mandatory);
        const combinedSolusi = [selected.Bracket,selected.Solusi].filter(Boolean).join("\n");
        setSolusiText(combinedSolusi);
      }, [selectedId]);



      useEffect(() => {
        const handleKeyDown = async (e: KeyboardEvent) => {
          if (e.ctrlKey && e.code === "Space") {
            e.preventDefault();

            if (!navigator.clipboard) return;

            const clipboardText = await navigator.clipboard.readText();

            setMandatoryText(prev =>
              prev.replace(/xxxxxx/g, clipboardText)
            );

            setSolusiText(prev =>
              prev.replace(/xxxxxx/g, clipboardText)
            );
          }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
      }, []);




    return (
        <div className='flex flex-col w-screen '>
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
                        onChange={setSolusiText}
                      />
                </div>
                </div>
        </div>
    )
}
export default TiketPages