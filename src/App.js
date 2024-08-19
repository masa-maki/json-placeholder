import React from 'react';
import axios from 'axios';
import './style.css';

export default function App() {
  const onClickUsers = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const onClickUser1 = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users/3')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>user id=1</button>
    </div>
  );
}
