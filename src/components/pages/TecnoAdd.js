export default function TecnoAdd(){

    return (
        <div className="tecnoAdd">

            <h1>add tecno</h1>
            <div>
                <form>
                    <label htmlFor="techno-name">name : </label>
                    <br />
                    <input type="text" name="techno-name" id="techno-name"/>
                    <br/>
                    <label htmlFor="tecno-cat">selectioner une cat  : </label>
                    <br />
                    <select name="tecno-cat" id ="tecno-cat">
                    <option value="">selectioner une cat</option>
                    <option value="front">front</option>
                    <option value="back">back</option>
                    <option value="others">others</option>
                    <br />
                   
                    <br/>
                    <label htmlFor="techno-description">description  : </label>
                    <br />
                    <input type="text" name="techno-description" id="techno-name"/>
                    
                    </select>
                    <br />
                    <input type="submit" value="Add Techno "/> 
                </form>
            </div>
        </div>
    )
}