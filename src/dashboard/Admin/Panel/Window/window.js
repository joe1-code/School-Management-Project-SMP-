import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import './window.css';

function PopupWindow() {

  const [Open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleopen = () => {
    setOpen(true);
  }

  const handleclose = () => {
    setOpen(false);
  }
  return (
    <div id="contain">
      <div id="div-but">
        <button variant="outlined" id="window-but"
          onClick={() => { window.location.replace("/regwindow") }} >
          Add Window
        </button>
      </div>


    </div>

  )
}
export default PopupWindow;