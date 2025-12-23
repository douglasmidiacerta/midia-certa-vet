# 🚀 Scripts de Deploy Automático

## 📋 Visão Geral

Este documento contém scripts prontos para usar em diferentes cenários de deploy.

---

## 🔧 Opção 1: GitHub Actions (Recomendado)

### **Arquivo criado**: `.github/workflows/deploy.yml`

Este arquivo já está configurado e pronto para uso!

### **Como configurar:**

1. **Criar Secrets no GitHub:**
   - Acesse: GitHub → Seu repositório → Settings → Secrets and variables → Actions
   - Clique em "New repository secret"
   - Adicione os seguintes secrets:

   | Nome | Descrição | Exemplo |
   |------|-----------|---------|
   | `FTP_SERVER` | Servidor FTP | `ftp.seudominio.com.br` |
   | `FTP_USERNAME` | Usuário FTP | `usuario@seudominio.com.br` |
   | `FTP_PASSWORD` | Senha FTP | `suaSenhaSegura123` |

2. **Fazer commit e push:**
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Adicionar GitHub Actions para deploy automático"
   git push
   ```

3. **Testar:**
   - Faça uma pequena alteração em qualquer arquivo
   - Commit e push
   - Vá em GitHub → Actions → Você verá o deploy rodando

### **Como funciona:**

Toda vez que você fizer `git push` para a branch `main`, o GitHub Actions:
1. ✅ Pega todos os arquivos do repositório
2. ✅ Exclui arquivos desnecessários (node_modules, documentação, etc)
3. ✅ Envia via FTP para o cPanel
4. ✅ Atualiza automaticamente o site

---

## 🔧 Opção 2: cPanel Git Deploy

### **Arquivo criado**: `.cpanel.yml`

Para servidores cPanel que suportam Git Version Control.

### **Como configurar:**

1. **Editar o arquivo `.cpanel.yml`:**
   - Substitua `seu-usuario` pelo seu usuário do cPanel
   - Exemplo: se seu usuário é `vetclinic`, mude para:
   ```yaml
   - export DEPLOYPATH=/home/vetclinic/public_html
   ```

2. **Commit e push:**
   ```bash
   git add .cpanel.yml
   git commit -m "Adicionar configuração de deploy cPanel"
   git push
   ```

3. **Configurar no cPanel:**
   - cPanel → Git™ Version Control
   - Clone o repositório do GitHub
   - Configure as credenciais do GitHub
   - Toda vez que você fizer push, o cPanel vai puxar automaticamente

---

## 🔧 Opção 3: Script Manual de Deploy (Backup)

Se você quiser fazer deploy manualmente quando necessário.

### **Criar arquivo `deploy.sh` (Linux/Mac):**

```bash
#!/bin/bash

echo "🚀 Iniciando deploy..."

# Variáveis (edite com seus dados)
FTP_SERVER="ftp.seudominio.com.br"
FTP_USER="usuario@seudominio.com.br"
FTP_PASS="suaSenha"
REMOTE_DIR="/public_html"

# Fazer commit local primeiro
echo "📦 Commitando alterações..."
git add .
git commit -m "Deploy manual em $(date '+%Y-%m-%d %H:%M:%S')"
git push

# Upload via FTP usando lftp
echo "📤 Enviando arquivos via FTP..."
lftp -c "
set ftp:ssl-allow no;
open -u $FTP_USER,$FTP_PASS $FTP_SERVER;
lcd ./;
cd $REMOTE_DIR;
put index-cpanel.html -o index.html;
put styles.css;
put script.js;
bye;
"

echo "✅ Deploy completo!"
```

### **Usar:**
```bash
chmod +x deploy.sh
./deploy.sh
```

### **Criar arquivo `deploy.ps1` (Windows PowerShell):**

```powershell
# Deploy Script para Windows
Write-Host "🚀 Iniciando deploy..." -ForegroundColor Green

# Variáveis (edite com seus dados)
$FTP_SERVER = "ftp.seudominio.com.br"
$FTP_USER = "usuario@seudominio.com.br"
$FTP_PASS = "suaSenha"

# Fazer commit
Write-Host "📦 Commitando alterações..." -ForegroundColor Yellow
git add .
git commit -m "Deploy manual em $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
git push

# Upload via FTP
Write-Host "📤 Enviando arquivos via FTP..." -ForegroundColor Yellow

$webclient = New-Object System.Net.WebClient
$webclient.Credentials = New-Object System.Net.NetworkCredential($FTP_USER, $FTP_PASS)

# Upload de cada arquivo
$files = @("index-cpanel.html", "styles.css", "script.js")
foreach ($file in $files) {
    $uri = "ftp://$FTP_SERVER/public_html/$file"
    if ($file -eq "index-cpanel.html") {
        $uri = "ftp://$FTP_SERVER/public_html/index.html"
    }
    Write-Host "  Enviando $file..." -ForegroundColor Cyan
    $webclient.UploadFile($uri, $file)
}

Write-Host "✅ Deploy completo!" -ForegroundColor Green
```

### **Usar:**
```powershell
.\deploy.ps1
```

---

## 🔧 Opção 4: Cron Job no cPanel (Auto-Pull)

Para servidores com SSH/Git habilitado.

### **Script de sincronização:**

```bash
#!/bin/bash
# Script: sync-git.sh

# Navegar para o diretório do repositório
cd /home/seu-usuario/landing-page-vet

# Puxar alterações do GitHub
git pull origin main

# Copiar arquivos para public_html
cp index-cpanel.html /home/seu-usuario/public_html/index.html
cp styles.css /home/seu-usuario/public_html/styles.css
cp script.js /home/seu-usuario/public_html/script.js

# Log
echo "Sincronizado em $(date)" >> /home/seu-usuario/sync.log
```

### **Configurar Cron Job no cPanel:**

1. cPanel → Cron Jobs
2. Adicionar novo cron:
   - **Minuto**: */15 (a cada 15 minutos)
   - **Hora**: * (todas as horas)
   - **Dia**: * (todos os dias)
   - **Comando**: 
   ```bash
   /bin/bash /home/seu-usuario/sync-git.sh
   ```

Isso vai verificar o GitHub a cada 15 minutos e atualizar automaticamente.

---

## 📊 Comparação das Opções

| Método | Dificuldade | Automático | Requisitos |
|--------|-------------|------------|------------|
| **GitHub Actions** | 🟢 Fácil | ✅ Sim | Acesso FTP |
| **cPanel Git** | 🟡 Médio | ✅ Sim | Git no cPanel |
| **Script Manual** | 🟢 Fácil | ❌ Não | FTP client |
| **Cron Job** | 🔴 Difícil | ✅ Sim | SSH + Git no servidor |

---

## 🎯 Recomendação

Para a maioria dos casos, use **GitHub Actions** (Opção 1):
- ✅ Mais fácil de configurar
- ✅ Funciona em qualquer hospedagem com FTP
- ✅ Não precisa SSH
- ✅ Deploy instantâneo após push
- ✅ Histórico de deploys no GitHub

---

## 🔐 Segurança

### **NUNCA comite:**
- ❌ Senhas de FTP
- ❌ Tokens de API
- ❌ Credenciais do cPanel
- ❌ Arquivos `.env` com dados sensíveis

### **SEMPRE use:**
- ✅ GitHub Secrets para senhas
- ✅ Variáveis de ambiente
- ✅ Arquivo `.gitignore` atualizado

---

## 🧪 Testando o Deploy

### **Teste simples:**

1. Faça uma alteração pequena no `index-cpanel.html`:
   ```html
   <!-- Adicione um comentário -->
   <!-- Deploy teste - 2024 -->
   ```

2. Commit e push:
   ```bash
   git add .
   git commit -m "Teste de deploy automático"
   git push
   ```

3. Aguarde ~30 segundos

4. Acesse seu site e veja se a mudança apareceu

5. Se aparecer: ✅ Deploy funcionando!

---

## 🆘 Troubleshooting

### **GitHub Actions não executa:**
- Verifique se está na branch `main`
- Confirme que os Secrets estão corretos
- Veja os logs em: GitHub → Actions → último workflow

### **FTP falha:**
- Teste conexão FTP com FileZilla
- Verifique servidor/usuário/senha
- Confirme que a pasta `/public_html` existe

### **Arquivos não atualizam:**
- Limpe cache do navegador (Ctrl + F5)
- Verifique permissões dos arquivos no servidor (644)
- Confirme que o caminho está correto

---

## 📝 Workflow Recomendado

```bash
# 1. Editar arquivos localmente
# (fazer alterações no código)

# 2. Testar localmente (opcional)
# abrir index-cpanel.html no navegador

# 3. Commitar
git add .
git commit -m "Descrição clara da mudança"

# 4. Enviar para GitHub
git push

# 5. Deploy acontece automaticamente! 🎉
# Aguarde ~30 segundos e acesse seu site
```

---

## ✅ Checklist de Configuração

- [ ] Escolhi método de deploy (GitHub Actions recomendado)
- [ ] Configurei Secrets no GitHub
- [ ] Testei fazer push e ver mudança no site
- [ ] Documentei credenciais em local seguro
- [ ] Configurei notificações de deploy (opcional)

---

**Pronto! Seu sistema de deploy automático está configurado! 🚀**

Agora você pode editar localmente, fazer `git push`, e o site atualiza automaticamente!
