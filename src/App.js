import { useState } from "react";
import DialogBox from "./DialogBox";
import AppBody from "./AppBody";
import './App.css';

function App() {
  const [showDialog, setShowDialog] = useState(false);

  const openDialog = () => {
    setShowDialog(true);
  }

  const closeDialog = () => {
    setShowDialog(false);
  }

  return (
    <section className="App">
      <AppBody openDialog={openDialog} hideContent={showDialog} />
      <DialogBox closeDialog={closeDialog} isOpen={showDialog}>
        <form method="dialog">
        <p>
          Hi there ;)
          <br />
          You clicked the dialog button
        </p>
        <input type='text' aria-label="first" name="firstInput" />
        <input type='text' aria-label="second" name="secondInput" />
        <button onClick={closeDialog}>GoodBye</button>
        </form>
      </DialogBox>
    </section>
  );
}

export default App;
