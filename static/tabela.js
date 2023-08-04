const  tabelaRelatorio = async ()=>{
    const url = "http://127.0.0.1:5000/api"
    const divTabela  = document.getElementById("divTabela")
    divTabela.textContent=""
    try {
        const response = await fetch(url);
        const data = await response.json();
        window.jsonVMS=""
        window.jsonVMS= await data
        colunas= [ "Free disk space on C:","total disk space on C:", "PegaHospedeiro", "System description"]
        //montaComandosDisco("VMs.csv")
        //montaTabeDados( colunas , filtroVMEncontrada )
        //console.log("-----")
    } catch (error) {
        console.log(error);
    }
}

const imprimeTabela = async ()=>{
    
    console.log("window.jsonVMS")
    const divTabela  = document.getElementById("divTabela")
    divTabela.textContent="atu"
    
    if (window.jsonVMS  == undefined ) {
        await tabelaRelatorio()
    }
    

    colunas= ["host",  "Free disk space on C:","total disk space on C:", "PegaHospedeiro", "System description" ]


    const tabela = document.createElement("table")

    
    const linha = document.createElement("tr")
    colunas.forEach( coluna => {
        const colunaTabela = document.createElement("th")
        colunaTabela.textContent=coluna
        linha.appendChild(colunaTabela)
    })
    tabela.appendChild(linha)




    
    window.jsonVMS.forEach(dado => {
        const linha = document.createElement("tr")
        colunas.forEach( coluna => {
            const colunaTabela = document.createElement("td")
            colunaTabela.textContent=dado[coluna]
            linha.appendChild(colunaTabela)
        })
        tabela.appendChild(linha)
        
    });
    divTabela.appendChild(tabela)


    
}










function exportTableToCSV() {
    html= null
    filename = "tabela.csv"
    var csv = [];
    var rows = document.querySelectorAll("table tr");

    for(var i = 0; i < rows.length; i++){
        var row = [], cols = rows[i].querySelectorAll("td, th");
        for(var j = 0; j < cols.length; j++){
            row.push(cols[j].innerText);
        }
        csv.push(row.join(","));
    }
    downloadCSV(csv.join("\n"), filename);

}

function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;

	if (window.Blob == undefined || window.URL == undefined || window.URL.createObjectURL == undefined) {
		alert("Your browser doesn't support Blobs");
		return;
	}	
    csvFile = new Blob([csv], {type:"text/csv"});
    downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}