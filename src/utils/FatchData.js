export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  },
};
export const fetchData = async (url, option) => {
  console.log("Fetching Data...");
  console.log("URL:", url);
  console.log("Options:", option);

  const response = await fetch(url, option);
  const data = await response.json();

  // Debugging response data
  console.table(data);

  return data;
};
