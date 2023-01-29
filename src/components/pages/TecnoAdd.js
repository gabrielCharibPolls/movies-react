export default function TecnoAdd(){

    return (
        <div className="tecnoAdd">

            <h1>add tecno</h1>
            <div>
                <form>
                    <label htmlFor="techno-name">name : </label>
                    <br />
                    <input type="text" name="techno-name" id="techno-name"/>
                    <br />
                    <input type="submit" value="Add Techno "/>
                </form>
            </div>
        </div>
    )
}