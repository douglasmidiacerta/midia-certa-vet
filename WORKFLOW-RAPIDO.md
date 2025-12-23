# ⚡ Workflow Rápido - GitHub → cPanel

## 🎯 Configuração Inicial (Fazer 1 Vez)

### **1. Criar Repositório no GitHub** (5 minutos)
```bash
# Já feito! ✅ Git inicializado localmente
```

1. Acesse https://github.com/new
2. Nome: `landing-page-vet`
3. Privacidade: **Private** (recomendado)
4. **NÃO** marque "Initialize with README"
5. Clique em "Create repository"
6. Copie a URL do repositório

### **2. Conectar e Enviar para GitHub** (2 minutos)
```bash
# Substituir pela SUA URL do GitHub
git remote add origin https://github.com/SEU-USUARIO/landing-page-vet.git

# Adicionar todos os arquivos
git add .

# Primeiro commit
git commit -m "Initial commit: Landing Page Veterinária completa com deploy automático"

# Renomear branch para main
git branch -M main

# Enviar para GitHub
git push -u origin main
```

**Nota**: Na primeira vez, o GitHub vai pedir autenticação:
- Usuário: seu email ou username do GitHub
- Senha: use um **Personal Access Token** (não a senha da conta)
  - Criar token em: GitHub → Settings → Developer settings → Personal access tokens → Generate new token
  - Marque: `repo` (controle total de repositórios)

### **3. Configurar Deploy Automático** (3 minutos)

**Opção A: GitHub Actions (Recomendado)**

1. No GitHub, vá em: Repositório → **Settings** → **Secrets and variables** → **Actions**
2. Clique em **"New repository secret"**
3. Adicione 3 secrets:

| Nome | Valor | Onde conseguir |
|------|-------|----------------|
| `FTP_SERVER` | `ftp.seudominio.com.br` | cPanel → Contas FTP |
| `FTP_USERNAME` | `usuario@seudominio.com.br` | cPanel → Contas FTP |
| `FTP_PASSWORD` | `suaSenhaFTP` | cPanel → Contas FTP |

4. Pronto! O arquivo `.github/workflows/deploy.yml` já está configurado.

**Opção B: cPanel Git (Se disponível)**

1. cPanel → **Git™ Version Control**
2. Clique em **"Create"**
3. Cole a URL do GitHub: `https://github.com/SEU-USUARIO/landing-page-vet.git`
4. Configure credenciais do GitHub
5. Edite `.cpanel.yml` com seu usuário cPanel

---

## 🔄 Uso Diário (A partir de agora)

### **Fazer Alterações e Publicar** (30 segundos)

```bash
# 1. Editar arquivos (index-cpanel.html, styles.css, script.js)
# Use Rovo ou VS Code para fazer as alterações

# 2. Ver o que mudou
git status

# 3. Adicionar arquivos modificados
git add .

# 4. Commitar com mensagem descritiva
git commit -m "Atualizar número de telefone no header"

# 5. Enviar para GitHub (deploy automático acontece aqui!)
git push
```

**Pronto!** Em ~30 segundos suas alterações estarão no site! 🎉

---

## 📱 Exemplos de Alterações Comuns

### **Alterar Número de WhatsApp:**
```bash
# 1. Editar index-cpanel.html linha ~470
# Mudar: 5531999999999 para seu número

# 2. Commitar e enviar
git add index-cpanel.html
git commit -m "Atualizar número do WhatsApp"
git push
```

### **Alterar Cores:**
```bash
# 1. Editar styles.css linha ~16-23 (variáveis CSS)
# Exemplo: --primary: #667eea; → --primary: #ff6b6b;

# 2. Commitar e enviar
git add styles.css
git commit -m "Mudar cor primária para vermelho"
git push
```

### **Alterar Textos:**
```bash
# 1. Editar index-cpanel.html
# Exemplo: mudar título do Hero

# 2. Commitar e enviar
git add index-cpanel.html
git commit -m "Atualizar headline principal"
git push
```

---

## 🔍 Ver Status do Deploy

### **GitHub Actions:**
1. GitHub → Seu repositório
2. Clique na aba **"Actions"**
3. Veja o último workflow:
   - ✅ Verde = Deploy com sucesso
   - ❌ Vermelho = Erro (clique para ver detalhes)
   - 🟡 Amarelo = Em andamento

### **Tempo de Deploy:**
- GitHub Actions: ~30-60 segundos
- cPanel Git: ~1-5 minutos (depende do cron job)

---

## 🧪 Testar se Está Funcionando

### **Teste Rápido:**

1. **Adicione um comentário no HTML:**
   ```html
   <!-- Teste de deploy - 2024 -->
   ```

2. **Commit e push:**
   ```bash
   git add .
   git commit -m "Teste de deploy automático"
   git push
   ```

3. **Aguarde 1 minuto**

4. **Acesse seu site:**
   - Pressione `Ctrl + U` (ver código fonte)
   - Procure pelo comentário
   - Se aparecer: ✅ **Deploy funcionando!**

---

## 🆘 Comandos de Emergência

### **Desfazer última alteração (antes de push):**
```bash
git reset --soft HEAD~1
```

### **Desfazer alterações em arquivo específico:**
```bash
git checkout -- index-cpanel.html
```

### **Voltar para versão anterior:**
```bash
# Ver histórico
git log --oneline

# Voltar para commit específico
git revert abc1234
git push
```

### **Forçar atualização do servidor:**
```bash
git push --force
```

---

## 📊 Workflow Visual

```
┌─────────────────────────────────────────┐
│ 1. Editar arquivos localmente          │
│    (Rovo, VS Code, etc)                 │
└────────────────┬────────────────────────┘
                 │
                 ↓
┌─────────────────────────────────────────┐
│ 2. git add . + git commit               │
└────────────────┬────────────────────────┘
                 │
                 ↓
┌─────────────────────────────────────────┐
│ 3. git push                             │
└────────────────┬────────────────────────┘
                 │
                 ↓
┌─────────────────────────────────────────┐
│ 4. GitHub recebe e dispara Actions      │
└────────────────┬────────────────────────┘
                 │
                 ↓
┌─────────────────────────────────────────┐
│ 5. Deploy automático via FTP            │
└────────────────┬────────────────────────┘
                 │
                 ↓
┌─────────────────────────────────────────┐
│ 6. Site atualizado! 🎉                  │
└─────────────────────────────────────────┘
```

---

## ⚙️ Personalizar Antes do Primeiro Deploy

**IMPORTANTE**: Personalize estes dados antes de fazer o primeiro push:

### **No arquivo `index-cpanel.html`:**

```bash
# Linha ~470: WhatsApp
https://wa.me/5531999999999
↓
https://wa.me/SEU_NUMERO

# Linha ~472: Telefone
tel:+5531999999999
↓
tel:+SEU_NUMERO

# Linha ~531-533: Footer
Tel: +55 31 99999-9999
Email: contato@midiacertavet.com.br
Local: Belo Horizonte, MG
↓
(Seus dados reais)
```

### **No arquivo `.cpanel.yml`:**

```yaml
# Linha 5: Substituir seu-usuario
export DEPLOYPATH=/home/seu-usuario/public_html
↓
export DEPLOYPATH=/home/SEU_USUARIO_CPANEL/public_html
```

---

## 📝 Boas Práticas

### **✅ Faça:**
- Commit frequentemente (após cada funcionalidade)
- Use mensagens de commit claras
- Teste localmente antes de fazer push
- Faça backup de versões importantes (git tag)

### **❌ Evite:**
- Commitar código que não funciona
- Mensagens vagas ("update", "fix")
- Fazer push sem testar
- Commitar senhas ou dados sensíveis

---

## 🎯 Checklist de Configuração

- [ ] Repositório criado no GitHub
- [ ] Git remote configurado
- [ ] Primeiro commit e push realizados
- [ ] Secrets configurados no GitHub (FTP_SERVER, FTP_USERNAME, FTP_PASSWORD)
- [ ] Deploy automático testado
- [ ] Dados personalizados (telefone, email, etc)
- [ ] Site funcionando online

---

## 🚀 Próximos Passos

Após configurar tudo:

1. **Teste o fluxo completo** (editar → commit → push → verificar site)
2. **Configure notificações** (GitHub pode enviar emails de deploy)
3. **Documente suas senhas** em local seguro (gerenciador de senhas)
4. **Compartilhe com equipe** (se houver colaboradores)

---

## 📞 Comandos Mais Usados

```bash
# Ver status
git status

# Adicionar todos os arquivos
git add .

# Commitar
git commit -m "Sua mensagem"

# Enviar para GitHub
git push

# Puxar alterações do GitHub
git pull

# Ver histórico
git log --oneline

# Ver diferenças
git diff
```

---

**Pronto! Agora você tem um workflow profissional de desenvolvimento! 🎉**

Toda alteração que fizer localmente será automaticamente publicada no site após fazer `git push`.

**Tempo total de configuração:** ~10 minutos  
**Tempo para fazer alterações depois:** ~30 segundos
