# 🐾 Landing Page - Mais Agendamentos para Clínicas Veterinárias

[![Deploy Status](https://img.shields.io/badge/deploy-automatic-brightgreen)]()
[![License](https://img.shields.io/badge/license-Private-blue)]()

Uma landing page de conversão profissional focada em capturar contatos de donos de clínicas veterinárias e gerar agendamentos através de Google Ads.

---

## 🎯 Objetivo

Aumentar agendamentos de clínicas veterinárias através de:
- Site profissional otimizado para conversão
- Google Ads estratégico
- Rastreamento transparente de resultados

### 📊 Resultados Esperados:
- **+28** novos agendamentos por mês
- **4.8x** de ROI (Retorno sobre Investimento)
- **R$ 15** custo por agendamento
- **92%** taxa de resposta no WhatsApp

---

## 🚀 Deploy Automático

Este projeto usa **GitHub Actions** para deploy automático no cPanel.

### Como funciona:
1. Faça alterações nos arquivos localmente
2. Execute: `git add . && git commit -m "sua mensagem" && git push`
3. GitHub Actions envia automaticamente para o servidor via FTP
4. Site atualiza em ~30 segundos

📚 **Documentação completa**: [WORKFLOW-RAPIDO.md](WORKFLOW-RAPIDO.md)

---

## 📦 Estrutura do Projeto

```
├── index-cpanel.html       # HTML principal da landing page
├── styles.css              # Estilos CSS completos
├── script.js               # JavaScript (menu, FAQ, animações)
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions para deploy automático
├── .cpanel.yml             # Configuração de deploy cPanel
└── documentação/
    ├── GUIA-GITHUB-CPANEL.md    # Guia completo GitHub + cPanel
    ├── WORKFLOW-RAPIDO.md        # Workflow rápido de uso diário
    ├── SCRIPTS-DEPLOY.md         # Scripts de deploy
    ├── GUIA-CPANEL.md            # Guia de upload manual
    └── CHECKLIST-UPLOAD.txt      # Checklist de publicação
```

---

## 🎨 Seções da Landing Page

1. ✅ **Header/Navbar** - Menu sticky responsivo
2. ✅ **Hero** - Headline + estatísticas + gradiente
3. ✅ **Problemas** - 4 cards de dores do cliente
4. ✅ **Solução** - 3 pilares da solução
5. ✅ **Resultados Reais** - 4 casos de sucesso
6. ✅ **Como Funciona** - 3 passos simples
7. ✅ **Portfólio** - 7 clientes reais com links
8. ✅ **FAQ** - Acordeão interativo
9. ✅ **CTA Final** - Botões WhatsApp + Telefone
10. ✅ **Footer** - Informações completas

---

## 💻 Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Flexbox, Grid, Animations, Variables
- **JavaScript (Vanilla)** - Interatividade sem dependências
- **GitHub Actions** - Deploy automático
- **FTP Deploy** - Sincronização com cPanel

---

## 🛠️ Configuração Inicial

### 1. Clonar/Baixar Repositório
```bash
git clone https://github.com/SEU-USUARIO/landing-page-vet.git
cd landing-page-vet
```

### 2. Personalizar Dados
Edite `index-cpanel.html`:
- **Linha ~470**: Número do WhatsApp
- **Linha ~472**: Número do telefone
- **Linha ~531-533**: Email e endereço no footer

### 3. Configurar Deploy Automático

#### GitHub Actions (Recomendado):
1. GitHub → Settings → Secrets → Actions
2. Adicionar secrets:
   - `FTP_SERVER`: ftp.seudominio.com.br
   - `FTP_USERNAME`: usuario@seudominio.com.br
   - `FTP_PASSWORD`: suaSenhaFTP

#### cPanel Git (Alternativa):
1. Editar `.cpanel.yml` com seu usuário
2. cPanel → Git Version Control
3. Clonar repositório do GitHub

📚 Guia completo: [GUIA-GITHUB-CPANEL.md](GUIA-GITHUB-CPANEL.md)

---

## 🔄 Workflow de Desenvolvimento

```bash
# 1. Fazer alterações nos arquivos
# (editar HTML, CSS ou JS)

# 2. Commitar
git add .
git commit -m "Descrição da mudança"

# 3. Enviar para GitHub (deploy automático acontece aqui!)
git push
```

⏱️ **Tempo de deploy**: ~30 segundos

---

## 📱 Responsividade

- ✅ **Mobile** (< 768px): Menu hamburger, grid 1 coluna
- ✅ **Tablet** (768px - 1023px): Grid 2 colunas
- ✅ **Desktop** (> 1024px): Grid 3-4 colunas, setas entre steps

---

## 🎨 Cores e Branding

| Elemento | Cor | Código |
|----------|-----|--------|
| Primária | Roxo/Azul | `#667eea` |
| Secundária | Roxo Escuro | `#764ba2` |
| CTA | Vermelho | `#ff6b6b` |
| Sucesso | Verde | `#51cf66` |
| Neutro | Cinza Claro | `#f8f9ff` |

Edite em `styles.css` linhas 16-23 (variáveis CSS)

---

## 🔍 SEO

- ✅ Title tag otimizado
- ✅ Meta description
- ✅ Meta keywords
- ✅ Open Graph tags
- ✅ Estrutura semântica
- ✅ URLs amigáveis nos links

---

## 📊 Métricas e Tracking

### Para adicionar Google Analytics:
Adicione antes de `</head>` no `index-cpanel.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🧪 Testes

### Teste Local:
Abra `index-cpanel.html` no navegador

### Teste de Deploy:
1. Adicione um comentário no HTML
2. Commit e push
3. Aguarde ~30 segundos
4. Acesse o site e verifique (Ctrl+U para ver código)

### Checklist de Testes:
- [ ] Design aparece corretamente
- [ ] Menu mobile funciona
- [ ] FAQ abre e fecha
- [ ] Botões WhatsApp/Telefone funcionam
- [ ] Links do portfólio abrem em nova aba
- [ ] Smooth scroll funciona
- [ ] Responsivo em mobile/tablet/desktop

---

## 📚 Documentação Completa

| Documento | Descrição |
|-----------|-----------|
| [WORKFLOW-RAPIDO.md](WORKFLOW-RAPIDO.md) | ⚡ Guia rápido de uso diário |
| [GUIA-GITHUB-CPANEL.md](GUIA-GITHUB-CPANEL.md) | 📘 Guia completo GitHub + cPanel |
| [SCRIPTS-DEPLOY.md](SCRIPTS-DEPLOY.md) | 🚀 Scripts de deploy automático |
| [GUIA-CPANEL.md](GUIA-CPANEL.md) | 📤 Upload manual via cPanel |
| [RESUMO-PROJETO.md](RESUMO-PROJETO.md) | 📊 Visão geral do projeto |
| [CHECKLIST-UPLOAD.txt](CHECKLIST-UPLOAD.txt) | ✅ Checklist de publicação |

---

## 🔐 Segurança

### ⚠️ NUNCA comite:
- Senhas de FTP
- Tokens de API
- Credenciais do cPanel
- Arquivos `.env` com dados sensíveis

### ✅ Use GitHub Secrets para:
- Credenciais FTP
- Tokens de autenticação
- Chaves de API

---

## 🤝 Contribuindo

Este é um projeto privado, mas se você tiver acesso:

1. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
2. Commit: `git commit -m "Adicionar nova funcionalidade"`
3. Push: `git push origin feature/nova-funcionalidade`
4. Abra um Pull Request

---

## 📞 Suporte

- 📧 Email: contato@midiacertavet.com.br
- 📱 WhatsApp: +55 31 99999-9999
- 📍 Local: Belo Horizonte, MG

---

## 📝 Licença

© 2025 Mídias Certa Vet. Todos os direitos reservados.

Este é um projeto privado. Uso não autorizado é proibido.

---

## 🎉 Status do Projeto

✅ **Desenvolvimento**: Completo  
✅ **Deploy Automático**: Configurado  
✅ **Documentação**: Completa  
🚀 **Produção**: Pronto para uso

---

**Desenvolvido com foco em resultados para clínicas veterinárias!** 🐾

Para começar, leia: [WORKFLOW-RAPIDO.md](WORKFLOW-RAPIDO.md)
