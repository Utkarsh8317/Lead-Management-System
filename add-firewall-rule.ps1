# Script to add firewall rules for LMS application
# Run as Administrator

Write-Host "Adding firewall rules for LMS Application..." -ForegroundColor Green
Write-Host ""

# Rule 1: Allow inbound traffic on port 5000 (Backend API)
Write-Host "1. Adding rule for Backend API (Port 5000)..." -ForegroundColor Yellow
New-NetFirewallRule -DisplayName "LMS Backend API - Port 5000" `
    -Direction Inbound `
    -LocalPort 5000 `
    -Protocol TCP `
    -Action Allow `
    -Description "Allow incoming connections to LMS Backend API" `
    -ErrorAction SilentlyContinue

if ($?) {
    Write-Host "   ✅ Port 5000 rule added" -ForegroundColor Green
} else {
    Write-Host "   ⚠️  Port 5000 rule may already exist" -ForegroundColor Yellow
}

# Rule 2: Allow inbound traffic on port 3000 (Frontend Dev Server)
Write-Host "2. Adding rule for Frontend Dev Server (Port 3000)..." -ForegroundColor Yellow
New-NetFirewallRule -DisplayName "LMS Frontend Dev Server - Port 3000" `
    -Direction Inbound `
    -LocalPort 3000 `
    -Protocol TCP `
    -Action Allow `
    -Description "Allow incoming connections to LMS Frontend Dev Server" `
    -ErrorAction SilentlyContinue

if ($?) {
    Write-Host "   ✅ Port 3000 rule added" -ForegroundColor Green
} else {
    Write-Host "   ⚠️  Port 3000 rule may already exist" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "✅ Firewall configuration complete!" -ForegroundColor Green
Write-Host ""
Write-Host "You can now access:" -ForegroundColor Cyan
Write-Host "  - Frontend from phone: http://10.219.33.116:3000" -ForegroundColor White
Write-Host "  - Backend API: http://10.219.33.116:5000/api" -ForegroundColor White
Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

