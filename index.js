var axios = require('axios');


// coloque o cep desejado nessa variável. 
let cep = '89249000'

var data = `pagina=%2Fapp%2Fendereco%2Findex.php&cepaux=&mensagem_alerta=&endereco=${cep}&tipoCEP=ALL`;

var config = {
  method: 'post',
  url: 'https://buscacepinter.correios.com.br/app/endereco/carrega-cep-endereco.php',
  headers: { 
    'Accept': '*/*', 
    'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7', 
    'Cache-Control': 'no-store, no-cache, must-revalidate', 
    'Connection': 'keep-alive', 
    'Cookie': '_gid=GA1.3.1573871546.1655690324; _ga=GA1.3.909481499.1655690324; buscacep=nb34bf3ipl1l68j9d63afd730d; BIGipServerpool_rancher_buscacepinter=3275358218.47873.0000; internet=701038602.47873.0000; _ga_J59GSF3WW5=GS1.1.1655690323.1.1.1655690463.0', 
    'Origin': 'https://buscacepinter.correios.com.br', 
    'Referer': 'https://buscacepinter.correios.com.br/app/endereco/index.php', 
    'Sec-Fetch-Dest': 'empty', 
    'Sec-Fetch-Mode': 'cors', 
    'Sec-Fetch-Site': 'same-origin', 
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36', 
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8', 
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"', 
    'sec-ch-ua-mobile': '?0', 
    'sec-ch-ua-platform': '"Linux"'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});
