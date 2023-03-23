PennController.ResetPrefix(null);
var showProgressBar = true;



Sequence("Intro",
    "Statement",
    "Intro1",
    "Intro2",
    "Banal",
    "Banal2",
    "Banal3",
    "TrainE",
    "TrainE2",
    "Pretest",
    "Pretest2",  
    pick(liste=randomize("ExperimentP"),36),
    "break",
    pick(liste,36),
    "Outro",
    SendResults(),
    "Outro2",
    "end"
)

newTrial( "break" ,
                newText("<p>This is a break.</p>")
                .css("font-size","1.8em")
                .center()
                .color("blue")
                .print()    
                ,
                newText("<p>Press the button below when you are ready to continue.</p>")
                .center()
                .css("font-size","1.8em")
                .color("blue")
                .print()
                ,
                 newText("<p>")
                .css("font-size","1.8em")
                .print()             
                ,
                newButton("breakbutton", "Continue")
                .center()
                .css("font-size","1.8em")
                .print()
                .wait()
                
)

newTrial( "Outro",
    defaultText.center().print()
     ,
     newText("<p>Thank you for your participation!</p>")
     .css("font-size","1.8em")
        .color("blue")     
        .bold()
     ,
     newText("<p>To complete this experiment, please enter the requested information below.</p>")
     .css("font-size","1.8em")
           .center()
           .print()
    ,
    newText("<b>Gender</b>")
    ,
    newDropDown("gender" , "select")
    .add( "Female" , "Male" , "Other" )
    .center()
    .css("margin","1em")
    .print()
    .log()
    .wait()
    ,
    newText("<p> </p>")
    ,
    newText("<b>Level of education</b>")
    ,
    newDropDown("education" , "select")
    .add( "High School" , "Some University" , "University Graduate" )
    .center()
    .css("margin","1em")
    .print()
    .log()
    .wait()
    ,
   newText("<b>Age</b>")
    ,
    newDropDown("age" , "select")
    .add( "19","20" , "21","22" ,"23","24","25","26","27","28","29","30","31","32","33","34")
    .center()
    .css("margin","1em")
    .print()
    .log()
    .wait()
    ,
    newText("warning", "Please fill in the information below.")
        .color("red")
        .bold()
        .remove()
    ,
    newButton("Enter button", "Enter")
        .center()
        .print()
        .wait()
)
    
    newTrial( "Outro2",
    defaultText.center().print()
     ,
    newText("<p>You need to certify your completion of this experiment, click the link below!</p>")
    .css("font-size","1.8em")
        .color("blue")     
        .bold()
     ,
     newText("<p><a href='https://app.prolific.co/submissions/complete?cc=CXLJQO57' target=_'blank' >"+
          "Confirm my participation on Prolific.</a></p>")
           .scaling("page")
           .center()
           .print()
           .wait()
)

Header(
    newVar("ID").global()    
)
.log( "id" , getVar("ID") ) // Add the ID to all trials' results lines

newTrial("Intro",
    defaultText.center().print()
    ,
    newText("<p>Hello! Welcome to our study!</p>")
    .css("font-size","1.8em")
        .bold()
    ,
    newText("Please type in your Prolific ID below.")
    .css("font-size","1.8em")
    .bold()
    ,
    newTextInput("inputID", "")
        .center()
        .css("margin","1em")    // Add a 1em margin around this element
        // .before( newText("before", "<p>Please enter your unique participant ID. </p>") )
        .print()
    ,
    newText("warning", "Please enter your Prolific ID first")
        .color("red")
        .bold()
        .remove()
    ,
    newButton("prolificID button", "I have entered my Prolific ID")
    .css("font-size","1.8em")
        .center()
        .print()
        // Only validate a click on Start when inputID has been filled
        .wait(// Make sure the TextInput has been filled
            getTextInput("inputID")
                .testNot.text("")
                .failure( getText("warning").print() )
        )
    ,
    // Store the text from inputID into the Var element
    getVar("inputID").set( getTextInput("inputID") )
)

    newTrial("Intro1",
    defaultText.center().print()
    ,
    newText("For this study, you will be shown a series of incomplete expressions.")
    .css("font-size","1.8em")
    ,
    newText("<p>")
    .css("font-size","2em")
    .print()
    ,
    newText("Each expression will be an idiom that is missing its final word.")
    .css("font-size","1.8em")
    ,
    newText("<p>")
    .css("font-size","2em")
    .print()
    ,
    newText("Your task is to carefully read each expression you are shown.")
    .css("font-size","1.8em")
    ,
    newText("<p>")
    .css("font-size","2em")
    .print()
    ,
    newText("Then you will complete the expression with the first word that comes to mind.")
    .css("font-size","1.8em")
    ,
    newText("<p>")
    .css("font-size","2em")
    .print()
    ,
    newButton("cont", "Continue")
    .center()
    .css("font-size","1.8em")
        .print()
        .wait()
    )
    

    newTrial( "Statement",
    defaultText.center().print()
     ,
     newText("<p> In order to continue, please provide your consent to participate in this experiment.</p>")
        .css("font-size","1.8em")
        .bold()
     ,
     newText("<a href='https://e1.pcloud.link/publink/show?code=XZ3q8bZfAWom9MGCAYL3MYlk4hwgSAhGtkX' target=_'blank' >"+
          "Click here if you would like to review the information sheet.</a>")
         .css("margin","1.8em")
         .print()
     ,
     newButton("consent button2", "I consent")
        .center()
        .css("font-size","1.8em")
        .print()
        .wait()
)

newTrial("Intro2",
    defaultText.center().print()
    ,
    newText("<p>Before you begin you will be given a brief training session.</p>")
        .css("font-size","1.8em")
        .bold()
    ,
    newText("This will allow you to become comfortable with this task.")
    .css("font-size","1.8em")
    ,
    newText("<p>")
    .css("font-size","2em")
    .print()
        ,
    newText("At the end of the training session, you will be shown how each idiom is completed.")
    .css("font-size","1.8em")
     ,
    newText("<p>")
    .css("font-size","2em")
    .print()
    ,
    newText("When you are ready, click the button below.")
    .css("font-size","1.8em")
    ,
    newText("<p>")
    .css("font-size","2em")
    .print()
    ,
    newButton("ready button", "Begin the training session")
    .center()
    .css("font-size","1.8em")
        .print()
        .wait()
)

newTrial("TrainE",
    defaultText.center().print()
    ,
    newText("<p>The training session has been completed.</p>")
    .css("font-size","1.8em")
        .bold()
    ,
        newText("<p>The correct responses the following:</p>")
    .css("font-size","1.8em")
    ,
    newText("She ran her <i>mouth</i>.")
    .css("font-size","1.5em"),
    newText("He bumped her <i>fee</i>.")
    .css("font-size","1.5em"),
    newText("She chose her <i>fate</i>.")
    .css("font-size","1.5em"),
    newText("He pulled her <i>leg</i>.")
    .css("font-size","1.5em")
    ,
    newText("<p>")
    .css("font-size","2em")
    .print()
    ,
    newButton("readyish", "Continue")
    .center()
    .css("font-size","1.8em")
        .print()
        .wait()
)

newTrial("TrainE2",
defaultText.center().print(),
    newText("You may now begin the main task.")
    .css("font-size","1.8em")
    ,
    newText("<p>")
    .css("font-size","2em")
    .print()
    ,
    newText("When you are ready, click the button below.")
    .css("font-size","1.8em")
    ,
    newText("<p>")
    .css("font-size","2em")
    .print()
    ,
    newButton("ready experiment", "Begin the main task")
    .center()
    .css("font-size","1.8em")
        .print()
        .wait()
)

Template( "BanalPIK.txt", row =>
        newTrial("Banal",
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
            .css("font-size","1.4em")
                .center()
                .print()
    ,
newTooltip("guide", "<p>Carefully read the expression and complete it with the first word that comes to mind. Make sure to type a single word without punctuation.</p><p><b> **After the next two expressions, the instructions will be removed so you can focus on the task.**</b></p>")
        .css("font-size","1.2em")
        .position("top center")  // Display it below the element it attaches to
        .key("", "no click")        // Prevent from closing the tooltip (no key, no click)
        .print(getText("target"))   // Attach to the "target" Text element
            ,
            newTextInput("InputAnsw", "")
                .log()
                .lines(0)
                .size(200, 100)
                .center()
                .print()
    ,
        newText("warning", "Please type your answer in the field above.")
        .color("red")
        .bold()
        .remove()
        ,
            newText("<p>")
                .css("font-size","1.4em")
                .print()
            ,
            newButton("submit", "Submit")
            .css("font-size","1.4em")
                .center()
                .print()
                .wait(// Make sure the TextInput has been filled
            getTextInput("InputAnsw")
                .testNot.text("")
                .failure( getText("warning").print() ))
        )
        ,
                    getText("target").remove()          // End of trial, remove "target"

)

Template( "BanalP2.txt", row =>
        newTrial("Banal2",
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
            .css("font-size","1.4em")
                .center()
                .print()
,
newTooltip("guide", "Each expression that you see will be an idiom. Remember to type a single word without punctuation.")
        .css("font-size","1.5em")
        .position("top center")  // Display it below the element it attaches to
        .key("", "no click")        // Prevent from closing the tooltip (no key, no click)
        .print(getText("target"))   // Attach to the "target" Text element
            ,
            newTextInput("InputAnsw", "")
                .log()
                .lines(0)
                .size(200, 100)
                .center()
                .print()
    ,
        newText("warning", "Please type your answer in the field above.")
        .color("red")
        .bold()
        .remove()
        ,
            newText("<p>")
                .css("font-size","1.4em")
                .print()
            ,
            newButton("submit", "Submit")
            .css("font-size","1.4em")
                .center()
                .print()
                .wait(// Make sure the TextInput has been filled
            getTextInput("InputAnsw")
                .testNot.text("")
                .failure( getText("warning").print() ))
        ,
                    getText("target").remove()          // End of trial, remove "target"

))

Template( "BanalPIK3.txt", row =>
        newTrial("Banal3",
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
            .css("font-size","1.4em")
                .center()
                .print()
            ,
            newTextInput("InputAnsw", "")
                .log()
                .lines(0)
                .size(200, 100)
                .center()
                .print()
    ,
        newText("warning", "Please type your answer in the field above.")
        .color("red")
        .bold()
        .remove()
        ,
            newText("<p>")
                .css("font-size","1.4em")
                .print()
            ,
            newButton("submit", "Submit")
            .css("font-size","1.4em")
                .center()
                .print()
                .wait(// Make sure the TextInput has been filled
            getTextInput("InputAnsw")
                .testNot.text("")
                .failure( getText("warning").print() ))
        ,
                    getText("target").remove()          // End of trial, remove "target"

))

Template( "PretestPIK.txt", row =>
        newTrial("Pretest",
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
            .css("font-size","1.4em")
                .center()
                .print()
    ,
newTooltip("guide", "<p>Carefully read the expression and complete it with the first word that comes to mind. Make sure to type a single word without punctuation.</p><p><b> **After the next two expressions, the instructions will be removed so you can focus on the task.**</b></p>")
        .css("font-size","1.2em")
        .position("top center")  // Display it below the element it attaches to
        .key("", "no click")        // Prevent from closing the tooltip (no key, no click)
        .print(getText("target"))   // Attach to the "target" Text element
            ,
            newTextInput("InputAnsw", "")
                .log()
                .lines(0)
                .size(200, 100)
                .center()
                .print()
    ,
        newText("warning", "Please type your answer in the field above.")
        .color("red")
        .bold()
        .remove()
        ,
            newText("<p>")
                .css("font-size","1.4em")
                .print()
            ,
            newButton("submit", "Submit")
            .css("font-size","1.4em")
                .center()
                .print()
                .wait(// Make sure the TextInput has been filled
            getTextInput("InputAnsw")
                .testNot.text("")
                .failure( getText("warning").print() ))
        )
        ,
                    getText("target").remove()          // End of trial, remove "target"

)

Template( "PretestPIK2.txt", row =>
        newTrial("Pretest2",
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
            .css("font-size","1.4em")
                .center()
                .print()
,
newTooltip("guide", "Each expression that you see will be an idiom. Remember to type a single word without punctuation.")
        .css("font-size","1.5em")
        .position("top center")  // Display it below the element it attaches to
        .key("", "no click")        // Prevent from closing the tooltip (no key, no click)
        .print(getText("target"))   // Attach to the "target" Text element
            ,
            newTextInput("InputAnsw", "")
                .log()
                .lines(0)
                .size(200, 100)
                .center()
                .print()
    ,
        newText("warning", "Please type your answer in the field above.")
        .color("red")
        .bold()
        .remove()
        ,
            newText("<p>")
                .css("font-size","1.4em")
                .print()
            ,
            newButton("submit", "Submit")
            .css("font-size","1.4em")
                .center()
                .print()
                .wait(// Make sure the TextInput has been filled
            getTextInput("InputAnsw")
                .testNot.text("")
                .failure( getText("warning").print() ))
        ,
                    getText("target").remove()          // End of trial, remove "target"

))    
    
    
    
    
Header(
    newVar("Answ").global()    
)
.log( "answ" , getVar("Answ") )

Template( "Idioms.txt", row =>
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
            .css("font-size","1.4em")
                .center()
                .print()
        ,
            newTextInput("InputAnsw", "")
                .log()
                .lines(0)
                .size(200, 100)
                .center()
                .print()
    ,
        newText("warning", "Please type your answer in the field above.")
        .color("red")
        .bold()
        .remove()
        ,
            newText("<p>")
                .css("font-size","1.4em")
                .print()
            ,
            newButton("submit", "Submit")
            .css("font-size","1.4em")
                .center()
                .print()
                .wait(// Make sure the TextInput has been filled
            getTextInput("InputAnsw")
                .testNot.text("")
                .failure( getText("warning").print() ))
        ,
                    getText("target").remove()          // End of trial, remove "target"
))
