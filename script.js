let i = 1;
let punkty = 0;
let czyKliknieto = false;
let returnMaksa = false;
let hp = 3;
let ready = false;
let speed = 1000;
let x = false;
let game;
let temp;

function endGame()
{
    let text = document.getElementById("over");
    text.innerText = "Game Over";
    clearInterval(game);
    clearInterval(temp);
    x = false;
}
function tick()
{
    if(hp <= 0)
    {
        endGame();
    }
}

function easy()
{
    speed = 1000;
}
function medium()
{
    speed = 750;
}
function hard()
{
    speed = 500;
}
function goodLuck()
{
    speed = 100;
}
function start()
{
    temp = setInterval(changeNumber, speed);
    game = setInterval(tick, 1);
    x = true;
}
function changeNumber()
{
    let hpP = document.getElementById("hp");
    if(ready == true)
    {
        hp--
        hpP.innerText = hp;
    }
    ready = false;
    let liczba = document.getElementById("id");
    liczba.innerText = i;
    i++;
    czyKliknieto = false;
    let liczbaText = document.getElementById("id").innerText;
    czySiedemWLiczbie();
    if(parseInt(liczba.innerText) % 7 == 0 || returnMaksa == true)
    {
        ready = true;
    }
}

function czySiedemWLiczbie()
{
    let liczba = document.getElementById("id").innerText;
    returnMaksa = false;
    for(let i = 0; i < liczba.length; i++)
    {
        if(liczba[i] == "7")
        {
            returnMaksa = true;
        }
    }
}
function czyDzik()
{
    let liczba = document.getElementById("id");
    let punktyP = document.getElementById("punkty");
    let hpP = document.getElementById("hp");
    czySiedemWLiczbie();
    console.log(returnMaksa);
    if(x)
    {
        if(parseInt(liczba.innerText) % 7 == 0 || returnMaksa == 1)
        {
          if(!czyKliknieto)
            {
                punkty++;
                punktyP.innerText = punkty
                console.log(punkty);
                czyKliknieto = true;
               ready = false;
            }
        }
        else
        {
            hp--;
           hpP.innerText = hp;
        }
    }
}