// const url = 'https://open-weather13.p.rapidapi.com/city/landon';
const options = {
  method: 'GET',
  headers: {
      'X-RapidAPI-Key': '0a8bbc4472msha8d77ff6422def1p1216bdjsna631f39b09ad',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
}

export const getWeather = async (city) => {
  try {
    const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city , options);

    const result = await response.json();

    return result;

  } catch (error) {
    console.error(error);
  }
};
