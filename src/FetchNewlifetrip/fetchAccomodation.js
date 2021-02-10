const baseUrlApi =
  process.env.REACT_APP_BASE_URL_API ||
  "http://localhost:55001/api/v1/Activity";
const responseToJson = (response) => response.json();

export default function newlifetripfetchaccomodation(route) {
  return () => {
    return fetch(`${baseUrlApi}${route}`).then(responseToJson);
  };
}
