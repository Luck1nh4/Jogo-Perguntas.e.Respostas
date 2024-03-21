//1) Colocar o span e input radio dentro de uma div para preencher toda linha
//2) recuperar o elemento pai da opção correta e incorreta para aplicar as cores
//3) depois de selecionado a resposta, desativar as outras opções

var elementos = document.querySelectorAll('[type=checkbox]')

for( var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('change', function (e){       // evento change para verificar quando for trocado
        let marcado = e.target.value        //para chamar a checkbox selecionada
        let res = document.querySelector('.res')
        let pontos = 1
        let score = document.querySelector('.pontos')
        var conteudo = document.querySelectorAll('.conteudo')

        for(let p = 0; p < pontos.length; p++){
            if(marcado == 'correta'){
                score.innerHTML+=pontos
                res[p].innerHTML+= 'Resposta Certa'
            }
        }
        if(marcado == "correta"){       // verificação se a checkbox foi a opção correta
         
            let parentNode = e.target.parentNode        //chamando a div pai da checkbox
            parentNode.style.backgroundColor = '#A8EB12'        // add cor quando selecionada
            parentNode.classList.remove('resposta')     // aplicando a animação, removendo a class anterior e adicionando a nova class
            parentNode.classList.add('anima')

            let els = parentNode.parentNode.querySelectorAll('[type=checkbox') // selecionando todas as outras div 
            

            for(var n = 0; n < els.length; n++){        // percorrendo em loop todas as outras opções
                els[n].disabled = true      // desativando as outras opções depois de marcar uma
            }
        }else if(marcado == 'incorreta'){       // verificando caso a opção marcada seja incorreta
          
            let parentNode = e.target.parentNode        // pegando a opção selecionada e colocando outra cor correspondente a opção falsa
            parentNode.style.backgroundColor = '#D81721'
            parentNode.style.color = '#fff'
            res.innerHTML+= 'Resposta Errada'

            let els = parentNode.parentNode.querySelectorAll('[type=checkbox]')      // chamando as outras div de respostas nao selecionadas

            pontos = pontos - 1

            for(var n = 0; n < els.length; n++){        //fazendo o loop para verificar a alternativa correta
                els[n].disabled = true
            }

            let correta = parentNode.parentNode.querySelector('[value=correta]')//pegando a alternativa correta e removendo a class anterior para ativar uma nova class, fazendo a mesma animação de quando acerta a resposta
            correta.parentNode.classList.remove('resposta')
            correta.parentNode.classList.add('anima')

        }
        
    })
}