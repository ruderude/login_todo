import React, { useState, useEffect } from "react";
import axios from "axios";

export type PropsMe = {
  id: number
  name: string
  email: string
}

export const Me: React.FC = () => {
  const [me, setMe] = useState<PropsMe | null>(null);

  const str: String = 'こんばんわ';

  enum test {
    YES,
    NO
  }

  type User = {
    id: number,
    name: string,
    bool: test
  }

  const user_1: User = {
    id: 234,
    name: "太郎",
    bool: test.YES
  }

  console.log(user_1);

  useEffect(() => {
    axios.get('/api/me')
      .then(response => {
        console.log(response.data);
        setMe(response.data.data);
      })
      .catch(error => {
        console.log(error)
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