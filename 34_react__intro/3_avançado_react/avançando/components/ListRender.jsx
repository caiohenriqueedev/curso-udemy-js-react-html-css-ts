import { useState } from "react"

const ListRender = () => {
  const[list] = useState(["Matheus", "Pedro", "Josias"]);

  return <div>
    <ul>
      {list.map((item)=>(
        <li>{item}</li>
      ))};
    </ul>
    <div>ListRender</div>
  )
  </div>;
};

export default ListRender;