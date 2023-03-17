PennController.ResetPrefix(null);
var showProgressBar = true;

Sequence("Intro",
    "Statement",
    "Intro1",
    "Intro2",
    "Example1",
    "Example2",
    "Intro3",
    "Banal",
    "Banal2",
    "Banal3",
    "TrainE",
    "TrainE2",
    "Pretest",
    "Pretest2",
    pick(liste=randomize("ExperimentD"),36),
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

    
newTrial( "Example1" ,
defaultText.center().print(),
             newText("<p>Example 1</p>")
                .bold()
                .center()
                .css("font-size","1.8em")
                .print()
,
            newText("<p>Several participants from a related study were given the expression <i>She covered her tracks</i>.</p>")
                .center()
                .css("font-size","1.8em")
                .print()
,
            newText("<p>Their explanation was that the verb <i>to cover</i> is related to the verb <i>to hide</i>.</p>")
                .center()
                .css("font-size","1.8em")
                .print()
,
                newText("<p>And, the noun <i>tracks</i> is related to the <i>evidence of one's actions</i>.</p>")
                .center()
                .css("font-size","1.8em")
                .print()
,
            newText("<p>They found that both the verb and noun make meaningful contributions to the expression.</p>")
                .center()
                .css("font-size","1.8em")
                .print()
    ,
            newText("<p>As a result, they selected <b>Yes</b>.</p>")
                .center()
                .css("font-size","1.8em")
                .print()
    ,
            newButton("contgo button", "Continue")
                .center()
                .css("font-size","1.8em")
                .print()
                .wait()   
)
    
newTrial( "Example2" ,
defaultText.center().print(),    
            newText("<p>Example 2</p>")
                .bold()
                .center()
                .css("font-size","1.8em")
                .print()
,
            newText("<p>In the same study, a number of other participants were given the expression <i>He kicked the bucket</i>.</p>")
                .center()
                .css("font-size","1.8em")
                .print()
,
                newText("<p>Their explanation was that there was no explicit relation to be found.</p>")
                .center()
                .css("font-size","1.8em")
                .print()
,
            newText("<p>Although the expressed meaning <i>to die</i> was clear, they could not find a relation.</p>")
                .center()
                .css("font-size","1.8em")
                .print()
,
            newText("<p>They found that neither the verb nor the noun seemed to make meaningful contributions.</p>")
                .center()
                .css("font-size","1.8em")
                .print()
,
            newText("<p>As a result, they selected <b>No</b>.</p>")
                .center()
                .css("font-size","1.8em")
                .print()
,
            newButton("contgo button", "Continue")
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
    newText("Each expression that you will be shown will have four words in total.")
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
    newText("Then you will consider if the verb or noun contribute to the meaning of the expression.")
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
    newText("At the end of the training session, you will be shown how other participants typically answered.")
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
            newText("<p>To complete this task you be able to select <b>Yes</b> or <b>No</b> to give us your judgment.</p>")
            .center()
            .css("font-size","1.8em")
            .print()
,
            newText("<p>Selecting <b>Yes</b> indicates that the verb or noun <b>does</b> make a meaningful contribution to the sentence's meaning.</p>")
            .center()
            .css("font-size","1.8em")
            .print()
,
            newText("<p>Selecting <b>No</b> indicates that <b>neither</b> the verb <b>nor</b> the noun make a meaningful contribution to the sentence's meaning.</p>")
            .center()
            .css("font-size","1.8em")
            .print()
,
            newText("<p><b>Don't worry</b>, before you begin you will be shown several examples.</p>")
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

Template( "BanalD.txt", row =>
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
newTooltip("guide", "<p>Carefully read the expression and decide if a meaningful contribution is made by the verb or noun. Select <b>Yes</b> or <b>No</b> to make your judgment.</p><p><b>**After the next two expressions, the instructions will be removed so you can focus on the task.**</p></b>")
        .position("top center")  // Display it below the element it attaches to
        .css("font-size","1.2em")
        .key("", "no click")        // Prevent from closing the tooltip (no key, no click)
        .print(getText("target"))   // Attach to the "target" Text element
            ,
    newScale("Blank",  "Yes",  "No")
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
            newTimer("wait", 1500)
                .start()
                .wait()
        ,
                    getText("target").remove()          // End of trial, remove "target"
        ))

Template( "BanalD2.txt", row =>
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
newTooltip("guide", "Carefully read the expression and decide if a meaningful contribution is made by the verb or noun.")
        .position("top center")  // Display it below the element it attaches to
        .css("font-size","1.5em")
        .key("", "no click")        // Prevent from closing the tooltip (no key, no click)
        .print(getText("target"))   // Attach to the "target" Text element
            ,
               newScale("Blank",  "Yes",  "No")
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
            newTimer("wait", 1500)
                .start()
                .wait()
        ,
                    getText("target").remove()          // End of trial, remove "target"
        )
)

Template( "BanalD3.txt", row =>
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
            newScale("Blank",  "Yes",  "No")
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



newTrial("TrainE",
    defaultText.center().print()
    ,
    newText("<p>The training session has been completed.</p>")
    .css("font-size","1.8em")
        .bold()
    ,
        newText("<p>These are typical responses and explanations that we collected from past participants:</p>")
    .css("font-size","1.8em")
    ,
    newText("<i>She changed her mind</i>: Most participants answered <b>Yes</b>.")
    .css("font-size","1.5em"),
    newText("<b>Explanation</b>: <i>mind</i> relates to the idea of <i>thoughts</i>.")
    .css("font-size","1.5em"),
     newText("<p>")
     .css("font-size","0.8em")
     .print(),
    newText("<i>He took the plunge</i>: Most participants answered <b>No</b>.")
    .css("font-size","1.5em"),
        newText("<b>Explanation</b>: there is no obvious relation between the verb or noun and the meaning of the expression.")
    .css("font-size","1.5em"),
         newText("<p>")
     .css("font-size","0.8em")
     .print(),
    newText("<i>They spread the word</i>: Most participants answered <b>Yes</b>.")
    .css("font-size","1.5em"),
        newText("<b>Explanation</b>: <i>spread</i> relates to the idea of <i>telling</i> and <i>word</i> to the idea of <i>information</i>.")
    .css("font-size","1.5em"),
         newText("<p>")
     .css("font-size","0.8em")
     .print(),
    newText("<i>She pulled his leg</i>: Most participants answered <b>No</b>.")
    .css("font-size","1.5em"),
    newText("<b>Explanation</b>: there is no obvious relation between the verb or noun and the meaning of the expression.")
    .css("font-size","1.5em"),
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
newTooltip("guide", "<p>Carefully read the expression and decide if a meaningful contribution is made by the verb or noun. Select <b>Yes</b> or <b>No</b> to make your judgment.</p><p><b>**After the next two expressions, the instructions will be removed so you can focus on the task.**</p></b>")
        .position("top center")  // Display it below the element it attaches to
        .css("font-size","1.2em")
        .key("", "no click")        // Prevent from closing the tooltip (no key, no click)
        .print(getText("target"))   // Attach to the "target" Text element
            ,
    newScale("Blank",  "Yes",  "No")
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
            newTimer("wait", 1500)
                .start()
                .wait()
        ,
                    getText("target").remove()          // End of trial, remove "target"
        ))

Template( "PretestR3.txt", row =>
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
newTooltip("guide", "Carefully read the expression and decide if a meaningful contribution is made by the verb or noun.")
        .position("top center")  // Display it below the element it attaches to
        .css("font-size","1.5em")
        .key("", "no click")        // Prevent from closing the tooltip (no key, no click)
        .print(getText("target"))   // Attach to the "target" Text element
            ,
               newScale("Blank",  "Yes",  "No")
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
            newTimer("wait", 1500)
                .start()
                .wait()
        ,
                    getText("target").remove()          // End of trial, remove "target"
        )
)
    
    

Template( "Idioms.txt", row =>
        newTrial("ExperimentD",
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
            newScale("Blank",  "Yes",  "No")
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
