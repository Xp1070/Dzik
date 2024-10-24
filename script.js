let i = 1;
let punkty = 0;
let czyKliknieto = false;
let returnMaksa = false;
function changeNumber()
{
    let liczba = document.getElementById("id");
    liczba.innerText = i;
    i++;
    czyKliknieto = false;
}
let temp = setInterval(changeNumber, 1000);
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
    czySiedemWLiczbie();
    console.log(returnMaksa);
    if(parseInt(liczba.innerText) % 7 == 0 || returnMaksa == 1)
    {
        if(!czyKliknieto)
        {
            punkty++;
            punktyP.innerText = punkty
            console.log(punkty);
            czyKliknieto = true;
        }
    }
}