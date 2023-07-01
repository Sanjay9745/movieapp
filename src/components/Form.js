import React, { useState } from "react";
import Table from "./Table";

function Form() {
    const [directorName,setDirectorName] = useState("")
    const [movieName,setMovieName] = useState("");
    const [data,setData] = useState([{
        directorName:"",
        movieName:""
    }])
    function HandleAdd(e){
        e.preventDefault();
       
        setData((prev)=>[...prev,{directorName,movieName}])
        setDirectorName("")
        setMovieName("")
      
    }
  return (
    <>
      <form>
        <input type="text"  value={directorName} placeholder="Enter Director Name" onChange={(e)=>setDirectorName(e.target.value)}/>
        <input type="text" value={movieName} placeholder="Enter Movie Name" onChange={(e)=>setMovieName(e.target.value)}/>
        <button onClick={HandleAdd}>Add</button>
      </form>
      <Table data={data} setData={setData}/>
    </>
  );
}

export default Form;
