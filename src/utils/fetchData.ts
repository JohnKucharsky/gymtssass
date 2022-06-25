export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9a6d3f0137mshae6b39cf3d23b20p1c27e9jsne7385c2cc8b1",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "9a6d3f0137mshae6b39cf3d23b20p1c27e9jsne7385c2cc8b1",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url: string, options: any) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
