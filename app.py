from flask import (Flask, render_template)
#from flask import (Flask ,render_template)
#from zabbix import ( busca_item_por_key ,pesquisa_item_por_key_texto  ,  busca_trigger    ,tabela_completa ,tabela_grupo)
from login_no_zabbix import  login_no_zabbix
from zabbix import pega_tabela

app = Flask(__name__)


@app.route("/")
def pagina_raiz():

    return (render_template("tabela.html"))


@app.route("/api")
def api_tabela():
    zapi=login_no_zabbix()
    x=pega_tabela(zapi)
    return x












'''
@app.route("/item")
def pagina_item():
    zapi= login_no_zabbix()

    #return busca_item_por_key(zapi,  "vfs.fs.size[c:,free]"  )
    return busca_item_por_key(zapi,  "system.uname"  )


@app.route("/api/disco")
def api_disco():
    zapi= login_no_zabbix()
    return busca_item_por_key(zapi,  "vfs.fs.size[c:,free]"  )
    #return busca_item_por_key(zapi,  "a3tech.get-vm[]"  )
'''