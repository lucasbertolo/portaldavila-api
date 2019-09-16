//Retorno de todos os imoveis registrados
    // Formar array imoveis com:
        // Preço
        // Bairro
        // Tipo
        // Proposito
        // Fotos - Chamar PhotoController
    //Tratamento erro caso array vazio
    //Retornar json com array   


//Retorno de imovel por id
    // Verificar se id existe
    // Tratamento erro caso id nao exista
    // Buscar informações complementares:
        // Fotos
        // Disponibilidade visita
    // Tratamento caso fotos vazias
    //Retorno Json com objeto com imovel

//Retorno de imovel por filtros
    // Verificar tipo de filtro
    // Metodo especifico para cada filtro - Criar metodo externo
    // Retornar json com array de imoveis

//Inserção de imovel
    // Verificação dos dados necessarios inseridos
    // Tratamento caso falte dados
    // Chamar photoController para inserir imagem em servidor externo
    // Salvar id retornado na tabela de photos
    // Adicionar entidade 
    // Retornar json


//Atualização de imovel -> Controller Photos
    // Verificar se id existe
    // Tratamento erro caso id nao exista
    // Merge dados e update entidade
    // Retorno Json

//Delete Imovel -> Controller Photos
    // Verificar se id existe
    // Tratamento erro caso id nao exista
    // Delete no banco e tabelas relacionadas
    // Deletar fotos na AWS 
    // Retornar Json
