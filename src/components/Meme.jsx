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
            <button>Get a new meme image 🖼</button>
        </main>
    )
  }
  
  export default Meme;