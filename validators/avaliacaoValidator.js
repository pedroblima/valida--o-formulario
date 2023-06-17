const avaliacaoValidator = {
    nome: {
        required: 'Campo Obrigatorio',
        minLength: {
            value: 3,
            message: 'o minimo é 3'
        },
        maxLength: {
            value: 50,
            message: 'O Máximo é 10'

        }
    },
    email: {
        required: 'Campo Obrigatorio',
        minLength: {
            value: 2,
            message: 'o minimo é 3'
        },
           
    },
    pretende: {
        required:'Campo Obrigatorio',
    },
    nivel: {
        required:'Escolha uma opção'
    },
    dificuldade: {
        required:'campo Obrigatorio',
        maxLength: {
            value: 50,
            message: `O maximo é 30`
        }


    }
   
    
}


export default avaliacaoValidator