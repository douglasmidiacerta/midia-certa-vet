# 📤 Guia Completo de Upload para cPanel

## 🎯 Arquivos Necessários

Você precisa fazer upload destes **3 arquivos** para o cPanel:

1. ✅ **index-cpanel.html** → Renomear para `index.html`
2. ✅ **styles.css** → Manter o nome
3. ✅ **script.js** → Manter o nome

---

## 📋 Passo a Passo - Upload via cPanel

### **Passo 1: Acessar o cPanel**
1. Acesse o painel do seu provedor de hospedagem
2. Entre no **cPanel** (geralmente em: `seudominio.com/cpanel` ou `seudominio.com:2083`)
3. Faça login com suas credenciais

### **Passo 2: Abrir o Gerenciador de Arquivos**
1. No cPanel, procure por **"Gerenciador de Arquivos"** ou **"File Manager"**
2. Clique para abrir

### **Passo 3: Navegar até a Pasta Pública**
1. No lado esquerdo, clique em **`public_html`** (ou `www` ou `htdocs` dependendo do servidor)
2. Esta é a pasta raiz do seu site

### **Passo 4: Fazer Upload dos Arquivos**

#### **Método 1: Upload Simples**
1. Clique no botão **"Upload"** ou **"Carregar"** (geralmente no topo)
2. Arraste os 3 arquivos para a área de upload:
   - `index-cpanel.html`
   - `styles.css`
   - `script.js`
3. Aguarde o upload completar (deve aparecer uma barra de progresso)

#### **Método 2: Arrastar e Soltar** (se disponível)
1. Abra a pasta do seu computador onde estão os arquivos
2. Arraste os 3 arquivos diretamente para o File Manager
3. Aguarde o upload

### **Passo 5: IMPORTANTE - Renomear o Arquivo HTML**
1. No File Manager, localize o arquivo `index-cpanel.html`
2. Clique com botão direito nele
3. Selecione **"Rename"** ou **"Renomear"**
4. Renomeie para: **`index.html`** (sem o "-cpanel")
5. Confirme

> ⚠️ **IMPORTANTE**: O arquivo DEVE se chamar `index.html` para funcionar como página inicial

### **Passo 6: Verificar Estrutura**
Sua pasta `public_html` deve ficar assim:
```
public_html/
├── index.html      ← (renomeado de index-cpanel.html)
├── styles.css
└── script.js
```

### **Passo 7: Testar o Site**
1. Abra seu navegador
2. Digite seu domínio: `www.seudominio.com.br`
3. A landing page deve carregar! 🎉

---

## 🔧 Personalização ANTES do Upload

### **1. Alterar Número de WhatsApp e Telefone**

Abra o arquivo `index-cpanel.html` e procure por estas linhas:

**Linha ~470 (seção CTA):**
```html
<!-- ANTES -->
<a href="https://wa.me/5531999999999?text=...">

<!-- DEPOIS (substitua pelo seu número) -->
<a href="https://wa.me/5531987654321?text=...">
```

**Linha ~472 (botão telefone):**
```html
<!-- ANTES -->
<a href="tel:+5531999999999">

<!-- DEPOIS -->
<a href="tel:+5531987654321">
```

### **2. Alterar Informações de Contato no Footer**

**Linha ~531 (seção Footer):**
```html
<!-- ANTES -->
<li>Tel: +55 31 99999-9999</li>
<li>Email: contato@midiacertavet.com.br</li>
<li>Local: Belo Horizonte, MG</li>

<!-- DEPOIS -->
<li>Tel: +55 31 98765-4321</li>
<li>Email: seuemail@seudominio.com.br</li>
<li>Local: Sua Cidade, UF</li>
```

### **3. Alterar Nome da Marca (Opcional)**

Se quiser mudar "Mídias Certa Vet" para outro nome:

**No Header (linha ~34):**
```html
<a href="#hero">Seu Nome Aqui</a>
```

**No Footer (linha ~507):**
```html
<h3 class="footer-brand">Seu Nome Aqui</h3>
```

---

## 📱 Upload via FTP (Alternativa)

Se preferir usar FTP:

### **Software Recomendado**: FileZilla (grátis)

1. Baixe o FileZilla em: https://filezilla-project.org/
2. Instale e abra o programa
3. Conecte ao seu servidor:
   - **Host**: ftp.seudominio.com.br (ou IP fornecido pela hospedagem)
   - **Usuário**: seu usuário FTP
   - **Senha**: sua senha FTP
   - **Porta**: 21
4. No lado esquerdo (seu computador), navegue até a pasta com os arquivos
5. No lado direito (servidor), entre em `public_html`
6. Arraste os 3 arquivos para o lado direito
7. Renomeie `index-cpanel.html` para `index.html`

---

## ✅ Checklist Final

Antes de considerar completo, verifique:

- [ ] 3 arquivos enviados para `public_html`
- [ ] Arquivo renomeado para `index.html`
- [ ] Número de WhatsApp atualizado
- [ ] Número de telefone atualizado
- [ ] Email atualizado no footer
- [ ] Testado no navegador
- [ ] Testado no celular
- [ ] Botões de WhatsApp e telefone funcionando
- [ ] Links do portfólio abrindo em nova aba
- [ ] Menu mobile funcionando
- [ ] FAQ abrindo e fechando

---

## 🚨 Problemas Comuns e Soluções

### **Problema 1: Página não carrega / Erro 404**
**Solução**: 
- Verifique se o arquivo se chama exatamente `index.html` (minúsculas)
- Confirme que está na pasta `public_html` (não em subpastas)

### **Problema 2: CSS não está funcionando (página sem cores)**
**Solução**:
- Verifique se `styles.css` está na mesma pasta que `index.html`
- Limpe o cache do navegador (Ctrl + F5)

### **Problema 3: Menu mobile não abre**
**Solução**:
- Verifique se `script.js` está na mesma pasta
- Abra o console do navegador (F12) e veja se há erros

### **Problema 4: Links do WhatsApp não funcionam**
**Solução**:
- Certifique-se que o número está no formato: `5531999999999` (sem espaços, hífens ou parênteses)
- Formato: 55 (país) + 31 (DDD) + 999999999 (número)

### **Problema 5: Site aparece só texto sem formatação**
**Solução**:
- O arquivo CSS não está sendo encontrado
- Verifique se está escrito exatamente `styles.css` (com "s" no final)
- Verifique permissões dos arquivos (644 para arquivos, 755 para pastas)

---

## 🎨 Melhorias Futuras (Opcionais)

Depois que o site estiver no ar, você pode:

1. **Adicionar Google Analytics**
   - Insira o código de rastreamento antes de `</head>` no HTML

2. **Adicionar Imagens Reais**
   - Substitua os emojis 🐾 por screenshots dos sites dos clientes
   - Faça upload das imagens para uma pasta `images/`
   - Atualize o HTML para apontar para as imagens

3. **Configurar SSL (HTTPS)**
   - No cPanel, procure por "SSL/TLS"
   - Ative o certificado gratuito Let's Encrypt

4. **Otimizar para SEO Local**
   - Cadastre no Google My Business
   - Adicione schema markup
   - Crie sitemap.xml

5. **Integrar com Google Ads**
   - Adicione o pixel de conversão do Google Ads
   - Configure eventos de rastreamento

---

## 📞 Suporte

Se encontrar dificuldades:
1. Verifique a documentação da sua hospedagem
2. Entre em contato com o suporte técnico do provedor
3. Envie prints do erro para facilitar o diagnóstico

---

## 🎉 Pronto!

Agora sua landing page está no ar e pronta para:
- ✅ Capturar leads
- ✅ Gerar agendamentos
- ✅ Converter visitantes em clientes

**Boa sorte com sua campanha! 🚀**
