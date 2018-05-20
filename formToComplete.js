module.exports = [
    {
        dependant: 0,
        type: 'text',
        input: '#nomeAtual',
        input_data_client: 'nome'
    },{
        dependant: 0,
        type: 'text',
        input: '#nomeAnterior',
        input_data_client: 'nome'
    },
    {
        dependant: 0,
        type: 'select',
        input: '#ufLocalOrgao',
        input_data_client: 'estado'
    },
    {
        dependant: 1,
        type: 'select',
        input: '#orgao',
        input_data_client: 'orgao',
    },
    {
        dependant: 0,
        type: 'text',
        input: '#nomePai',
        input_data_client: 'nomePai',
    },
    {
        dependant: 0,
        type: 'checkbox',
        input: '#mae_nao_declarado',
        input_data_client: 'nomeMae'
    }
]