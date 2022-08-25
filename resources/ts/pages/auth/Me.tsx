import React, { useState, useEffect } from "react";
import axios from "axios";

export type Me = {
  id: number
  name: string
  email: string
}

export const Me = () => {
  const [me, setMe] = useState<Me>();

  useEffect(() => {
    axios.get<Me>('/api/me')
      .then(response => {
        console.log(response.data);
        setMe(response.data.data);
      })
      .catch(error => {
        console.log(error)
        setMe();
      })
  }, []);

  return (
    (!!me) ?
      <>
      <h2>Me</h2>
      <div>
        {me?.id}
      </div>
      <div>
        {me?.name}
      </div>
      <div>
        {me?.email}
      </div>
      </>
      :
      <>
      <h2>Me</h2>
      <div>
        ログインしていません。
      </div>
      </>
  );
};