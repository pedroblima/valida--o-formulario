const PFValidator = {
    nome: {
        required: 'campo obrigatorio',
        minLength: {
            value: 3,
            message: 'o minimo é 3'
        },
        maxLength: {
            value: 50,
            message: 'O Máximo é 10'

        }
    },
    CPF: {
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
    nivel: {
        required:'Escolha uma opção',
    }
   
    
}


export default PFValidator