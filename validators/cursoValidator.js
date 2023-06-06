const cursoValidator = {
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
    duracao: {
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
    modalidade: {
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
    }
}


export default cursoValidator