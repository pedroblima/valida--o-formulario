const salasValidator = {
    nome: {
        required: 'campo obrigatorio',
        minLength: {
            value: 3,
            message: 'o minimo é 3'
        },
        maxLength: {
            value: 10,
            message: 'O Máximo é 10'

        }
    },
    capacidade: {
        required: 'campo obrigatorio',
        minLength: {
            value: 2,
            message: 'o minimo é 3'
        },
        maxLength: {
            value: 10,
            message: 'O Máximo é 10'

        },
        min: {
            value: 2.5,
            message: 'o valor é 2.5'
        }
    },
    tipo: {
        required: 'campo obrigatorio',
        minLength: {
            value: 2,
            message: 'o minimo é 3'
        },
        maxLength: {
            value: 20,
            message: 'O Máximo é 10'

        },
        min: {
            value: 2.5,
            message: 'o valor é 2.5'
        }
    },
    
}


export default salasValidator