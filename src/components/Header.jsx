import troll from "../images/troll-face.png"

function Header() {
    return (
        <header>
            <div className="title-container">
                <div className="troll-image-container">
                    <img className="troll-image" src={troll}></img>
                </div>
                <h1 className="title">Meme Generator</h1>
            </div>
            <p className="project-info">React Course - Project 3</p>
        </header>
    )
  }
  
  export default Header;