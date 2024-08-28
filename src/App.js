import React,{useState,useEffect} from 'react'

const App = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    const fetchData = async()=>{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const result = await response.json();
      setData(result)
    };
    fetchData();
  },[])
  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.slice(0,5).map((item)=>(
          <li key = {item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App