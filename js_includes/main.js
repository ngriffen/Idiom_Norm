PennController.ResetPrefix(null); 
var showProgressBar = false;

function Pick(set,n) {
    assert(set instanceof Object, "First argument of pick cannot be a plain string" );
    n = Number(n);
    if (isNaN(n) || n<0) n = 0;
    this.args = [set];
    set.remainingSet = null;
    this.run = function(arrays){
        if (set.remainingSet===null) set.remainingSet = arrays[0];
        const newArray = [];
        for (let i = 0; i < n && set.remainingSet.length; i++)
            newArray.push( set.remainingSet.shift() );
        return newArray;
    }
}
function pick(set, n) { return new Pick(set,n); } 

Sequence("Intro",
    "Intro2",
    "trainingP",
    "TrainE",
    pick(liste=randomize("ExperimentP"),20),
    "Outro",
    SendResults(),
    "Outro2",
    "end"
)


Header(
    newVar("Answ").global()    
)
.log( "answ" , getVar("Answ") ) 

Template( "Predict.txt", row =>
        newTrial("ExperimentP",
    defaultText.center().print("center at 50vw","middle at 50vh")
    ,
    // Automatically start and wait for Timer elements when created
    defaultTimer.start().wait()
    ,
    // Mask, shown on screen for 500ms
    newText("mask","+++"),
    newTimer("maskTimer", 1000),                       
    getText("mask").remove()
    ,
            newText("<p>")
                .css("font-size","1.4em")
                .print()
,
            newText("target", `<p><i>${row.Fragment}.</i></p>`)
                .center()
                .print()
,
newTooltip("guide", "Carefully read the expression and decide what the final word is likely to be. Use your keyboard to type your answer in the field below.")
        .position("top center")  // Display it below the element it attaches to
        .key("", "no click")        // Prevent from closing the tooltip (no key, no click)
        .print(getText("target"))   // Attach to the "target" Text element
            ,
            newTextInput("InputAnsw", "Type your answer here..")
                .log()
                .lines(0)
                .size(200, 100)
                .center()
                .print()
        ,
        newVar("Answ").global().set(false)
        ,
            newText("<p>")
                .css("font-size","1.4em")
                .print()
            ,
            newButton("submit", "Submit")
                .center()
                .print()
                .wait(getTextInput("InputAnsw")
                    .test.text(row.Correct)
                    .success( getVar("CORRECT").set(true) )
                        )
        ,
                    getText("target").remove()          // End of trial, remove "target"

))
        getVar("CORRECT").set( getTextInput("InputAnsw") )
        .log("InputAnsw", getVar("CORRECT"))
        .log( "Idiom" , row.Fragment)
        .log( "GivenAnswer" , getVar("PredictAnsw"))
        .log( "CorrectA" , row.Correct)