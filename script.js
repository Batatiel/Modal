const btna = document.querySelector('.btnAbrir')
const btnb = document.querySelector('.btnFechar')
//fazendo evento de clique
btna.addEventListener('click', btnAbrir)
btnb.addEventListener('click', btnFechar)

function btnAbrir()
{
    const modal = document.querySelector('.modal')
    const modalAtual = modal.style.display

    if(modalAtual == 'block')
    {
        modal.style.display = 'none'
    }
    else
    {
        modal.style.display = 'block'
    }
}

function btnFechar()
{
    const modal = document.querySelector('.modal')
    const modalAtual = modal.style.display

    if(modalAtual == 'none')
    {
        modal.style.display = 'block'
    }
    else
    {
        modal.style.display = 'none'
    }
}