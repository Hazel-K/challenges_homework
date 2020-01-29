// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
    onMouseEnter: e => {
        e.target.textContent = "The Mouse Is Here!";
        e.target.style.color = colors[0];
    },
    onMouseLeave: e => {
        e.target.textContent = "The Mouse Is Gone!";
        e.target.style.color = colors[1];
    },
    onResize: e => {
        e.target.document.body.children[0].textContent = "You Just Resized!";
        e.target.document.body.children[0].style.color = colors[2];
    },
    onRightClick: e => {
        e.target.querySelector("h2").textContent = "That Was a Right Click!";
        e.target.querySelector("h2").style.color = colors[4];
    }
};

const text = document.querySelector("h2");
text.addEventListener("mouseenter", superEventHandler.onMouseEnter);
text.addEventListener("mouseleave", superEventHandler.onMouseLeave);
window.addEventListener("resize", superEventHandler.onResize);
window.addEventListener("contextmenu", superEventHandler.onRightClick);