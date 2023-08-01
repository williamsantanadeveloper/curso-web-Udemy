validade_do_dia = (dia) => {
    switch (dia) {
        case dia == 'Segunda':
        case dia == 'Terça':   
        case dia == 'Quarta': case dia == 'Quinta': 
        case 'Sexta':
            console.log('Dia útil')
            break
    }
}
validade_do_dia('Segunda')
validade_do_dia('Sexta')
validade_do_dia('Terça')