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

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => {
            return{
                ...prevMeme,
                [name] : value
            }
        })
    }

    console.log("top : " + meme.topText, " bottom : " + meme.bottomText);

    return (
        <main>
            <div className="inputs-container">
                <div>
                    <label htmlFor="input-top-text" className="input-label">Top text</label>
                    <input 
                        type="text" 
                        id="input-top-text"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </div>
                <div>
                    <label htmlFor="input-bottom-text" className="input-label">Bottom text</label>
                    <input 
                        type="text" 
                        id="input-bottom-text"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </div>
            </div>
            <button onClick={getMemeImage}>Get a new meme image 🖼</button>
            <div className="meme-image-container">
                {/* <img style={{display: (memeImage === "") ? "none" : "block"}}className="meme-image" src={memeImage}></img> */}
                {meme.randomImage != "" && <img className="meme-image" src={meme.randomImage}></img>}
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
  }
  
  export default Meme;