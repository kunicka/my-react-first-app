import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingOne() {
  const[post, setPost] = useState({ });
  const [id,setId] = useState(1)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div>
      <h3> 
      <input type="text" value={id} onChange={e => setId(e.target.value)}/>
       <div> {post.title}</div>
      </h3>
    </div>
  );
}

export default DataFetchingOne;
