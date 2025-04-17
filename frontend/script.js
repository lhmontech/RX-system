document.getElementById('formRegistro').addEventListener('submit', function(e){
    e.preventDefault(); //Para evitar o envio padrão do formulário

    const agora = new Date();
    const dataFormatada = agora.toISOString().split('T')[0];
    const horaFormatada = agora.toTimeString().split(':').slice(0,2).join(':');

    const dados = {
        prontuario: document.getElementById('prontuario').value,
        nomepaciente: document.getElementById('nomepaciente').value,
        sexo: document.getElementById('sexo').value,
        datanascimento: document.getElementById('datanascimento').value,
        exame: document.getElementById('exame').value,
        qtdincidencias: document.getElementById('qtdincidencias').value,
        dataatual: dataFormatada, 
        horaatual: horaFormatada,
        horapedido: document.getElementById('horapedido').value,
        nometecnico: document.getElementById('nometecnico').value
    };
    fetch('http://localhost:3001/api/registros', {
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert('Registro enviado com sucesso!');
        document.getElementById('formRegistro').reset(); //Limpa o formulário após o envio
    })
    .catch(error =>{
        console.error('Erro ao enviar registro', error);
        alert('Erro ao enviar registro!');
    }); 
});