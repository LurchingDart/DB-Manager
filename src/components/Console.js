import React from 'react'
import "../styles/Console.css"

function Console() {
    return (
        <div className="consoleBG">
            <div className="consoleDisplay">
                <p className="consoleDisplayContentStatus"></p>
                <p className="consoleDisplayContentText"></p>
            </div>
        </div>
    )
}

export default Console