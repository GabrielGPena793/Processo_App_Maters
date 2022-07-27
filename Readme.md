# Projeto de seleção APP Masters
https://www.appmasters.io/en

## Comandos do projeto

- Instalando as dependências 

        npm install


- Rodando o projeto 

       npm run dev


- Rodar apenas para testes

        npm test
  

---

## Etapa 2

- Foi adicionado o typescript no projeto + configurações
- Organização de pastas
- Novos testes
- Atendendo os requisitos pedidos, sem mais nem menos
- Rota Post /donation, recebe no body os seguintes dados

      {
          name: string;
          phone: string;
          email?: string;
          zip: string;
          city: string;
          state: string;
          streetAddress: string;
          number: string;
          complement?: string;
          neighborhood: string;
          deviceCount: number;
          devices: [
            {
               type: string;
                condition: string;
            }]
       }
