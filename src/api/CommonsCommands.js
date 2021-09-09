import axios from "axios"

console.log('Whats that env?', process.env.NODE_ENV);
let HOST;
if (process.env.NODE_ENV !== "production") {
    HOST = "http://localhost:5000/api/";
}
// else {
//     HOST =FILL IN DEPLOYED URL WHEN THIS WORKS
// }

export default axios.create({
    baseURL: HOST,
    headers: {
        "Content-type": "application/json",
    },
});