async function getDataFromIds(ids) {
  // Simulate an API call for each ID
  const fetchData = async (id) => {
    // Simulate an API response
    return new Promise((resolve) =>
      setTimeout(() => resolve({ id, name: `User ${id}` }), 1000)
    );
  };

  // Use map to create an array of Promises
  const promises = ids.map((id) => fetchData(id));

  // Wait for all Promises to resolve
  const results = await Promise.all(promises);

  // Proceed once all data has been fetched
  console.log("Fetched data:", results);
  return results;
}

// Example usage
const ids = [1, 2, 3, 4];
getDataFromIds(ids).then((data) => console.log("Final Output:", data));
