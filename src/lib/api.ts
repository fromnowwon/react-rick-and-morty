const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchCharacters = async (page: number) => {
  const response = await fetch(`${BASE_URL}/character?page=${page}`);
  const data = response.json();

  console.log(data);
  return data;
};
