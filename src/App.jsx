import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/users")
    .then((res) => {
      setUsers(res.data.data)
    });
  }, [])

  return (
    <section className='bg-slate-300 p-20'>
      <h1 className='text-center text-2xl text-green-600 mb-10 font-bold'>Meet with Our Team</h1>
      <div className="text-white-800 text-lg flex flex-row flex-wrap justify-center items-center gap-4">
        {users &&
          users.map((user, index) => {
            return (
                <div key={index} className="bg-green-400 p-10 w-1/3 text-center">
                  <h1>Name : {user.name}</h1>
                  <h4>Username : {user.username}</h4>
                  <p>Email : {user.email}</p>
                </div>
            );
          })}
      </div>
    </section>
  );
}

export default App
