import { useEffect, useState } from "react";


const TemplatePages = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const [Templates, setTemlates] = useState(() => {
        const saved = localStorage.getItem("my-templates");
        return saved ? JSON.parse(saved) : Array(22).fill("");
    });

    useEffect(() => {
        const syncTemplates = () => {
            const saved = localStorage.getItem("my-templates");
            if (saved) {
            setTemlates(JSON.parse(saved));
            }
        };

        window.addEventListener("templates-updated", syncTemplates);
        return () =>
            window.removeEventListener("templates-updated", syncTemplates);
    }, []);

    useEffect(() => {
        localStorage.setItem("my-templates", JSON.stringify(Templates));
    }, [Templates]);
        
    const handleChange = (index: number, value: string) => {
        const updated = [...Templates];
        updated[index] = value;
        setTemlates(updated);
    };

        
            
    return (
        <div className="w-full ">
            {[0,1,2,3,4,5,6,7,8,9,10].map(row => (
                <div className="flex" key={row}>
                {[0,1].map(col => {
                    const index = row * 2 + col;
                    const shortcutLabel: Record<number, string> = {
                        0: "F1", 2: "F2", 4: "F3",1: "F4", 3: "F6" , 5:"F7"};
                    return (
                        <div className="relative w-full" key={index}>
                            <textarea
                            value={Templates[index]}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onClick={(e) => {
                                if (!e.altKey) return;
                                navigator.clipboard.writeText(Templates[index]);
                                setActiveIndex(index)
                                setTimeout(() => setActiveIndex(null), 500);
                            }}
                            className = {`h-30 w-full p-1 border-1 border-solid hover:bg-yellow-200 hover:text-black `}  
                            />
                            {shortcutLabel[index] && (
                                <span className="
                                pointer-events-none
                                absolute
                                top-1/2 left-1/2
                                -translate-x-1/2 -translate-y-1/2
                                text-6xl font-black
                                text-black/10
                                select-none
                                label
                                ">
                                {shortcutLabel[index]}
                                </span>
                            )}
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


