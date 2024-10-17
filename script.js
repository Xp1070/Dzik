let i = 1;
function changeNumber()
{
    let liczba = document.getElementById("id");
    liczba.innerText = i;
    i++;
}
let temp = setInterval(changeNumber, 1000);
function czySiedemWLiczbie()
{
    for(let i = 0; i < liczba.value.length; i++)
    {
        if(liczba.value[i] == "7")
        {
            
        }
    }
}
function czyDzik()
{
    let liczba = document.getElementById("id");
    if(parseInt(liczba.value) % 7 == 0)
    {

    }
}