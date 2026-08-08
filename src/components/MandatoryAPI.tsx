import { useEffect, useState } from "react";
import { getMandatory, type MandatoryData } from "./MandatoryService";

export const DataMandatory = () => {
  const [mandatory, setMandatory] = useState<MandatoryData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMandatory = async () => {
      try {
        const data = await getMandatory();
        setMandatory(data);
      } catch (error) {
        console.error("Gagal mengambil data mandatory:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMandatory();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(mandatory);

  return (
    <div>
      {mandatory.map((item) => (
        <div key={item.id}>
          {item.case}
        </div>
      ))}
    </div>
  );
};