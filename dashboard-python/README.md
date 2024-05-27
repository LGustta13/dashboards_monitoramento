<h1 align="center"> Dash Python </h1>

<p align="center">
Aplicação web que apresenta indicadores sobre gestão e jornada de frotas <br/>
  
<br>

<p align="center">
  <img alt="projeto Dash Python" src=".github/preview.png" width="50%">
</p>

## 🚀 Tecnologias


Esse projeto foi desenvolvido com as seguintes tecnologias:

- Python
- Pipenv
- Dash
- Flask
- Plotly

## 💻 Projeto

A demanda surgiu como ...

- Documentação Dash Plotly: [Link](https://dash.plotly.com/)
- Documentação Flask: [Link](https://flask.palletsprojects.com/en/3.0.x/)
- Instalação Pipenv: [Link](https://medium.com/analytics-vidhya/why-pipenv-over-venv-for-python-projects-a51fb6e4f31e)
  
## 🔖 Layout
  
O Layout pode ser encontrado no Figma por meio do seguinte [Link](#)

## ⏯️ Testes
- 
- 

## 🧮 Execução

## 🧰 Configurações

### Instalando o Python 3.12

Será utilizado o Python versão [3.12.1](https://www.python.org/downloads/release/python-3121/). Durante a instalação, marcar a caixa **Adicionar o python no PATH** e seguir com a instalação manual. Observar se a **instalação do pip** está marcada.
```
py --version    //Python 3.12.1
pip3 --version  //pip 23.2.1 from ...
```

### Instalando o Pipenv

*pipenv* é um gerenciador de pacotes
```
pip3 install pipenv
```

Gerar os arquivos PipLock
```
pipenv install
```

Executar o ambiente virtual
```
pipenv shell
```
Deste ponto em diante, todas as bibliotecas python instaladas vão ficar somente no ambiente virtual, registradas no PipLock.

### Instalando o Pipenv

Executar o ambiente virtual
```
pipenv shell
```

Baixar a biblioteca, conforme a [documentação](https://dash.plotly.com/installation)
```
pipenv install dash
pipenv install pandas
```

Para visualizar as bibliotecas instaladas
```
pipenv run pip3 freeze
ou
pip3 freeze
```

Sair do shell
```
exit
```

### Executando a aplicação

Inserir o seguinte script no arquivo PipFile
```
...

[scripts]
dev = "python ./app.py"

...
```

Executar o comando para gerar o servidor de desenvolvimento
```
pipenv run dev
```

## 💻 Anotações
