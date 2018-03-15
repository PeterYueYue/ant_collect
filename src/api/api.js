import axios from 'axios';



let base = 'http://192.168.1.122:8080';

const config = {
    "name": "order.orderlist",
    "format": "json",
    "sign": "5D23A3D083914E83937787A5D23E4CC9",
    "version": "1.0",
    "nonce": "3dd5332b-261c-4d6d-9359-289ede05cc6e",
    "timestamp": 1520579005446,
    "token": "3F3TEMH74565Q5QORHNPE76UZM6VT4JPWVV4OPUNTGAXLLRLC6B5GYU3LW34YHVNOEFL2LXPVT24UAJWCBI7NJ42KSYJ2KXG2OVQSA6ZMU4VMMCLQUKIRXAWTX2BD3K6MDOZDBJ4Q62CYGOB7DVAUP4CYQAHL3JSQRIG7P2UO77IZBN7W3E4RZK42VEEUWCHGAZLS7LGRB4EVIIYSQVYYSGAETEUZC4JUVVV2UDRKIOBGXURUGYCOGKTBVFLZYU2QFPF2G4I7DVNKBWCOFWBQDLZLJYEDSPIL6T46KLPZ4O2ZIFJROTQ"
} 




//回收分类
export default {
    getClassify(params){
        // return axios.post(`${base}/ali/api`,config,params).then(res => res.data);


        axios.post('http://192.168.1.122:8080/ali/api',{

            "app_key": "app_id_1",
            "data": {
                 "level":0
            },
            "name": "category.listTop",
            "format": "json",
            "sign": "284765CD4153CC90BAD97BDFC2008C75",
            "version": "1.0",
            "nonce": "45418cfc-5ad2-4f48-8fe7-09ded212d999",
            "timestamp": 1520579620270,
            "token": "F7AHNFQOKPRQTKYHDWUKCR2X5IP7P4IQNNCPRN6VQNVN6NHTTULOLHZS5OTDCQQBOOX3LCUSO4NFA2KG3P2LEE7CERH5SHVK5VFUCPKQE3XXUU6WCT53B4KKE2LXNZTEOFKMADQBRNAD3ET3WM2ZUT4OQNOF56ZT6PPIMXBRL2AEU4UTKXVVUC2JDN6KUOY34HXU26HUYUXNX2ASEPBTGWSFSHT7VJ2NSENIJGSLHMQ7OUVBMRKL6EWH3TPGXJV5JFUZKW7N5C5IF77MM4FRNSRF4Y7KIHPALW44JLFAX7BHZQBR6LLA"
        
    }
            
        )
        .then(function (response) {

            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        }

}