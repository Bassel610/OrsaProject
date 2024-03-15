function DivCol () {
    let zindex = {
        "Zindex": -1
    }
    return (
        <>
            <div className="DivCol">
                <div className="DivCol1" style={zindex}></div>
                <div className="DivCol2" style={zindex}></div>
            </div>
        </>
    )
}
export default DivCol;