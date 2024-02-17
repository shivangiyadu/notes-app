import image from "../assets/image-removebg-preview 1 (1).png";


const RightSide = () => {
  return (
    <div className="main-div">
      <div className="image-div">
      <img className="notes-logo" alt="my-notes" src={image}/>
        
        <h1 className="heading-right">POCKET NOTES</h1>
        <p className="content">Send and receive messages without keeping your phone online.<br/>
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
       </div>

    </div>
  )
}

export default RightSide;