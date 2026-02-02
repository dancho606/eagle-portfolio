$targetTime = Get-Date -Hour 12 -Minute 0 -Second 0
if ((Get-Date) -gt $targetTime) {
    Write-Host "The target time has passed, scheduling for tomorrow at 12:00."
    $targetTime = $targetTime.AddDays(1)
}

$timeWait = $targetTime - (Get-Date)
$totalSeconds = [math]::Round($timeWait.TotalSeconds)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   Git Auto Scheduled Push (12:00 PM)   " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Target Time: $targetTime"
Write-Host "Waiting: $($timeWait.Hours) hours $($timeWait.Minutes) minutes ($totalSeconds seconds)"
Write-Host "Please keep this window open and ensure the computer stays awake."
Write-Host "----------------------------------------"

Start-Sleep -Seconds $totalSeconds

Write-Host "Time reached! Executing Git commands..." -ForegroundColor Yellow

# Git Add
git add .
if ($LASTEXITCODE -ne 0) { Write-Error "Git Add failed"; exit 1 }

# Git Commit
$commitMsg = "Scheduled auto-commit at $(Get-Date -Format 'HH:mm')"
git commit -m $commitMsg
if ($LASTEXITCODE -ne 0) { 
    Write-Host "No changes to commit or already committed." -ForegroundColor Gray
}

# Git Push
Write-Host "Pushing to remote..." -ForegroundColor Yellow
git push
if ($LASTEXITCODE -eq 0) {
    Write-Host "Successfully pushed to remote!" -ForegroundColor Green
} else {
    Write-Error "Git Push failed. Check network or remote permissions."
}

Write-Host "Task complete." -ForegroundColor Cyan
