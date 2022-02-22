let counter = 10;
let list = [
    {
        name: "Caution",
        sound: 1
    },
    {
        name: "Dying Breed",
        sound: 3
    },
    {
        name: "Human",
        sound: 8
    },
    {
        name: "Spaceman",
        sound: 7
    },
    {
        name: "Sam's Town",
        sound: 5
    },
    {
        name: "Brightside",
        sound: 4
    }
];
//this is the code that displays the array
for(let i = 0; i < list.length; i++)
{
    let ele = document.createElement("div");
    let nameEle = document.createElement("h1");
    let soundEle = document.createElement("h3");
    nameEle.innerHTML = list[i].name;
    soundEle.innerHTML = list[i].sound;
    ele.appendChild(nameEle);
    ele.appendChild(soundEle);
    document.body.appendChild(ele);
//code to change the color
    if(list[i].sound > 5)
    {
        document.body.appendChild(soundEle).style.color = "blue";
    }
}
//end function
function buttonEnd(mess)
{
    let ele = document.createElement("div");
    let counterEle = document.createElement("h1");
    counterEle.innerHTML = mess;
    ele.appendChild(counterEle);
    document.body.appendChild(ele);
}

let button = document.createElement("button");
button.innerHTML = "click me" + " " + counter;

button.addEventListener("click", function(){
    counter = counter + 1;
    button.innerHTML = "click me" + " " + counter;

    if(counter == 15)
    {
       buttonEnd("cool we hit the number 15")
    }
} )
document.body.appendChild(button)

