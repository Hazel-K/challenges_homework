// <⚠️ DONT DELETE THIS ⚠️>
// import "styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

// const BODY = document.querySelector("body")

// const wholeEventHandler = {
    //     sizeSmall: a => {
        //         a.target.document.body.style.color = COLORS[0];
        //     },
        //     sizeMiddle: a => {
            //         a.target.document.body.style.color = COLORS[1];
            //     },
            //     sizeBig: a => {
                //         a.target.document.body.style.color = COLORS[2];
                //     }
                // };
                
                // function wantKillMyself() {
                    //     if (window.innerWidth <= 580) {
                        //         window.addEventListener("resize", wholeEventHandler.sizeSmall);
                        //     } else if (window.innerWidth > 580 && window.innerWidth <= 860) {
                            //         window.addEventListener("resize", wholeEventHandler.sizeMiddle);
                            //     } else {
                                //         window.addEventListener("resize", wholeEventHandler.sizeBig);
                                //     }
                                // };
                                
const COLORS = ["#2D8ED6", "#8F4FAE", "#EEBC12"];
document.body.style.color = "white";
document.body.style.backgroundColor = COLORS[2];

function wantKillMyself () {
    if (window.innerWidth <= 580) {
        document.body.style.backgroundColor = COLORS[0];
    } else if (window.innerWidth > 580 && window.innerWidth <= 860) {
        document.body.style.backgroundColor = COLORS[1];
    } else {
        document.body.style.backgroundColor = COLORS[2];
    }
}

function init() {
    window.addEventListener("resize", wantKillMyself);
}
init();