import { useState, useEffect } from "react";

interface Address {
  uf?: string;
  localidade?: string;
  bairro?: string;
  logradouro?: string;
  erro?: boolean;
}

const fetchAddress = async (cep: string): Promise<Address | null> => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data: Address = await response.json();
    if (!data.erro) {
      return data;
    } else {
      throw new Error("CEP não encontrado.");
    }
  } catch (error) {
    console.error("Erro ao buscar o CEP:", error);

    return null;
  }
};

const useAddressFromCEP = (cep: string) => {
  const [address, setAddress] = useState<Address | null>(null);

  useEffect(() => {
    if (cep.length === 9) {
      fetchAddress(cep).then((data) => {
        if (data) {
          setAddress(data);
        }
      });
    }
  }, [cep]);

  return address;
};

export default useAddressFromCEP;
