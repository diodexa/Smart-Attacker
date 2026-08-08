const API_URL ="https://script.google.com/macros/s/AKfycbwLZRhw_bG0boTSFmV3X4EDrNCgew4EdtR6-UPrZrpTBWIyn1z_jq3dt_nRPC-D9QKI/exec";

export interface MandatoryData {
  id: number;
  case: string;
  bracket: string;
  solusi: string;
  solusiemail: string;
  mandatory: string;
}

interface MandatoryResponse {
  success: boolean;
  data: MandatoryData[];
  message?: string;
}

export const getMandatory = async (): Promise<MandatoryData[]> => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: MandatoryResponse = await response.json();

    if (!result.success) {
      throw new Error(result.message || "Gagal mengambil data mandatory");
    }

    return result.data;
  } catch (error) {
    console.error("Gagal mengambil data mandatory:", error);
    throw error;
  }
};