# ⚡ Deploy Rápido - Guia de Uso

## 🎯 Fluxo de Trabalho Completo

### **1️⃣ Fazer Alterações no Código**
- Edite os arquivos que desejar
- Salve tudo (Ctrl + S)

### **2️⃣ Enviar para GitHub (Escolha uma opção)**

#### **OPÇÃO A: Script Automático (Recomendado)** ⚡
```powershell
.\deploy.ps1 "Descrição das alterações"
```

**Exemplos:**
```powershell
.\deploy.ps1 "Atualizar texto do hero"
.\deploy.ps1 "Adicionar nova seção de depoimentos"
.\deploy.ps1 "Corrigir bug no formulário"
```

#### **OPÇÃO B: Comandos Manuais** 📝
```powershell
git add .
git commit -m "Descrição das alterações"
git push
```

### **3️⃣ Aplicar no Servidor cPanel** 🌐

1. Acesse: https://seu-dominio.com.br:2083
2. Vá em **Git Version Control**
3. Clique em **"Update from Remote"** ou **"Pull"**
4. Pronto! Site atualizado ✅

---

## 📋 Exemplos Práticos

### Alterar texto no site:
```powershell
# 1. Editar index.html
# 2. Salvar (Ctrl + S)
# 3. Rodar:
.\deploy.ps1 "Atualizar textos da landing page"
# 4. Update no cPanel
```

### Adicionar nova imagem:
```powershell
# 1. Adicionar imagem na pasta
# 2. Atualizar HTML
# 3. Rodar:
.\deploy.ps1 "Adicionar logo nova"
# 4. Update no cPanel
```

---

## 🔥 Dicas

✅ **Mensagens claras**: Use descrições que fazem sentido
- ✅ "Corrigir botão de contato"
- ❌ "fix"

✅ **Commits pequenos**: Melhor fazer vários commits pequenos do que um gigante

✅ **Testar antes**: Sempre teste localmente antes de fazer push

---

## ⚠️ Importante

- Sempre **salve os arquivos** antes de rodar o deploy
- No cPanel, **sempre clique "Update from Remote"** após o push
- Se der erro, verifique se tem alterações não salvas

---

## 🆘 Problemas Comuns

### "nothing to commit"
- **Causa**: Esqueceu de salvar o arquivo
- **Solução**: Salve (Ctrl + S) e rode novamente

### "rejected (non-fast-forward)"
- **Causa**: Alguém fez push antes de você
- **Solução**: `git pull` e depois `git push`

### cPanel não mostra alterações
- **Causa**: Esqueceu de clicar "Update from Remote"
- **Solução**: Entre no Git Version Control e clique no botão

---

## 🎓 Referência Rápida

| Comando | O que faz |
|---------|-----------|
| `.\deploy.ps1 "msg"` | Deploy completo automático |
| `git status` | Ver arquivos modificados |
| `git log --oneline -5` | Ver últimos 5 commits |
| `git diff` | Ver alterações não commitadas |

---

**Pronto para usar! 🚀**
