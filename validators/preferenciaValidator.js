const preferenciaValidator = {
    nome: {
        required: 'campo obrigatorio',
        minLength: {
            value: 3,
            message: 'o minimo é 3'
        },
        maxLength: {
            value: 50,
            message: 'O Máximo é 50'

        }
    },
    email: {
        required: 'campo obrigatorio',
        minLength: {
            value: 2,
            message: 'o minimo é 3'
        },
        maxLength: {
            value: 30,
            message: 'O Máximo é 30'

        },        
    },
    preferido: {
        required:'Escolha uma opção',
    },
    estuda: {
        required:'Escolha uma opção',
    }
   
    
}


export default preferenciaValidator