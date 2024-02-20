import {useState, useEffect} from 'react'


function Meme() {

    const[meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    const [allMemes, setallMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(resObj => setallMemes(resObj.data.memes))
    }, [])

    function handleEvent(event) {
        const {name, value, type} = event.target
        setMeme(prevMeme => ({
            ...prevMeme, 
            [name]: type === "text" ? value : getImageURL()
        }))
    }

    function getImageURL() {
        const memeIndex = Math.floor(Math.random() * allMemes.length);
        const meme = allMemes[memeIndex];
        const url = meme.url;
        return url;
    }

    return (
        <main>
            <div className="inputs-container">
                <div>
                    <label htmlFor="input-top-text" className="input-label">Top text</label>
                    <input 
                        type="text" 
                        disabled={meme.randomImage == ""}
                        id="input-top-text"
                        name="topText"
                        onChange={handleEvent}
                        value={meme.topText}
                    />
                </div>
                <div>
                    <label htmlFor="input-bottom-text" className="input-label">Bottom text</label>
                    <input 
                        type="text" 
                        disabled={meme.randomImage == ""}
                        id="input-bottom-text"
                        name="bottomText"
                        onChange={handleEvent}
                        value={meme.bottomText}
                    />
                </div>
            </div>
            <button name="randomImage" onClick={handleEvent}>Get a new meme image 🖼</button>
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