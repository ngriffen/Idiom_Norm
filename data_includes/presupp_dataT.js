PennController.ResetPrefix(null);
var showProgressBar = true;


DebugOff()

Sequence("Intro",
    "Statement",
    "Intro1",
    "Intro2",
    "Intro3",
    "Banal",
    "Banal2",
    "Banal3",
    "Message",
    "Banal4",
    "Banal5",
    "Banal6",
    "TrainE",
    "TrainE2",
    "Pretest",
    "Pretest2",
    rshuffle("ExperimentPr"),
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
    newText("<p>Hello! Welcome to our <i>Is it likely that...?</i> task!</p>")
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
    getVar("ID").set( getTextInput("inputID") )
)

    newTrial("Intro1",
    defaultText.center().print()
    ,
    newText("In each round of this task, you will be shown a sentence.")
    .css("font-size","1.8em")
    ,
    newText("<p>")
    .css("font-size","2em")
    .print()
    ,
    newText("Each sentence will typically involve a single character who is carrying out an action.")
    .css("font-size","1.8em")
    ,
    newText("<p>")
    .css("font-size","2em")
    .print()
    ,
    newText("You will then be asked a follow-up question that begins with <i>Is it likely that...?</i>")
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
    newText("Before you begin, we will give you some practice.")
    .css("font-size","1.8em")
    ,
    newText("<p>")
    .css("font-size","2em")
    .print()
    ,
    newText("This way you will become comfortable with the task.")
    .css("font-size","1.8em")
    .print()
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
    newButton("ready button", "I am ready to begin")
    .center()
    .css("font-size","1.8em")
        .print()
        .wait()
)

newTrial("Intro2",
    defaultText.center().print()
,
            newText("<p>Your job will be to read a sentence carefully. Then you will determine whether the follow-up question ought to get a <b>Yes</b>, <b>No</b>, or <b>I don't know</b> response.</p>")
            .left()
            .css("font-size","1.8em")
            .print()
,
            newText("<p>For example, you will be shown the sentence, <i>When Alma left town, she made sure to cover her tracks</i>. Then you will be given a follow-up question such as, <b>Is it likely she was hiding something?</b> If you think, based on the initial sentence, that it is likely that she is hiding something, you should respond <b>Yes</b>. In other words, selecting <b>Yes</b> means that the sentence provides you with evidence to consider it likely that <b>she was hiding something</b>. Selecting <b>No</b> means that you don’t think the sentence provides you with such evidence. If you are not satisfied with selecting <b>Yes</b> or <b>No</b>, you can select <b>I don't know</b>. You will see that some sentences provide clearer evidence for answering the follow-up question than others.</p>")
            .left()
            .css("font-size","1.8em")
            .print()
,
            newText("<p>")
            .css("font-size","2em")
            .print()
,
            newButton("cont button", "Continue")
            .center()
            .print()
            .css("font-size","1.8em")
            .wait()
)

Template( "BanalP.txt", row =>
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
    newText("target", `<p><i>${row.sentence}</i></p>`)
    .css("font-size","1.4em")
                .center()
                .print()
    ,
                newText("<p>")
                .css("font-size","1.4em")
                .print()
    ,
        newText("target", `<p>${row.question}</p>`)
    .css("font-size","1.4em")
                .center()
                .bold()
                .print()
    ,
newTooltip("guide", "<p>Carefully read the sentence and answer the question below. Select <b>Yes</b>, <b>No</b>, or <b>I don't know</b> to make your judgment.</p><p><b>**After the next two sentences, the instructions will be removed so you can focus on the task.**</b></p>")
        .position("top center")  // Display it below the element it attaches to
        .css("font-size","1.2em")
        .key("", "no click")        // Prevent from closing the tooltip (no key, no click)
        .print(getText("target"))   // Attach to the "target" Text element
            ,
    newScale("Blank",  "Yes",  "No", "I don't know")
                .labelsPosition("right")
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
        )
        
    .log("condition", row.condition)
    .log("item", row.item)
    .log("ID", row.ID)
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
    newText("target", `<p><i>${row.sentence}</i></p>`)
    .css("font-size","1.4em")
                .center()
                .print()
    ,
                newText("<p>")
                .css("font-size","1.4em")
                .print()
    ,
        newText("target", `<p>${row.question}</p>`)
    .css("font-size","1.4em")
                .center()
                .bold()
                .print()
    ,
newTooltip("guide", "<p>Carefully read the sentence and answer the question below. Select <b>Yes</b>, <b>No</b>, or <b>I don't know</b> to make your judgment.</p>")
        .position("top center")  // Display it below the element it attaches to
        .css("font-size","1.2em")
        .key("", "no click")        // Prevent from closing the tooltip (no key, no click)
        .print(getText("target"))   // Attach to the "target" Text element
            ,
    newScale("Blank",  "Yes",  "No", "I don't know")
                .labelsPosition("right")
                .center()
                .log()
                .print()
                .wait()
        ,
            newText("<p>")
                .css("font-size","1.4em")
                .print()
        ,
           newTextInput("InputAnsw", "")
                .log()
                .lines(0)
                .size(200, 100)
                .center()
                .print()
        ,
           newText("<p>Please justify your answer in the field above.</p>")
                .color("blue")
                .css("font-size","1.4em")
                .print()
        ,
          newText("warning", "Please justify your answer in the field above.")
                .color("red")
                .bold()
                .remove()
        ,
          newText("<p>")
                .css("font-size","1.4em")
                .print()
       ,
                newButton("submit", "Submit")
                .center()
                .print()
                .wait(// Make sure the TextInput has been filled
                getTextInput("InputAnsw")
                .testNot.text("")
                .failure( getText("warning").print() )
        )
        ,
                    getText("target").remove()          // End of trial, remove "target"
        )
        
    .log("condition", row.condition)
    .log("item", row.item)
    .log("ID", row.ID)
)

Template( "BanalP3.txt", row =>
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
    newText("target", `<p><i>${row.sentence}</i></p>`)
    .css("font-size","1.4em")
                .center()
                .print()
    ,
                newText("<p>")
                .css("font-size","1.4em")
                .print()
    ,
        newText("target", `<p>${row.question}</p>`)
    .css("font-size","1.4em")
                .center()
                .bold()
                .print()
    ,
    newScale("Blank",  "Yes",  "No", "I don't know")
                .labelsPosition("right")
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
        )
        
    .log("condition", row.condition)
    .log("item", row.item)
    .log("ID", row.ID)
)
    
    newTrial("Message",
    defaultText.center().print()
,
            newText("<p>You may have noticed that the questions vary in difficulty.</p>")
            .center()
            .css("font-size","1.8em")
            .print()
,
            newText("<p>You will see that some sentences provide clearer evidence for answering the follow-up question than others.</p>")
            .center()
            .css("font-size","1.8em")
            .print()
,
            newText("<p>We ask you to please think carefully and decisively.</p>")
            .center()
            .css("font-size","1.8em")
            .print()
,
             newText("<p>")
             .css("font-size","1.8em")
             .print()             
,
            newButton("cont button", "Let's continue practicing")
            .center()
            .print()
            .css("font-size","1.8em")
            .wait()
)
    
    
Template( "BanalP4.txt", row =>
        newTrial("Banal4",
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
    newText("target", `<p><i>${row.sentence}</i></p>`)
    .css("font-size","1.4em")
                .center()
                .print()
    ,
                newText("<p>")
                .css("font-size","1.4em")
                .print()
    ,
        newText("target", `<p>${row.question}</p>`)
    .css("font-size","1.4em")
                .center()
                .bold()
                .print()
    ,
    newScale("Blank",  "Yes",  "No", "I don't know")
                .labelsPosition("right")
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
        )
        
    .log("condition", row.condition)
    .log("item", row.item)
    .log("ID", row.ID)
)

Template( "BanalP5.txt", row =>
        newTrial("Banal5",
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
    newText("target", `<p><i>${row.sentence}</i></p>`)
    .css("font-size","1.4em")
                .center()
                .print()
    ,
                newText("<p>")
                .css("font-size","1.4em")
                .print()
    ,
        newText("target", `<p>${row.question}</p>`)
    .css("font-size","1.4em")
                .center()
                .bold()
                .print()
            ,
    newScale("Blank",  "Yes",  "No", "I don't know")
                .labelsPosition("right")
                .center()
                .log()
                .print()
                .wait()
        ,
            newText("<p>")
                .css("font-size","1.4em")
                .print()
        ,
           newTextInput("InputAnsw", "")
                .log()
                .lines(0)
                .size(200, 100)
                .center()
                .print()
        ,
           newText("<p>Please justify your answer in the field above.</p>")
                .color("blue")
                .css("font-size","1.4em")
                .print()
        ,
          newText("warning", "Please justify your answer in the field above.")
                .color("red")
                .bold()
                .remove()
        ,
          newText("<p>")
                .css("font-size","1.4em")
                .print()
       ,
                newButton("submit", "Submit")
                .center()
                .print()
                .wait(// Make sure the TextInput has been filled
                getTextInput("InputAnsw")
                .testNot.text("")
                .failure( getText("warning").print() )
        )
        ,
                    getText("target").remove()          // End of trial, remove "target"
        )
        
    .log("condition", row.condition)
    .log("item", row.item)
    .log("ID", row.ID)
)

Template( "BanalP6.txt", row =>
        newTrial("Banal6",
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
    newText("target", `<p><i>${row.sentence}</i></p>`)
    .css("font-size","1.4em")
                .center()
                .print()
    ,
                newText("<p>")
                .css("font-size","1.4em")
                .print()
    ,
        newText("target", `<p>${row.question}</p>`)
    .css("font-size","1.4em")
                .center()
                .bold()
                .print()
    ,
    newScale("Blank",  "Yes",  "No", "I don't know")
                .labelsPosition("right")
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
        )
        
    .log("condition", row.condition)
    .log("item", row.item)
    .log("ID", row.ID)
)

newTrial("TrainE",
    defaultText.center().print()
    ,
    newText("<p>Well done! You have completed the training session.</p>")
    .css("font-size","1.8em")
        .bold()
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

    
Template( "PretestP.txt", row =>
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
    newText("target", `<p><i>${row.sentence}</i></p>`)
    .css("font-size","1.4em")
                .center()
                .print()
    ,
                newText("<p>")
                .css("font-size","1.4em")
                .print()
    ,
        newText("target", `<p>${row.question}</p>`)
    .css("font-size","1.4em")
                .center()
                .bold()
                .print()
    ,
    newScale("Blank",  "Yes",  "No", "I don't know")
                .labelsPosition("right")
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

Template( "PretestP2.txt", row =>
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
    newText("target", `<p><i>${row.sentence}</i></p>`)
    .css("font-size","1.4em")
                .center()
                .print()
    ,
                newText("<p>")
                .css("font-size","1.4em")
                .print()
    ,
        newText("target", `<p>${row.question}</p>`)
    .css("font-size","1.4em")
                .center()
                .bold()
                .print()
    ,
    newScale("Blank",  "Yes",  "No", "I don't know")
                .labelsPosition("right")
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
        )
)
    
    

Template( "Presupp.txt", row =>
        newTrial("ExperimentPr",
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
    newText("target", `<p><i>${row.sentence}</i></p>`)
    .css("font-size","1.4em")
                .center()
                .print()
    ,
                newText("<p>")
                .css("font-size","1.4em")
                .print()
    ,
        newText("target2", `<p>${row.question}</p>`)
    .css("font-size","1.4em")
                .center()
                .bold()
                .print()
    ,
    newScale("Blank",  "Yes",  "No", "I don't know")
                .labelsPosition("right")
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
)
    .log("Condition", row.Condition)
    .log("Item", row.Item)
    .log("ID", row.ID)
    )
    
