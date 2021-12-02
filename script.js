// TODO :
let convert=document.getElementById("convert");
let markdown=document.getElementById("markdown");
let table=document.getElementById("table");
let arrayText=[];
convert.addEventListener("click",function(){
    const htmlTable=markdown.value;
    const s=htmlTable.trim();
    arrayText=s.split("\n");
    createHtml();
})


function createHtml(){

    var ourTable     = document.createElement("table");
    var ourTableBody = document.createElement("tbody");
   
    let e=[];
    arrayText.forEach(element => {
        e=element.trim().split("|")
        var row = document.createElement("tr");
        let length = e.length;
        e.forEach((item)=>{

            if(item!=""){
                var cell = document.createElement("td");
                var cellText = document.createTextNode(item);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            
           
        })
       
            ourTableBody.appendChild(row);
    });
   
   
    ourTable.appendChild(ourTableBody);
   
    table.appendChild(ourTable);
}


