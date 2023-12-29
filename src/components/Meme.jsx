import {useState} from 'react'
import memesData from "../memesData"


function Meme() {

    const[memeImage, setMemeImage] = useState("");

    function getMemeImage() {
        const url = getImageURL();
        setMemeImage(url)
    }

    return (
        <main>
            <div className="inputs-container">
                <div>
                    <label className="input-label">Top text</label>
                    <input type="text" id="input-top-text"></input>
                </div>
                <div>
                    <label className="input-label">Bottom text</label>
                    <input type="text" id="input-bottom-text"></input>
                </div>
            </div>
            <button onClick={getMemeImage}>Get a new meme image 🖼</button>
            <div className="meme-image-container">
                <img className="meme-image" src={memeImage}></img>
            </div>

        </main>
    )
  }

  function getImageURL() {
    const memesArray = memesData.data.memes;
    const memeIndex = Math.floor(Math.random() * memesArray.length);
    const meme = memesArray[memeIndex];
    const url = meme.url;
    return url;
  }
  
  export default Meme;