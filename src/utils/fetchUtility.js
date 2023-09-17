export async function fetchData(url, cacheKey, prop) {
  const cachedData = localStorage.getItem(cacheKey);

  if (cachedData) {
    const parsedData = JSON.parse(cachedData);

    return Promise.resolve(parsedData);
  } else {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((data) => {
        if (prop) {
          localStorage.setItem(cacheKey, JSON.stringify(data[prop]));
        } else {
          localStorage.setItem(cacheKey, JSON.stringify(data));
        }

        setTimeout(() => {
          localStorage.removeItem(cacheKey);
        }, 1800000);
        return data[prop];
      })
      .catch((error) => {
        console.error("Error:", error);
        throw error;
      });
  }
}
