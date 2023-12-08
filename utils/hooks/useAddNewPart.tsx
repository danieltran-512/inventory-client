import React from "react";
import { SERVER_URL } from "../globals";
import { PartModel } from "../models/PartModel";

export default function useAddNewPart() {
  const [data, setData] = React.useState<PartModel>();
  const [error, setError] = React.useState<string>();
  const [loading, setLoading] = React.useState(false);

  const URL = `${SERVER_URL}/parts`;

  const addNewPart = async (input: PartModel) => {
    setLoading(true);
    fetch(URL, {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then(async (resp) => {
        if (resp.status !== 200) {
          const errorRes = await resp.json();

          return setError(errorRes?.message);
        }
        return resp.json();
      })
      .then((res: PartModel) => setData(res))
      .catch((error) => {
        console.log(error);
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Not Found");
        }
      });
    setLoading(false);
  };

  return { data, error, loading, addNewPart };
}
