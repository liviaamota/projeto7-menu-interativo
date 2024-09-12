let menu = alert(`
    As opções disponíveis são:
    
    1- Opção 1
    2- Opção 2
    3- Opção 3
    4- Opção 4
    5- Encerrar
    `)
    
    do {
        menu = prompt(`
        Escolha uma das opções abaixo:
    
        1- Opção 1
        2- Opção 2
        3- Opção 3
        4- Opção 4
        5- Encerrar
        `)
    
        switch (menu) {
           case '1':
                alert('A opção escolhida foi: Opção 1.')
                break
            case '2':
                alert('A opção escolhida foi: Opção 2.')
                break
            case '3':
                alert('A opção escolhida foi: Opção 3.')
                break
            case '4':
                alert('A opção escolhida foi: Opção 4.')
                break
            default:
                alert('O sistema está sendo encerrado.')
        }
    
    } while (menu === '1' || menu === '2' || menu === '3' || menu === '4')
    
    
    

