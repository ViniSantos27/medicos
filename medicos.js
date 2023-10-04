const medicos = [
    {
        nome: 'vinicius',
        sobrenome: 'santos',
        genero: 'masculino',
        generoDR: "DR",
        imagemPerfil: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbHlpiI9sUHM2cPhuKvPJJu4Tkblo6wXkJHvvWs2ZkaDVVTnHg_TKmRIkjcFa16_HSEvU&usqp=CAU'

    },
    {
        nome: 'Matheus',
        sobrenome: 'nunes',
        genero: 'Masculino',
        generoDR: "DR",
        imagemPerfil: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOzV90a2yBrpg8kGALcpmTyPDLoIJH5GE5yg&usqp=CAU'

    },
    {
        nome: 'lucas',
        sobrenome: 'silva',
        genero: 'Nao-binario',
        generoDR: "Dr(e)",
        imagemPerfil: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ba255cbd-5be1-48e0-961e-c7e113f939d9/d9hr6oq-bdf9c937-c1a7-4802-a4a6-1d9be7725774.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JhMjU1Y2JkLTViZTEtNDhlMC05NjFlLWM3ZTExM2Y5MzlkOVwvZDlocjZvcS1iZGY5YzkzNy1jMWE3LTQ4MDItYTRhNi0xZDliZTc3MjU3NzQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.eRcn651qg1eUv5nsvAiNLZ38f4nGyEr1vstR-vAtSKI'

    },
];
const htmlList = document.querySelector('#medicos');

for (let medico of medicos) {

    
    let apresentacao = "";

    switch (medico.genero) {
        case 'Nao-binario':
            apresentacao = `Dr(e) ${medico.nome} ${medico.sobrenome}`;
            break;
        case 'Masculino':
            apresentacao = `Dr. ${medico.nome} ${medico.sobrenome}`;
            break;
        case 'Feminino':
            apresentacao = `Dr(a) ${medico.nome} ${medico.sobrenome}`;
            break;
        default:
            apresentacao = `Dr(a) não informou o genero`;


    }
     const p = document.createElement('p');
     p.textContent = `${apresentacao}`;
    htmlList.appendChild(p);

    const img = document.createElement('img')
    img.src = medico.imagemPerfil;
    htmlList.appendChild(img)

}