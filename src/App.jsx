import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user, setUser] = useState(null); // Ek user object store karne ke liye initial state null set karte hain

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://jsonplaceholder.typicode.com/todos/1";
        let api = await fetch(url);
        let data = await api.json();
        setUser(data); // Response data ko user state mein set karte hain
        console.log(data); // Data ko console mein display karte hain
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Async function ko call karte hain
  }, []);

  return (
    <>
      <div>{user ? `Title: ${user.title}` : "Loading..."}</div> 
    </>
  )
}

export default App;
