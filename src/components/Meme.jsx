import memesData from "../memesData"

function Meme() {
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
            <button onClick={getMemeInfo}>Get a new meme image 🖼</button>
        </main>
    )
  }

  function getMemeInfo() {
    const memesArray = memesData.data.memes;
    const memeIndex = Math.floor(Math.random() * memesArray.length);
    const meme = memesArray[memeIndex];
    const id = meme.id;
    const url = meme.url;
    console.log("id = " + id + ", url = " + url);
  }
  
  export default Meme;