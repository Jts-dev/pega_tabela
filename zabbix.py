def pega_tabela(zapi):
    grupo="25"

    lista_de_hostid = zapi.host.get(output=["host", "hostid"] , groupids=grupo  )
    chaves= [ "Free disk space on C:","total disk space on C:", "PegaHospedeiro", "System description"]
    # items = zapi.item.get(output=["lastvalue","name",  "hostid"], search={'name':chaves[2]})
    tabela_final=[]

    
    for x in lista_de_hostid :
        novo=x
        for chave in chaves:
            items = zapi.item.get(output=["lastvalue", "name", "hostid"], search={'name':chave} ,groupids=grupo  )
            dado_coletado = [  p["lastvalue"] for p in items if p['hostid'] == x["hostid"]]
            dado_coletado = dado_coletado[0] if (len(dado_coletado) > 0 ) else ""
            if ( dado_coletado.find("Get-ChildItem -Path ") >= 0   ):
                dado_coletado=""
            if  (dado_coletado.find("Microsoft") > 0 ):
                dado_coletado= dado_coletado.split("Microsoft")[1]
               
            novo.update({chave  : dado_coletado     })
    
        tabela_final.append(novo)
        
    #print("items")
    return tabela_final
