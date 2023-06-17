const SPTCValidator = {
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
   adicional: {
    required: 'campo obrigatorio',
    minLength: {
        value : 5,
        message: 'o minimo é 5'
    },
    maxLength: {
        value: 20,
        message: 'o maximo é 20'
    }
   }
   
    
}


export default SPTCValidator