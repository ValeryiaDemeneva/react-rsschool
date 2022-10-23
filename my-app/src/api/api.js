export const getApi = async () => {
  const url = `https://rickandmortyapi.com/api/character`;
  const result = await fetch(url);
  const data = await result.json();
  return data;
};
