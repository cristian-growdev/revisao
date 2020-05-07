document.getElementById('btnAddPessoa').onclick = adicionarPessoa;
document.getElementById('btnQdtSExo').onclick = quantidadeSexo;
document.getElementById('btnHomemAlto').onclick = compararAltura;

const listaPessoa = [];
const homens = [];
const mulheres = [];

function adicionarPessoa(){

    const pessoa = {
        nome: document.getElementById('txtNome').value,
        sexo:   document.getElementById('txtSexo').value,
        altura: parseFloat(document.getElementById('txtAltura').value),
    }

    listaPessoa.push(pessoa);

}

function quantidadeSexo() {

    for(let pessoa of listaPessoa){
        if(pessoa.sexo === 'M'){
            homens.push(pessoa);
        } else {
            mulheres.push(pessoa);
        }
    }

    document.getElementById('lblMasculino').innerHTML = `Existem ${homens.length} homens nesta lista.`
    document.getElementById('lblFeminino').innerHTML = `Existem ${mulheres.length} mulheres nesta lista.`
}

function compararAltura(){
    let homemMaisAlto;
    let mulherMaisAlta;

    for(let i = 1; i < homens.length; i++){
        if(homens[i].altura > homens[i-1].altura){
            homemMaisAlto = homens[i];
        }
    }

    for(let i = 1; i < mulheres.length; i++){
        if(mulheres[i].altura > mulheres[i-1].altura){
            mulherMaisAlta = mulheres[i];
        }
    }

    document.getElementById('lblHomemAlto').innerHTML =`${homemMaisAlto.nome} é o mais alto.`
    document.getElementById('lblMulherAlta').innerHTML = ` ${mulherMaisAlta.nome} é a mais alta.`
}