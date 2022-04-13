import { useState, useEffect } from "react";

function AppBody({ openDialog, hideContent }) {
    const { activeElement, setActiveElement } = useEffect(null);

    return <div id="sectionContent" aria-hidden={hideContent} >
        <p>This is a page with some content here<br />
            to open the dialog just click the button bellow.
        </p>
        <input type='text' aria-label="first" name="firstInput" />
        <input type='text' aria-label="second" name="secondInput" />
        <button onClick={openDialog}>Click me!</button>
    </div>;
}

export default AppBody;