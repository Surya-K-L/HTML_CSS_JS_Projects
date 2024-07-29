const main=document.querySelector('.main')
const typeArea=document.querySelector('.typingArea')
const btn=document.querySelector('.btn')

const words=[
    "HTML creates structure for webpages.",
    "Method overriding is in which the subclass provides a specific implementation of a method already defined in its superclass.",
    "CSS styles the HTML elements.",
    "Interfaces provide method implementation contracts.",
    "Java is widely used, versatile programming language known for platform independence and object-oriented principles.",
    "HTML defines the content structure.",
    "Entity-Relationship Diagram visually represents the database structure and relationships between entities.",
    "CSS makes websites look beautiful.",
    "Method overloading is in which the multiple methods in a class with the same name but different parameters.",
    "Java uses garbage collection automatically.",
    "Data Science is the field that uses scientific methods, processes, and algorithms to extract insights from data.",
    "HTML and CSS work together.",
    "Primary Key is a unique identifier for a record in a table, ensuring each record is uniquely identifiable.",
    "Java is object-oriented language.",
    "Constructor is a special method to initialize objects, automatically called when an instance of a class is created.",
    "CSS controls fonts and spacing.",
    "Artificial Intelligence is a Technology simulating human intelligence through machine learning, natural language processing, and robotics.",
    "HTML creates forms and buttons.",
    "SQL is a Structured Query Language used for querying and managing data in a relational database.",
    "Classes define objects in Java.",
    "Encapsulation is the process of bundling of data and methods within a class, restricting direct access to some components.",
    "Methods perform actions on objects.",
    "CSS manages page responsiveness efficiently.",
    "Normalization is the process of organizing data to minimize redundancy and improve data integrity.",
    "HTML organizes text and images.",
    "DBMS is a software that manages databases, providing an interface for users to interact with data.",
    "Polymorphism allows dynamic method invocation.",
    "Interface is a abstract type specifying methods a class must implement, allowing for multiple inheritance.",
    "CSS enhances user interface design.",
    "Polymorphism is the ability to present the same interface for different underlying forms, like method overloading.",
    "Exceptions handle runtime errors gracefully.",
   "Inheritance is the mechanism where one class acquires properties and behaviors of a parent class.",
];

const game={
    start:0,
    end:0,
    user:'',
    arrText:"",
};

btn.addEventListener('click',()=>{
    if(btn.textContent==="Start")
    {
        play();
        typeArea.value="";
        typeArea.disabled=false;
    }
    else if(btn.textContent==='Done')
    {
        typeArea.disabled=true;
        main.style.borderColor="white";
        end();
    }
});

function play()
{
    let randText=Math.floor(Math.random()*words.length);
    main.textContent=words[randText];
    game.arrText= words[randText];
    main.style.borderColor ="#c8c8c8";
    btn.textContent="Done";
    const duration = new Date();
    game.start = duration.getTime();
}

function end()
{
    const duration = new Date();
    game.end=duration.getTime();
    const totalTime=(game.end-game.start)/1000;
    game.user=typeArea.value;
    const correct = results();
    main.style.borderColor= "white";
    main.innerHTML=`Time : ${totalTime} Score: ${correct.score} out of 
    ${correct.total}`;
    btn.textContent="Start";

}

function results()
{
    let valueOne = game.arrText.split(" ");
    let valueTwo = game.user.split(" ");
    let score = 0;
    valueOne.forEach((word,idx)=>{
        if(word === valueTwo[idx])
        {
            score++;
        }
    })

    return {score,total:valueOne.length};
}