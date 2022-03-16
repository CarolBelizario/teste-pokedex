/*quando clicar no pokemon da listagem, temos que esconder o cartão aberto e mostrar o solicitado, aqui mexe com a listagem e o cartão*/

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemons.forEach(pokemon => {
    //trabalhar com evento de clique feito pelo usário na listagem



        pokemon.addEventListener('click', () => {
        //remover a classe 'aberto' só do  cartão atual
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto') 
        
        
         //ao clicar, o ID do pokemon é selcionado para saber qual será exibido
        const idPokemonSelecionado = pokemon.attributes.id.value

        //abre o cartão selecionado  
        const idCartaoParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonAbrir = document.getElementById(idCartaoParaAbrir)    
        cartaoPokemonAbrir.classList.add('aberto')

          
        //remover a classe ativo que está marcada no pokemon selecionado - ver no console.log essa troca
          const pokemonAtivoListagem = document.querySelector('.ativo')
          pokemonAtivoListagem.classList.remove('ativo')

          //adicionar a classe ativo no item selecionado (para botão solicitado mudar a cor)
          const pokemonSelecionado = document.getElementById(idPokemonSelecionado)
          pokemonSelecionado.classList.add('ativo')
        })
})