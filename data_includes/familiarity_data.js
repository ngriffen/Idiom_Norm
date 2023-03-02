PennController.ResetPrefix(null);
var showProgressBar = false;

Sequence("Intro",
    "Statement",
    "Intro1",
    "Intro2",
    "Intro3",
    "Banal",
    "Banal2",
    "Banal3",
    "TrainE",
    "Pretest",
    "Pretest2",
    pick(liste=randomize("ExperimentM"),39),
    "break",
    pick(liste,39),
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
     newText("<p><a href='https://app.prolific.co/submissions/complete?cc=50DDF214' target=_'blank' >"+
          "Confirm my participation on Prolific.</a></p>")
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
    newText("For this task, you will be shown a series of expressions.")
    .css("font-size","1.8em")
    ,
    newText("<p>")
    .css("font-size","2em")
    .print()
    ,
    newText("Each expression that you will be shown will be four words in total.")
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
    newText("Then you will let us know how frequently you have seen, heard or used it.")
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

newTrial("Intro3",
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

newTrial("Intro2",
    defaultText.center().print()
,
                newText('<p>To complete this task you will be given a <b>1-5</b> scale to give us your judgment.</p>')
                .center()
                .css("font-size","1.8em")
                .print()
,
            newText('<p><i>A rating of <b>1</b> would indicate that you have never or almost never heard or seen the expression.</i></p>')
            .center()
            .css("font-size","1.8em")
            .print()
,
            newText("<p><i>A rating of <b>3</b> would indicate that you have come across the expression moderately often.</i></p>")
            .center()
            .css("font-size","1.8em")
            .print()
,
            newText("<p><i>A rating of <b>5</b> would indicate that you have seen or heard the phrase very frequently.</i></p>")
            .center()
            .css("font-size","1.8em")
            .print()
,
            newButton("cont button", "Continue")
            .center()
            .print()
            .css("font-size","1.8em")
            .wait()
)

Template( "BanalM.txt", row =>
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
newTooltip("guide", "<p>Carefully read the expression and give a rating for how frequently you have seen, heard or used it. Use the full range of the scale to make your judgment.</p> <p><b>**After the next two expressions, the instructions will be removed so you can focus on the task.**</b></p>")
        .css("font-size","1.2em")
        .position("top center")  // Display it below the element it attaches to
        .key("", "no click")        // Prevent from closing the tooltip (no key, no click)
        .print(getText("target"))   // Attach to the "target" Text element
            ,
           newScale("Blank",  "1",  "2",  "3",  "4",  "5")
                .radio()
                .labelsPosition("bottom")
                .center()
                .log()
                .print()
                .wait()
    ,
            newText("<p>")
                .css("font-size","1.4em")
                .print()
            ,
            newButton("submit", "Submit")
                .center()
                .print()
                .wait()
        ,
                    getText("target").remove()          // End of trial, remove "target"
))

Template( "BanalM2.txt", row =>
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
newTooltip("guide", "Carefully read the expression and give a rating for how frequently you have seen, heard or used it.")
        .css("font-size","1.5em")
        .position("top center")  // Display it below the element it attaches to
        .key("", "no click")        // Prevent from closing the tooltip (no key, no click)
        .print(getText("target"))   // Attach to the "target" Text element
            ,
           newScale("Blank",  "1",  "2",  "3",  "4",  "5")
                .radio()
                .labelsPosition("bottom")
                .center()
                .log()
                .print()
                .wait()
    ,
            newText("<p>")
                .css("font-size","1.4em")
                .print()
            ,
            newButton("submit", "Submit")
                .center()
                .print()
                .wait()
        ,
                    getText("target").remove()          // End of trial, remove "target"
))

Template( "BanalM3.txt", row =>
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
           newScale("Blank",  "1",  "2",  "3",  "4",  "5")
                .radio()
                .labelsPosition("bottom")
                .center()
                .log()
                .print()
                .wait()
    ,
            newText("<p>")
                .css("font-size","1.4em")
                .print()
            ,
            newButton("submit", "Submit")
                .center()
                .print()
                .wait()
        ,
                    getText("target").remove()          // End of trial, remove "target"
))


newTrial("TrainE",
    defaultText.center().print()
    ,
    newText("<p>The training session has been completed.</p>")
    .css("font-size","1.8em")
        .bold()
        ,
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

 Template( "PretestR.txt", row =>
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
newTooltip("guide", "<p>Carefully read the expression and give a rating for how frequently you have seen, heard or used it. Use the full range of the scale to make your judgment.</p> <p><b>**After the next two expressions, the instructions will be removed so you can focus on the task.**</b></p>")
        .css("font-size","1.2em")
        .position("top center")  // Display it below the element it attaches to
        .key("", "no click")        // Prevent from closing the tooltip (no key, no click)
        .print(getText("target"))   // Attach to the "target" Text element
            ,
           newScale("Blank",  "1",  "2",  "3",  "4",  "5")
                .radio()
                .labelsPosition("bottom")
                .center()
                .log()
                .print()
                .wait()
    ,
            newText("<p>")
                .css("font-size","1.4em")
                .print()
            ,
            newButton("submit", "Submit")
                .center()
                .print()
                .wait()
        ,
                    getText("target").remove()          // End of trial, remove "target"
))

Template( "PretestR2.txt", row =>
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
newTooltip("guide", "Carefully read the expression and give a rating for how frequently you have seen, heard or used it.")
        .css("font-size","1.5em")
        .position("top center")  // Display it below the element it attaches to
        .key("", "no click")        // Prevent from closing the tooltip (no key, no click)
        .print(getText("target"))   // Attach to the "target" Text element
            ,
           newScale("Blank",  "1",  "2",  "3",  "4",  "5")
                .radio()
                .labelsPosition("bottom")
                .center()
                .log()
                .print()
                .wait()
    ,
            newText("<p>")
                .css("font-size","1.4em")
                .print()
            ,
            newButton("submit", "Submit")
                .center()
                .print()
                .wait()
        ,
                    getText("target").remove()          // End of trial, remove "target"
))       
    
    
Template( "Idioms.txt", row =>
        newTrial("ExperimentM",
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
    newText("target", `<p><i>${row.Idiom}.</i></p>`)
    .css("font-size","1.4em")
                .center()
                .print()
    ,
            newScale("Blank",  "1",  "2",  "3",  "4",  "5")
                .radio()
                .labelsPosition("bottom")
                .center()
                .log()
                .print()
                .wait()
    ,
            newText("<p>")
                .css("font-size","1.4em")
                .print()
            ,
            newButton("submit", "Submit")
                .center()
                .print()
                .wait()
        ,
                    getText("target").remove()          // End of trial, remove "target"
))
