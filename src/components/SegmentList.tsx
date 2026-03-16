
type ChannelSelectorProps = {
  Segment: string;
  onChange: (val: string) => void;
};

const channels = [
  "Live",
  "Email",
  "igdm",
  "Xdm",
  "dmFb",
  "Playstore",
  "VA"
];

const SegmentList = ({Segment,onChange}:ChannelSelectorProps) => {

    return (
        <select 
        className="mr-30 border-2 border-black text-center border-select" 
        value={Segment} 
        onChange={(e) => onChange(e.target.value)}>
            {channels.map(ch=>(
                <option 
                key={ch}
                onClick={()=>onChange(ch)}
                value={ch}
                className={`px-1 py-1 border ${Segment === ch ? "text black" : ""}`}>
                    {ch}
                </option>
            ))}
        </select>
    )
}

export default SegmentList;