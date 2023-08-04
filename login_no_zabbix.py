from pyzabbix import ZabbixAPI

def login_no_zabbix():
    zapi = ZabbixAPI("http://179.190.52.148:4444/zabbix")
    zapi.login("Admin","zabbix")
    return(zapi)