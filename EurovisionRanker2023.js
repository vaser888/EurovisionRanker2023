var runnerList = [
["Austria", "Who the Hell Is Edgar?","test"],
["Portugal", "Ai coração","hey"],
["Switzerland","Watergun",""],
["Poland","Solo",""],
["Serbia","Samo mi se spava",""],
["France","Évidemment",""],
["Cyprus","Break a Broken Heart",""],
["Spain","Eaea",""],
["Sweden", "Tattoo",""],
["Albania","Duje",""],
["Italy","Due vite",""],
["Estonia","Bridges",""],
["Finland","Cha Cha Cha",""],
["Czech Republic","My Sister's Crown",""],
["Australia","Promise",""],
["Belgium","Because of You",""],
["Armenia","Future Lover",""],
["Moldova", "Soarele și luna",""],
["Ukraine", "Heart of Steel",""],
["Norway", "Queen of Kings",""],
["Germany", "Blood & Glitter",""],
["Lithuania", "Stay",""],
["Israel", "Unicorn",""],
["Slovenia","Carpe Diem",""],
["Croatia", "Mama ŠČ!",""],
["United Kingdom", "I Wrote a Song",""]]

for(i=0; i<runnerList.length; i++){
    createCountyRank(i+1,runnerList[i][0], runnerList[i][1], runnerList[i][2], "rankArea")
}

function createCountyRank(rankNum, country, songName, notes, id){
    var div = document.createElement("div");
    div.setAttribute("class", "listItem");
    //div.setAttribute("value", rankNum)
    var div1 = document.createElement("input");
    div1.setAttribute("class", "rankNumber");
    div1.setAttribute("id", "rankNumber");
    div1.value = rankNum;

    var div2 = document.createElement("div");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    div2.setAttribute("class", "moveButtons");
    button1.innerText = "^";
    button1.setAttribute("onclick", "up(this.parentElement)");
    button2.innerText = "v";
    button2.setAttribute("onclick", "down(this.parentElement)");
    div2.appendChild(button1);
    div2.appendChild(button2);

    var div3 = document.createElement("div");
    div3.setAttribute("class", "div3")

    var div3_1 = document.createElement("div");
    div3_1.innerHTML = country + " - " + songName;
    div3.appendChild(div3_1);
    var input1 = document.createElement("input");
    
    var textarea = document.createElement("textarea");
 
    textarea.value = notes;
    div3.appendChild(input1)
    div3.appendChild(textarea);

 
    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);
    //div.appendChild(input);
    document.getElementById(id).appendChild(div);
}

function up(a){
    if(a.parentElement.previousElementSibling){
        var firstNum = a.previousSibling.value
        var secondNum = a.parentElement.previousElementSibling.firstChild.value
        a.parentElement.previousElementSibling.firstChild.value = firstNum;
        a.previousSibling.value = secondNum;
        a.parentElement.parentNode.insertBefore(a.parentElement, a.parentElement.previousElementSibling);
    }
}

function down(a){
    //console.log(a.parentElement);
    //console.log(a.parentElement.nextElementSibling);
    if(a.parentElement.nextElementSibling){
        var firstNum = a.previousSibling.value
        var secondNum = a.parentElement.nextElementSibling.firstChild.value
        console.log(firstNum, secondNum);
        a.parentElement.nextElementSibling.firstChild.value = firstNum;
        a.previousSibling.value = secondNum;
        a.parentElement.parentNode.insertBefore(a.parentElement.nextElementSibling, a.parentElement);

    }
}