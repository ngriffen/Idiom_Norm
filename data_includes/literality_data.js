PennController.ResetPrefix(null);
var showProgressBar = false;

Sequence("Intro",
    "Statement",
    "Intro3",
    "Example",
    "trainingL",
    "TrainE",
    "Banal",
    pick(liste=randomize("ExperimentL"),39),
    "break",
    pick(liste,39),
    "Outro",
    SendResults(),
    "Outro2",
    "end"
)

newTrial( "break" ,
                newText("<p>This is a break.</p>")
                .css("font-size","1.4em")
                .center()
                .color("blue")
                .print()    
                ,
                newText("<p>Press the button below when you are ready to continue.</p>")
                .center()
                .color("blue")
                .print()
                ,
                 newText("<p>")
                .css("font-size","1.4em")
                .print()             
                ,
                newButton("breakbutton", "I am ready to continue")
                .center()
                .print()
                .wait()
                
)

newTrial( "Example" ,
defaultText.center().print(),
            newText(`<p>An example would be if you were given the expression <i>she got cold feet</i> and you judge that it could be highly interpretable as literal. As a result, you might choose a rating on the higher end of the scale to indicate your belief in its literal interpretability.</p>`)
                .center()
                .print()
,
            newText(`<p>Another example would be if you were given the expression <i>he kicked the bucket</i> and you judge that it would be unlikely for this expression to be interpreted as literal. As a result, you could give a rating at the lower end of the scale to indicate your belief in its lack of literal interpretability.</p>`)
                .center()
                .print()
,
            newText(`<p>When you are ready to begin the training session click the button below.</p>`)
                .center()
                .print()
,
            newButton("ready button", "I am ready to begin the training session")
                .center()
                .print()
                .wait()
                
)

newTrial( "Outro",
    defaultText.center().print()
     ,
     newText("<p>Thank you for your participation!</p>")
        .color("blue")     
        .bold()
     ,
     newText("<p>To complete this experiment, please enter the requested information below.</p>")
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
    newText("<p>Hello! Welcome to the experiment!</p>")
        .bold()
    ,
    newText("In this task, you will be shown a series of expressions.")
    ,
    newText("<p>")
    .css("font-size","1.4em")
    .print()
    ,
    newText("Each expression that you will see shall have the same form.")
    ,
    newText("<p>")
    .css("font-size","1.4em")
    .print()
    ,
    newText("Your task is to carefully read each expression and to let us know how literally interpretable you find it.")
    ,
    newText("<p>Are you ready?</p>")
    ,
    newText("Please type in your Prolific ID below.")
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

    newTrial( "Statement",
    defaultText.center().print()
     ,
     newText("<p> In order to continue, please provide your consent to participate in this experiment.</p>")
        .bold()
     ,
     newText("<a href='https://e1.pcloud.link/publink/show?code=XZ3q8bZfAWom9MGCAYL3MYlk4hwgSAhGtkX' target=_'blank' >"+
          "Click here if you would like to review the information sheet.</a>")
         .css("margin","1em")
         .print()
     ,
     newButton("consent button2", "I consent")
        .center()
        .print()
        .wait()
)

newTrial("Intro3",
    defaultText.center().print()
,
            newText(`<p><b> In this experiment, you will be asked to judge the <b>Literal Interpretability</b> of each expression that you are shown.</b></p>`)
                .center()
                .print()
,
            newText(`<p>Your task is to rate how literally interpretable the expression you are given is by using the full range of the <b>1-5</b> scale to give us your input.</p>`)
                .center()
                .print()
,
            newText('<p><i>Normally, a rating of <b>1</b> would indicate that the expression does not have any possible literal interpretation and therefore is completely implausible when interpreted as literal. A rating of <b>5</b> would indicate that the expression definitely has a clear and well-formed literal interpretation that is very plausible. Whereas intermediate ratings should reflect a judgement that the expression has a plausible literal interpretation.</i></p>')
            .center()
            .print()
,
            newText("When you are ready to see an example, please click the button below.")
,
            newText("<p>")
            .css("font-size","1.4em")
            .print()
,
            newButton("cont button", "Continue")
            .center()
            .print()
            .wait()
)


Template( "TrainingD.txt", row =>
        newTrial("trainingL",
    defaultText.center().print("center at 50vw","middle at 50vh")
    ,
    // Automatically start and wait for Timer elements when created
    defaultTimer.start().wait()
    ,
    // Mask, shown on screen for 500ms
    newText("mask","+Training Session+"),
    newTimer("maskTimer", 1000),                       
    getText("mask").remove()
            ,
    newText("target", `<p>${row.Fragment}.</p>`)
                .center()
                .print()
    ,
    newTooltip("guide", "In this task, you will be shown an expression such as the one below. You will be asked to carefully read the expression and to select a rating that corresponds to how literally interpretable you find the expression to be. When you have made your decision, select the rating that you find most appropriate.")
        .position("top center")// Display it below the element it attaches to
        .key("", "no click")        // Prevent from closing the tooltip (no key, no click)
        .print(getText("target"))   // Attach to the "target" Text element
    ,
            newScale("Blank",  "1",  "2",  "3",  "4",  "5")
                .radio()
                .labelsPosition("bottom")
                .center()
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
            newTimer("wait", 1500)
                .start()
                .wait()
        ,
                    getText("target").remove()          // End of trial, remove "target"
        )
)

Template( "Banal.txt", row =>
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
    newText("target", `<p>${row.Fragment}.</p>`)
                .center()
                .print()
    ,
    newTooltip("guide", "Carefully read the expression and select a rating that corresponds to how literally interpretable you find the expression to be. After the next two expressions, the instructions will be removed so you can focus on the task.")
        .position("top center")// Display it below the element it attaches to
        .key("", "no click")        // Prevent from closing the tooltip (no key, no click)
        .print(getText("target"))   // Attach to the "target" Text element
    ,
            newScale("Blank",  "1",  "2",  "3",  "4",  "5")
                .radio()
                .labelsPosition("bottom")
                .center()
                .print()
                .log()
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
            newTimer("wait", 1500)
                .start()
                .wait()
        ,
                    getText("target").remove()          // End of trial, remove "target"
        ))

newTrial("TrainE",
    defaultText.center().print()
    ,
    newText("<p>You have completed the training session</p>")
        .bold()
    ,
    newText("You may now begin the experiment.")
    ,
    newText("<p>")
    .css("font-size","1.4em")
    .print()
    ,
    newText("When you are ready, please click the button below.")
    ,
    newText("<p>")
    .css("font-size","1.4em")
    .print()
    ,
    newButton("ready experiment", "I am ready to begin the experiment")
    .center()
        .print()
        .wait()
)


Template( "Idioms.txt", row =>
        newTrial("ExperimentL",
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
    newText("target", `<p>${row.Idiom}.</p>`)
                .center()
                .print()
    ,
            newScale("Blank",  "1",  "2",  "3",  "4",  "5")
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


