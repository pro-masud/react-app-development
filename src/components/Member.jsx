const Member = ({member}) => {
  return (
    <div className="member">
        <img src={member.photo} alt="mage" />
        <h2>{member.name}</h2>
        <h5>{member.skills}</h5>
    </div>
  )
}

export default Member;