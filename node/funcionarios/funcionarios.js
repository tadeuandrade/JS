const url = 'http://localhost:80/teste.php'
const axios = require('axios')

const pedido1 = e => e.CD_ATENDIMENTO === '162'
const usuario = e => e.NM_USUARIO = 'M039701'
const ultimopedido = (pedido, pedAtual) => {
    return pedido.CD_PED_RX > pedAtual.CD_PED_RX ? pedido : pedAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const ped = funcionarios.filter(pedido1).reduce(ultimopedido)
    console.log(ped)
    //console.log(funcionarios)
    //const ped = funcionarios.filter(pedido1)
    //console.log(ped)
    //console.log(funcionarios.filter(e => e.cd_ped_rx = 2928))
    //console.log(funcionarios.map(funcionarios.cd_ped_rx))
})