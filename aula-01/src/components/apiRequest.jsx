const apiRequest = async (url = "", optionsObj = null, error = null) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw Error("Please reload the app");
  } catch (err) {
    error = err.message;
  } finally {
    return error;
  }
}

export default apiRequest;