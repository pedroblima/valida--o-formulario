const alunosValidator = {
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
    cpf: {
        required: 'campo obrigatorio',
        minLength: {
            value: 2,
            message: 'o minimo é 3'
        },
        maxLength: {
            value: 14,
            message: 'O Máximo é 14'

        },        
    },
    Matricula: {
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
    email: {
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


export default alunosValidator