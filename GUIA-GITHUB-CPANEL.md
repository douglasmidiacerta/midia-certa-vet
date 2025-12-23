# 🔄 Guia Completo: Sincronização GitHub ↔️ cPanel

## 📋 Visão Geral

Este guia ensina como configurar sincronização automática entre:
- **GitHub** (repositório na nuvem)
- **cPanel** (seu servidor de hospedagem)
- **Rovo/VS Code** (seu ambiente de desenvolvimento local)

---

## 🎯 Benefícios

✅ **Versionamento**: Histórico de todas as alterações  
✅ **Backup automático**: Código sempre seguro no GitHub  
✅ **Deploy automático**: Mudanças vão direto para o site  
✅ **Sincronização bidirecional**: Edite localmente ou no cPanel  
✅ **Colaboração**: Outras pessoas podem contribuir  

---

## 📦 Pré-requisitos

- [ ] Git instalado (✅ já está instalado - versão 2.52.0)
- [ ] Conta no GitHub (gratuita)
- [ ] Acesso ao cPanel
- [ ] Acesso SSH ao servidor (verificar com sua hospedagem)

---

# PARTE 1: Configurar GitHub

## 1.1 Criar Repositório no GitHub

### **Passo 1: Acessar GitHub**
1. Acesse: https://github.com
2. Faça login (ou crie uma conta gratuita)

### **Passo 2: Criar Novo Repositório**
1. Clique no **+** (canto superior direito)
2. Selecione **"New repository"**
3. Preencha:
   - **Repository name**: `landing-page-vet` (ou outro nome)
   - **Description**: Landing Page - Mais Agendamentos para Clínicas Veterinárias
   - **Visibilidade**: 
     - ✅ **Private** (recomendado - só você vê)
     - ⚠️ **Public** (qualquer um pode ver o código)
   - **NÃO** marque "Initialize with README" (já temos arquivos)
4. Clique em **"Create repository"**

### **Passo 3: Copiar URL do Repositório**
Você verá uma tela com comandos. Copie a URL que aparece, algo como:
```
https://github.com/seu-usuario/landing-page-vet.git
```

---

## 1.2 Conectar Repositório Local ao GitHub

Abra o terminal/PowerShell na pasta do projeto e execute:

```bash
# Adicionar todos os arquivos ao Git
git add .

# Fazer o primeiro commit
git commit -m "Initial commit: Landing Page Veterinária completa"

# Conectar ao GitHub (substitua pela sua URL)
git remote add origin https://github.com/seu-usuario/landing-page-vet.git

# Renomear branch para main (padrão do GitHub)
git branch -M main

# Enviar para o GitHub
git push -u origin main
```

### **Autenticação no GitHub**

Na primeira vez, o GitHub vai pedir autenticação:

**Opção 1: Token de Acesso Pessoal (Recomendado)**
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Clique em "Generate new token (classic)"
3. Marque: `repo` (Full control of private repositories)
4. Copie o token e use como senha

**Opção 2: GitHub CLI**
```bash
# Instalar GitHub CLI (se preferir)
winget install GitHub.cli

# Autenticar
gh auth login
```

---

# PARTE 2: Configurar cPanel

## 2.1 Verificar se o cPanel tem SSH/Git

### **Opção A: cPanel com Git Version Control (Mais Fácil)**

1. **Acessar cPanel**
2. Procurar por **"Git™ Version Control"** ou **"Git"**
3. Se aparecer, pular para seção 2.2

### **Opção B: cPanel sem Git (Usar FTP + Scripts)**

Se seu cPanel não tiver Git, use o método alternativo na seção 2.4

---

## 2.2 Clonar Repositório no cPanel (Com Git)

### **Passo 1: Acessar Git Version Control no cPanel**
1. cPanel → **Git™ Version Control**
2. Clique em **"Create"**

### **Passo 2: Configurar**
- **Clone URL**: `https://github.com/seu-usuario/landing-page-vet.git`
- **Repository Path**: `/home/seu-usuario/landing-page-vet`
- **Repository Name**: `landing-page-vet`
- Clique em **"Create"**

### **Passo 3: Deploy para public_html**

Agora você precisa criar um script para copiar arquivos do repositório para `public_html`

**Criar arquivo `.cpanel.yml` no seu projeto local:**

```yaml
---
deployment:
  tasks:
    - export DEPLOYPATH=/home/seu-usuario/public_html
    - /bin/cp -R index-cpanel.html $DEPLOYPATH/index.html
    - /bin/cp -R styles.css $DEPLOYPATH/
    - /bin/cp -R script.js $DEPLOYPATH/
```

Commite e envie para o GitHub:
```bash
git add .cpanel.yml
git commit -m "Adicionar configuração de deploy"
git push
```

---

## 2.3 Configurar Deploy Automático

### **No cPanel:**

1. **Git™ Version Control** → Seu repositório
2. Clique em **"Manage"**
3. Procure por **"Pull or Deploy"** ou similar
4. Configure para atualizar automaticamente ou crie um **Cron Job**

### **Cron Job para Sincronização Automática:**

1. cPanel → **Cron Jobs**
2. Adicionar novo:
   - **Minuto**: */15 (a cada 15 minutos)
   - **Comando**: 
   ```bash
   cd /home/seu-usuario/landing-page-vet && git pull origin main && /bin/cp index-cpanel.html /home/seu-usuario/public_html/index.html && /bin/cp styles.css /home/seu-usuario/public_html/ && /bin/cp script.js /home/seu-usuario/public_html/
   ```

Isso vai verificar mudanças no GitHub a cada 15 minutos e atualizar o site.

---

## 2.4 Alternativa: Deploy via FTP + GitHub Actions (Sem Git no cPanel)

Se seu cPanel não tem Git, use GitHub Actions para fazer deploy via FTP.

### **Criar arquivo `.github/workflows/deploy.yml`**

Crie esta estrutura de pastas no seu projeto:
```
.github/
  workflows/
    deploy.yml
```

**Conteúdo do `deploy.yml`:**

```yaml
name: Deploy para cPanel via FTP

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout código
      uses: actions/checkout@v3
    
    - name: Deploy via FTP
      uses: SamKirkland/FTP-Deploy-Action@v4.3.4
      with:
        server: ftp.seudominio.com.br
        username: ${{ secrets.FTP_USERNAME }}
        password: ${{ secrets.FTP_PASSWORD }}
        local-dir: ./
        server-dir: /public_html/
        exclude: |
          **/.git*
          **/.git*/**
          **/node_modules/**
          **/src/**
          **/.vscode/**
          **/package*.json
          **/vite.config.js
          **/tailwind.config.js
          **/postcss.config.js
          **/README.md
          **/GUIA-*.md
          **/CHECKLIST-*.txt
          **/LEIA-ME-*.txt
          **/RESUMO-*.md
          **/Criar.txt
```

### **Configurar Secrets no GitHub:**

1. GitHub → Seu repositório → **Settings** → **Secrets and variables** → **Actions**
2. Clique em **"New repository secret"**
3. Adicione:
   - Nome: `FTP_USERNAME` | Valor: seu usuário FTP
   - Nome: `FTP_PASSWORD` | Valor: sua senha FTP

Agora, toda vez que você fizer `git push`, o GitHub vai automaticamente enviar para o cPanel via FTP!

---

# PARTE 3: Workflow de Trabalho

## 3.1 Fazendo Alterações Localmente (Rovo/VS Code)

```bash
# 1. Fazer alterações nos arquivos
# (editar index-cpanel.html, styles.css, etc)

# 2. Ver o que mudou
git status

# 3. Adicionar arquivos modificados
git add .

# 4. Commitar com mensagem descritiva
git commit -m "Atualizar número de telefone e cores do botão"

# 5. Enviar para GitHub
git push

# 6. Deploy automático vai acontecer (se configurado)
```

---

## 3.2 Fazendo Alterações no cPanel

### **Se cPanel tem Git:**

```bash
# 1. Fazer alterações via File Manager ou SSH

# 2. Commitar (via SSH ou cPanel Terminal)
cd /home/seu-usuario/landing-page-vet
git add .
git commit -m "Alteração feita direto no servidor"
git push origin main

# 3. Atualizar local
# (no seu computador)
git pull
```

### **Se cPanel NÃO tem Git:**

Faça alterações pelo File Manager e depois replique manualmente no seu arquivo local, ou sempre edite localmente e faça push.

---

## 3.3 Sincronizar Alterações

### **Buscar alterações do GitHub:**
```bash
git pull origin main
```

### **Resolver Conflitos (se houver):**

Se você editou o mesmo arquivo localmente e no servidor:

```bash
# Git vai avisar sobre conflito
# Abra o arquivo e verá marcações como:
<<<<<<< HEAD
seu código local
=======
código do servidor
>>>>>>> origin/main

# Escolha qual versão manter, salve e:
git add .
git commit -m "Resolver conflito"
git push
```

---

# PARTE 4: Comandos Úteis

## 4.1 Comandos Git Essenciais

```bash
# Ver status dos arquivos
git status

# Ver histórico de commits
git log --oneline

# Ver diferenças
git diff

# Desfazer alterações não commitadas
git checkout -- arquivo.html

# Voltar para commit anterior
git revert HEAD

# Criar branch para testar mudanças
git checkout -b teste-nova-funcionalidade

# Voltar para main
git checkout main

# Mesclar branch
git merge teste-nova-funcionalidade
```

---

## 4.2 Backup e Restore

```bash
# Fazer backup (criar tag)
git tag -a v1.0 -m "Versão 1.0 - Site publicado"
git push origin v1.0

# Voltar para versão antiga
git checkout v1.0

# Ver todas as tags
git tag
```

---

# PARTE 5: Boas Práticas

## 5.1 Mensagens de Commit

✅ **Boas mensagens:**
```
"Adicionar botão de agendamento no header"
"Corrigir cor do botão CTA (vermelho para azul)"
"Atualizar número de telefone no footer"
"Otimizar imagens do portfólio (reduzir tamanho)"
```

❌ **Mensagens ruins:**
```
"update"
"fix"
"changes"
"asdfasdf"
```

---

## 5.2 Quando Commitar

✅ **Commite quando:**
- Terminar uma funcionalidade
- Fazer correção de bug
- Alterar conteúdo importante
- Antes de fazer mudanças arriscadas

❌ **Não commite:**
- Código que não funciona
- Arquivos temporários
- Senhas ou dados sensíveis

---

## 5.3 Estrutura de Branches (Opcional)

Para projetos maiores:

```bash
main (produção - site ao vivo)
  ↓
develop (desenvolvimento)
  ↓
feature/nova-secao (funcionalidades)
  ↓
fix/corrigir-menu (correções)
```

---

# PARTE 6: Troubleshooting

## ❌ Erro: "Permission denied"
**Solução**: Verificar permissões SSH ou usar HTTPS em vez de SSH

## ❌ Erro: "Conflicts"
**Solução**: Ver seção 3.3 - Resolver Conflitos

## ❌ Erro: "Push rejected"
**Solução**: 
```bash
git pull origin main
# resolver conflitos se houver
git push
```

## ❌ GitHub Actions não funciona
**Solução**: Verificar se FTP_USERNAME e FTP_PASSWORD estão corretos nos Secrets

## ❌ cPanel não atualiza automaticamente
**Solução**: Verificar se Cron Job está ativo e caminho está correto

---

# 📊 Resumo do Fluxo

```
┌─────────────┐
│  SEU PC     │
│ (Rovo/Code) │
└──────┬──────┘
       │ git push
       ↓
┌─────────────┐
│   GITHUB    │
│ (Repositório)│
└──────┬──────┘
       │ webhook/cron/actions
       ↓
┌─────────────┐
│   cPANEL    │
│  (Servidor) │
└──────┬──────┘
       │ git pull
       ↓
┌─────────────┐
│    SITE     │
│  (Online)   │
└─────────────┘
```

---

# ✅ Checklist de Configuração

- [ ] Git instalado e configurado
- [ ] Repositório criado no GitHub
- [ ] Arquivos commitados e enviados
- [ ] cPanel configurado (Git ou FTP)
- [ ] Deploy automático configurado
- [ ] Testei fazer push e ver atualização no site
- [ ] Documentei senhas/tokens em local seguro

---

**Pronto! Agora você tem sincronização automática entre GitHub e cPanel! 🎉**

Qualquer alteração que você fizer localmente será automaticamente enviada para o site após fazer `git push`.
