function contar(){
    var ini = document.getElementById("txti")
    var fim = document.getElementById("txtf")
    var passo = document.getElementById("txtp")
    var res = document.getElementById("res")

    //Validando o preenchimento de todos os campos
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert("[ERRO] Faltam dados!")
    }else{
        res.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(i < f){
        for(var c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1f449}`
            }
        }else{
            for(var c = i; c >=f; c -= p){
                res.innerHTML += `${c} \u{1f449}`
                
            }
        }

        res.innerHTML += '\u{1F3C1}'
    }
}