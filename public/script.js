const inputCEP = document.querySelector('#cep');
const resultTitle = document.querySelector('#resultTitle');
const resultCEP = document.querySelector('#resultCEP');
const cepBtn = document.querySelector('.cepbtn');
const loader = document.querySelector('.loader');

async function seachCEP(cep) {
  const cepFormatted = cep.replace(/\D/g, '').replace('-', '');
  if (cepFormatted.length !== 8) {
    inputCEP.style.border = '1px solid red';
  }

  console.log(cepFormatted);
  loader.style.display = 'inline-block';
  resultCEP.style.display = 'none';
  resultTitle.style.display = 'none';

  await fetch(`https://viacep.com.br/ws/${cepFormatted}/json/`)
    .then(response => response.json())
    .then(data => {
      if (data.cep == 'undefined' || data.cep == undefined) {
        resultTitle.innerHTML = 'CEP não encontrado';
        resultTitle.style.display = 'inline-block';
        inputCEP.style.border = '1px solid red';
        loader.style.display = 'none';
        return;
      }

      resultCEP.innerHTML = `
          <div>
            <label>CEP:</label>
            <input placeholder="${data.cep}" type="text" disabled value="${data.cep}"></input>
          </div>
        
          <div>
            <label>Logradouro:</label>
            <input placeholder="${data.logradouro}" type="text" disabled value="${data.logradouro}"></input>
          </div>
        
          <div>
            <label>Complemento:</label>
            <input
              placeholder="${data.complemento}"
              type="text"
              ${data.complemento !== '' ? '' : 'autofocus'}
              ${data.complemento !== '' ? 'disabled' : ''}
              value="${data.complemento !== '' ? '' : 'NONE'}"
            ></input>
          </div>
        
          <div>
            <label>Bairro:</label>
            <input placeholder="${data.bairro}" type="text" disabled value="${data.bairro}"></input>
          </div>
        
          <div>
            <label>Localidade:</label>
            <input placeholder="${data.localidade}" type="text" disabled value="${data.localidade}"></input>
          </div>
        
          <div>
            <label>UF:</label>
            <input placeholder="${data.uf}" type="text" disabled value="${data.uf}"></input>
          </div>
        
          <div>
            <label>DDD:</label>
            <input placeholder="${data.ddd}" type="text" disabled value="${data.ddd}"></input>
          </div>
      `;

      inputCEP.setAttribute('autofocus', 'false');
      loader.style.display = 'none';
      resultCEP.style.display = 'grid';
      resultTitle.style.display = 'block';
      inputCEP.style.border = '1px solid green';
    })
    .catch(err => {
      resultCEP.innerHTML = `
        <input type="text" disabled placeholder="CEP não encontrado" value="CEP não encontrado"></input>
      `;
      inputCEP.style.border = '1px solid red';
      
      loader.style.display = 'none';
      resultCEP.style.display = 'grid';
      resultTitle.style.display = 'block';
    });

}

cepBtn.addEventListener('click', e => {
  e.preventDefault();
  seachCEP(inputCEP.value);
  console.log(inputCEP.value);
});

document.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    seachCEP(inputCEP.value);
    console.log(inputCEP.value);
  }
});