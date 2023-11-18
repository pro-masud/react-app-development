import Member from "./Member";
import {data} from "../faker/data"; 
  console.log(data);
const Team = () => {
  return (
    <>
      <div className="team-area">
        { data.map((item, index) => (
            <Member  member={item} key={index} />
        ))}
      </div>
    </>   
  )
}

export default Team;