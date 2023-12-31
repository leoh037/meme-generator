import {useState} from 'react'
import memesData from "../memesData"


function Meme() {

    const[meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage() {
        setMeme(prevMeme => ({
            ...prevMeme, 
            randomImage: getImageURL()
        }))
    }

    function getImageURL() {
        const memesArray = allMemeImages.data.memes;
        const memeIndex = Math.floor(Math.random() * memesArray.length);
        const meme = memesArray[memeIndex];
        const url = meme.url;
        return url;
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
                {/* <img style={{display: (memeImage === "") ? "none" : "block"}}className="meme-image" src={memeImage}></img> */}
                {meme.randomImage != "" && <img className="meme-image" src={meme.randomImage}></img>}
            </div>
        </main>
    )
  }
  
  export default Meme;