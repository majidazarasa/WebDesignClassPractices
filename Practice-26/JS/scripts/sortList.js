let list=[];
let maxList = 10;

function addToList()
{
    let numValue = document.getElementById("number").value;
    if( list.length < maxList && numValue != "" )
        list[list.length] = numValue;
    showList();
}

function deleteFromList()
{
    if( list.length > 0 )
        list.length--;
    showList();
}

function showList()
{
    let i;
    document.getElementById("list").innerHTML = "<b> List : </b><br><br>";
    for(i = 0; i < list.length; i++)
    {
        document.getElementById("list").innerHTML += "<b> N[ "+i+" ] = "+list[i]+" </b><br>";
    }
}

function sort( type )
{
    let i, j;
    debugger
    if(list.length > 0)
    {
        for(i = 0; i < list.length-1; i++)
        {
            for(j = i+1; j < list.length; j++)
            {
                if( (type == 0 && parseInt(list[i]) > parseInt(list[j]) ) || // Incremental
                    (type == 1 && parseInt(list[i]) < parseInt(list[j]) ) ) // Decremental
                {   
                    listChangeIndex( i ,j );
                }
            }
        }
    }
    showList();
}

function listChangeIndex( i1 , j1 )
{
    let temp;

    temp = list[i1];
    list[i1] = list[j1];
    list[j1] = temp;
}