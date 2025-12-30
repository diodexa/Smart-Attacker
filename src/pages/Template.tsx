import { useEffect, useState } from "react";


const TemplatePages = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    // const [copied, setCopied] = useState(false)

    const [Templates, setTemlates] = useState(() => {
        const saved = localStorage.getItem("my-templates");
        return saved ? JSON.parse(saved) : ["", "", "", "", "", ""];
        });

    useEffect(() => {
        localStorage.setItem("my-templates", JSON.stringify(Templates));
        }, [Templates]);
        
        const handleChange = (index: number, value: string) => {
            const updated = [...Templates];
            updated[index] = value;
            setTemlates(updated);
        };
        
            
    return (
        <div className="w-full">
            {[0,1,2,3,4,5,6,7,8].map(row => (
                <div className="flex" key={row}>
                {[0,1].map(col => {
                    const index = row * 2 + col;
                    return (
                        <div className="relative w-full">
                            <textarea
                            key={index}
                            value={Templates[index]}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onClick={() => {
                                navigator.clipboard.writeText(Templates[index]);
                                setActiveIndex(index)
                                setTimeout(() => setActiveIndex(null), 500);
                                // setCopied(true);
                                // setTimeout(() => setCopied(false), 500);
                            }}
                            className = {`h-30 w-full border-1 border-solid hover:bg-yellow-200 dark:hover:text-black `}  
                            />
                            {activeIndex===index && (
                                <p className="absolute left-1/2 top-1/2 -translate-1/2 bg-black text-white px-2 py-1 rounded shadow">anjay</p>
                            )}
                        </div>
                    );
                })}
            </div>
            ))}
        </div>
    )
}
export default TemplatePages


