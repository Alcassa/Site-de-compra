window.onload =() =>{
    let botao;
    botao=document.querySelector("input[type=button]");
    botao.onclick=()=>{
        let qte;
        qte=document.querySelector("input[type=number]");
        let item;
        item=document.querySelector("input[type=text]");
        let tabela=document.querySelector("tbody");
        let linha=`<tr>
                        <td>${item.value}</td>
                        <td>${qte.value}</td>
            `
            tabela.innerHTML+=linha;
            item.value="";
            qte.value="";
    }
}