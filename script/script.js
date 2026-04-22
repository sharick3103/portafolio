
const textButton = document.getElementById("btn-change-text");
const paragraph  = document.getElementById("presentation-text");

let textExpanded = false;

textButton.addEventListener("click", function() {

    if (textExpanded === false) {
        paragraph.textContent = "I've always been curious, the kind of person who asks why about everything. That curiosity led me toward technology almost without realizing it. I consider myself someone who solves problems calmly, learns quickly and enjoys working in a team.";
        textButton.textContent = "See less";
        textExpanded = true;

    } else {
        paragraph.textContent = "Hi, I'm Sharick. I'm a software developer in training. I love learning new things, solving problems and building projects that make sense. I'm focused on data analytics and every day I take one more step toward that goal.";
        textButton.textContent = "Read more about me";
        textExpanded = false;
    }

});

const welcomeButton  = document.getElementById("btn-welcome");
const welcomeMessage = document.getElementById("welcome-message");


let messageVisible = false;
welcomeButton.addEventListener("click", function() {

    if (messageVisible === false) {
        welcomeMessage.style.display = "block";
        welcomeButton.textContent = "Hide welcome message";
        messageVisible = true;

    } else {
        welcomeMessage.style.display = "none";
        welcomeButton.textContent = "Show welcome message";
        messageVisible = false;

    }

});