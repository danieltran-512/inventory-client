import { SERVER_URL } from "../globals";
import { OrderModel } from "../models/OrderModel";
import { PartModel } from "../models/PartModel";

interface Request {
  partItems?: PartModel[];
}

async function getParts(request: Request) {
  const { partItems } = request;

  if (!partItems) {
    return "No items found in cart";
  }

  const URL = `${SERVER_URL}/orders`;

  const data = fetch(URL, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(partItems),
  })
    .then((response) => response.json())
    .then((data: OrderModel) => data)
    .catch((error) => {
      if (error instanceof Error) {
        return error.message;
      } else {
        return "Not found";
      }
    });

  return data;
}

export default getParts;
