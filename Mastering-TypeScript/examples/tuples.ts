
type rgbTuple = [number, number, number];
const color: rgbTuple = [1, 2, 3];

type HTTPStatus = [number, string];
let resp_status: HTTPStatus = [200, "OK"];
resp_status = [404, "Not Found"];

console.log(resp_status)
const responses: HTTPStatus[] = [
    [200, "OK"],
    [404, "Not Found"],
    [500, "Internal Server Error"],
];
