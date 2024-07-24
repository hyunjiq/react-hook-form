import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API 호출 함수    // 비동기함수( 값이 올 떄까지 대기하느 함수 )async
    const fetchUsers = async () => {
      try {             // await  키워드가 반드시 있다 (다 채워질 떄까지 저장하지 않음)
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        // 외부데이터는 이미 공개형이므로 get으로 가져옴 속도가 빠름, 내부데이터는 post
        // 외부데이터 다 올때까지 대기 response <-전부 저장완료후 실행
        setUsers(response.data); //랜더링 함수 user에 저장되고 있다
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUsers(); //비동기 함수 실행
  }, []); //1회실행이라 useEffect


  return (
    <div className="App">
      <h1>Users</h1>
        { error && <p>Error: {error.message}</p>}
        { loading ? <p>Loading...</p> :
        <ul>
            {users.map(user => (
            <li key={user.id}>
                <p>이름 :{user.name}</p>
                <p>이메일 :{user.email}</p>
                <p>주소 :{`${user.address.street}, ${user.address.suite}, ${user.address.city}`}</p>
            </li>
            ))}
        </ul>
        }
    </div>
  );
}

export default App;
