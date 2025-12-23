# ═══════════════════════════════════════════════════════
# 🚀 Script de Deploy Rápido - Git + GitHub
# ═══════════════════════════════════════════════════════
# 
# USO: .\deploy.ps1 "mensagem do commit"
# EXEMPLO: .\deploy.ps1 "Atualizar texto do hero"
#

param(
    [Parameter(Mandatory=$true)]
    [string]$mensagem
)

Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "🚀 INICIANDO DEPLOY" -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

# 1. Adicionar arquivos
Write-Host "📦 Adicionando arquivos..." -ForegroundColor Green
git add .

# 2. Criar commit
Write-Host "💾 Criando commit: '$mensagem'" -ForegroundColor Green
git commit -m "$mensagem"

# 3. Enviar para GitHub
Write-Host "🌐 Enviando para GitHub..." -ForegroundColor Green
git push

Write-Host ""
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "✅ DEPLOY CONCLUÍDO!" -ForegroundColor Green
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""
Write-Host "⚠️  PRÓXIMO PASSO:" -ForegroundColor Yellow
Write-Host "   Acesse o cPanel e clique em 'Update from Remote'" -ForegroundColor White
Write-Host ""
