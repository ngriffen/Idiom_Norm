PennController.ResetPrefix(null);
var showProgressBar = false;

Sequence("Intro",
    "Statement",
    "Intro2",
    "trainingM",
    "TrainE",
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
                newButton("breakbutton", "I am ready to continue.")
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
    newText("In this task, you will be shown a series of incomplete expressions.")
    ,
    newText("<p>")
    .css("font-size","1.4em")
    .print()
    ,
    newText("Each expression that you will be shown will be missing its final word.")
    ,
    newText("<p>")
    .css("font-size","1.4em")
    .print()
    ,
    newText("Your task is to carefully read each expression and to decide how they should be completed.")
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
    newButton("prolificID button", "I have entered my Prolific ID.")
        .center()
        .print()
        // Only validate a click on Start when inputID has been filled
        .wait(  // Make sure the TextInput has been filled
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

newTrial("Intro2",
    defaultText.center().print()
    ,
    newText("<p>Before, you begin you will be given a brief training session.</p>")
        .bold()
    ,
    newText("This will allow you to become comfortable with the controls before you begin the task.")
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
    newButton("ready button", "I am ready to begin the training session.")
    .center()
        .print()
        .wait()
)


Template( "TrainingD.txt", row =>
        newTrial("trainingM",
            newTimer("break",1000)
                .start()
                .wait()
                .center()
                .print()
            ,
            newText(`<p><b> In this experiment, you will be asked to judge the <b>Meaningfulness</b> of each expression that you are shown.</b></p>`)
                .center()
                .print()
,
            newText(`<p><b>You will be given the following instruction when you are judging the <b>Meaningfulness</b> of an expression:</b></p>`)
                .center()
                .print()
,
            newText(`<p>Your task is to rate how well you know the meaning of the expression below. Use the full range of the scale to make your decision.</p>`)
                .center()
                .print()
,
            newText('<p><i>Normally, a rating of <b>1</b> would indicate you have absolutely no idea what the idiom means. A rating of <b>3</b> would indicate that you are moderately certain of what it means. Whereas, a rating of <b>5</b> would indicate that you are 100% certain of the idiom’s meaning and could easily put it into your own words.</i></p>')
            .center()
            .print()
,
            newText('<p>For the following expression, select a rating of <b>5</b> as if the meaning is absolutely clear to you.</p>')
            .center()
            .print()
,
            newText("warning", "Please enter the correct answer.")
                .color("red")
                .center()
                .bold()
                .remove()
,
            newText("Training", `<p>${row.Training}.</p>`)
                .center()
                .print()
            ,
            newScale("Meaningfulness",  "1",  "2",  "3",  "4",  "5")
                .radio()
                .labelsPosition("bottom")
                .default("2")
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
                .wait(
                    getScale("Meaningfulness")
                    .test.selected(row.Correct)
                    .success(
                    newText("correct","Right answer!")
                        .italic()
                        .center()
                        .print()
                        )
                    .failure( getText("warning").print()))
        )
        
)

Template( "Idioms.txt", row =>
        newTrial("ExperimentM",
            newTimer("break",1000)
                .start()
                .wait()
                .center()
                .print()
,
            newText(`<p><b>Part 2.1: Meaningfulness</b></p>`)
                .css("font-size","1.5em")
                .center()
                .print()
,
            newText(`<p>Carefully read the expression and rate how well you know its meaning. Use the full range of the scale to make your decision.</p>`)
                .center()
                .print()
,
            newText('<p><i>Normally, a rating of <b>1</b> would indicate you have absolutely no idea what the expression means. A rating of <b>3</b> would indicate that you are moderately certain of what it means. Whereas, a rating of <b>5</b> would indicate that you are 100% certain of the expression's meaning and could easily put it into your own words.</i></p>')
            .center()
            .print()
,
            newText("Idiom", `<p>${row.Idiom}.</p>`)
                .center()
                .print()
,
            newScale("Meaningfulness",  "1",  "2",  "3",  "4",  "5")
                .radio()
                .labelsPosition("bottom")
                .default("2")
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
));



