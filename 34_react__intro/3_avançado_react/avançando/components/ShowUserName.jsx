import { useState } from "react"

const ShowUserName = (props) => {
  return (
    <div> 
        <h2>o nome do usuario é: {props.name}</h2>
    </div>
  );
};

export default ShowUserName