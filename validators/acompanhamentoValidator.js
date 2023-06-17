const acompanhamentoValidator = {
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
    materia: {
        required:'campo obrigatorio',
    },
    dedicou: {
        required:'campo obrigatorio',
    },
    escala: {
        required:'campo obrigatorio',
    }
   
    
}


export default acompanhamentoValidator