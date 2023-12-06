import { SERVER_URL } from "../globals";
import { PartModel } from "../models/PartModel";

async function getParts() {
  const URL = `${SERVER_URL}/parts`;

  const data = fetch(URL, { method: "GET" })
    .then((response) => response.json())
    .then((data: PartModel[]) => data)
    .catch((error) => {
      if (error instanceof Error) {
        console.log(error);
        return error.message;
      } else {
        return "Not found";
      }
    });

  return data;
}

export default getParts;
