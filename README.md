# curso-frontend
### EBAC

#GIT
##conceitos de versionamento
- Histórico
- Controle de versão
- Quem alterou
- O que alterou
- Quando alterou
- Todos os arquivos
- Evolução continua

  Arquivo A | Versão 1 | Versão 2
  Arquivo A | Versão 1 | Versão 2

  ## Instalação do Git
  https://git-scm.com/

  - Windows: https://git-scm.com/download/win
  - Linux (apt-get): sudo apt-get install git
  - Mac (brew): brew install git

  ## Criar conta no Github

  ## Clonar projeto
  git clone https://github.com/claudineydouglas/curso-frontend.git

  ## Commits
Informaçáo de alteração
- após testado seu código
- git add --all
- git commit -m "mensagem"
- git push (enviar alterações de codigo para o repositório)
- git pull (puxar / trazer alterações do GitHub para sua máquina)

  ## GitFlow
  Fuxo do Git

  ### Brenchs 
  são ramificações / versões paralelas
  - main / master vai para produção, quando o projeto e publicado)
  - develop 
  - DOD Definition of done: critérios de aceite
  -versionamento 1.0.0

  git checkout -b dev (cria uma branch)
  git checkout master (muda de branch)

  ## Merge
  Mescla de branchs
  Voçê pode precisar resolver conflitos manualmente

  git merge main

  ### Pull REquests
  Mesclas de branchs no repositótio
  Permite code review
  O repositorio resolve os conflitos automaticamente

  ### configure o GitFlow
  git flow init
  git flow feature start {feature/melhoria-html}


  
  
