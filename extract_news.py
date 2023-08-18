import requests
from bs4 import BeautifulSoup

url = "https://www.boaempresa.com.br/go/anapolis/condominios/3"

# Faz a solicitação HTTP para obter o conteúdo da página
response = requests.get(url)
content = response.content

# Cria um objeto BeautifulSoup para analisar o HTML
soup = BeautifulSoup(content, "html.parser")

# Encontra todas as tags <h2> na página
h2_tags = soup.find_all("h2")

# Itera sobre as tags <h2> e imprime o conteúdo delas
for h2_tag in h2_tags:
    h2_content = h2_tag.get_text().strip()
    print(h2_content)
    print("=" * 80)  # Separador entre as entradas
