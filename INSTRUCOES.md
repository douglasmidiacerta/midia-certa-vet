# 📋 Instruções de Instalação e Execução

## ✅ Pré-requisitos

Antes de começar, você precisa ter instalado:
- **Node.js** (versão 16 ou superior) - [Download aqui](https://nodejs.org/)
- **npm** (vem junto com o Node.js)

Para verificar se já tem instalado, abra o terminal e digite:
```bash
node --version
npm --version
```

## 🚀 Como Executar o Projeto

### Passo 1: Abrir o Terminal
Abra o terminal/prompt de comando na pasta do projeto (onde está o arquivo `package.json`)

### Passo 2: Instalar Dependências
```bash
npm install
```
Este comando vai baixar todas as bibliotecas necessárias (React, Vite, Tailwind CSS, etc.)

### Passo 3: Iniciar o Servidor de Desenvolvimento
```bash
npm run dev
```
O projeto vai abrir automaticamente no navegador em `http://localhost:3000`

### Passo 4: Ver a Landing Page
Pronto! A landing page estará rodando e você pode ver todas as seções funcionando.

## 🔧 Personalizações Importantes

Antes de usar em produção, você precisa personalizar alguns dados:

### 1. Número de WhatsApp e Telefone
Arquivo: `src/components/CTA.jsx`
```javascript
// Linha 5 - Substitua pelo seu número real
const phoneNumber = '5531999999999'; // Formato: 55 + DDD + número
```

### 2. Informações de Contato no Footer
Arquivo: `src/components/Footer.jsx`
```javascript
// Linha 77-79 - Substitua pelos seus dados
<li>Tel: +55 31 99999-9999</li>
<li>Email: contato@midiacertavet.com.br</li>
<li>Local: Belo Horizonte, MG</li>
```

### 3. Nome da Marca (Opcional)
Arquivo: `src/components/Header.jsx` (linha 34)
```javascript
Mídias Certa Vet  // Substitua pelo nome da sua empresa
```

## 📦 Gerar Versão para Produção

Quando estiver tudo pronto e testado, gere a versão otimizada:

```bash
npm run build
```

Isso vai criar uma pasta `dist/` com todos os arquivos otimizados prontos para publicar no servidor/hospedagem.

### Preview da Build
Para testar a versão de produção localmente:
```bash
npm run preview
```

## 🌐 Como Publicar Online

Você pode publicar de várias formas:

### Opção 1: Vercel (Recomendado - Grátis)
1. Crie uma conta em [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. Deploy automático!

### Opção 2: Netlify (Grátis)
1. Crie uma conta em [netlify.com](https://netlify.com)
2. Arraste a pasta `dist/` para o site
3. Pronto!

### Opção 3: Hospedagem Tradicional
1. Execute `npm run build`
2. Faça upload dos arquivos da pasta `dist/` via FTP
3. Configure o domínio

## 🎨 Estrutura de Arquivos

```
├── index.html                 # HTML principal
├── package.json               # Dependências do projeto
├── tailwind.config.js         # Configuração de cores e estilos
├── vite.config.js            # Configuração do Vite
├── src/
│   ├── main.jsx              # Entrada da aplicação
│   ├── App.jsx               # Componente principal
│   ├── index.css             # Estilos globais + Tailwind
│   └── components/           # Todos os componentes da página
│       ├── Header.jsx        # Navbar sticky
│       ├── Hero.jsx          # Seção hero com gradiente
│       ├── Problemas.jsx     # 4 problemas
│       ├── Solucao.jsx       # 3 soluções
│       ├── Resultados.jsx    # 4 resultados
│       ├── ComoFunciona.jsx  # 3 passos
│       ├── Portfolio.jsx     # 7 clientes
│       ├── FAQ.jsx           # Perguntas frequentes
│       ├── CTA.jsx           # Call-to-action final
│       └── Footer.jsx        # Rodapé
```

## 🐛 Problemas Comuns

### Erro: "npm não é reconhecido"
**Solução**: Você precisa instalar o Node.js. [Download aqui](https://nodejs.org/)

### Erro: "Port 3000 already in use"
**Solução**: Feche outros projetos rodando na porta 3000 ou edite o `vite.config.js` para usar outra porta.

### Página em branco no navegador
**Solução**: Verifique o console do navegador (F12) para ver erros. Certifique-se que executou `npm install`.

## 📞 Suporte

Se tiver dúvidas ou problemas:
1. Verifique o console do navegador (F12)
2. Leia os erros no terminal
3. Confira se todos os arquivos estão na pasta correta

## ✨ Recursos da Landing Page

✅ Todas as 11 seções implementadas  
✅ Design responsivo (mobile, tablet, desktop)  
✅ Cores e branding aplicados  
✅ FAQ com acordeão interativo  
✅ Botões de WhatsApp e telefone funcionais  
✅ Navegação suave (smooth scroll)  
✅ Menu sticky no topo  
✅ Hover effects nos cards  
✅ SEO otimizado  
✅ Performance otimizada  

## 🎯 Próximos Passos

1. ✅ Executar `npm install`
2. ✅ Executar `npm run dev`
3. ✅ Testar no navegador
4. ✏️ Personalizar números de contato
5. ✏️ Adicionar screenshots reais dos clientes no portfólio
6. 📊 Configurar Google Analytics (opcional)
7. 🚀 Fazer deploy online

---

**Boa sorte com sua landing page! 🚀**
