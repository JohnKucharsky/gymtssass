export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8a56cf824emsha76608db649e7fap1be93bjsn7a6853e3ca56",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "8a56cf824emsha76608db649e7fap1be93bjsn7a6853e3ca56",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url: string, options: any) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
