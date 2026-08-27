@echo off
title Cursor 汉化精灵

:menu
cls
echo ========================================
echo    Cursor 汉化精灵 v1.2.0
echo ========================================
echo.
echo  [1] 一键汉化
echo  [2] 恢复英文原版
echo  [3] 查看汉化状态
echo  [4] 配置中文语言包
echo  [5] 执行覆盖率自检
echo  [6] 显示帮助
echo  [0] 退出
echo.
echo ========================================

set /p choice=请选择操作(0-6): 

if "%choice%"=="1" goto localize
if "%choice%"=="2" goto restore
if "%choice%"=="3" goto status
if "%choice%"=="4" goto locale
if "%choice%"=="5" goto audit
if "%choice%"=="6" goto help
if "%choice%"=="0" goto exit
echo 无效选择，请重试
pause
goto menu

:localize
cls
echo 正在执行一键汉化...
echo.
echo 请确保Cursor IDE已完全关闭!
echo.
node index.js localize -p "D:\cursor\cursor\resources\app"
echo.
pause
goto menu

:restore
cls
echo 正在恢复英文原版...
echo.
node index.js restore -p "D:\cursor\cursor\resources\app"
echo.
pause
goto menu

:status
cls
echo 正在查看汉化状态...
echo.
node index.js status -p "D:\cursor\cursor\resources\app"
echo.
pause
goto menu

:locale
cls
echo 正在配置中文语言包...
echo.
node index.js locale
echo.
pause
goto menu

:audit
cls
echo 正在执行覆盖率自检...
echo.
node scripts/audit.js -p "D:\cursor\cursor\resources\app"
echo.
pause
goto menu

:help
cls
echo ========================================
echo    帮助信息
echo ========================================
echo.
echo  使用方法:
echo  1. 完全退出 Cursor IDE
echo  2. 选择"一键汉化"
echo  3. 重启 Cursor IDE
echo.
echo  Cursor安装路径:
echo  D:\cursor\cursor\resources\app
echo.
echo  注意事项:
echo  - 首次使用请先 npm install
echo  - Cursor 版本更新后需重新汉化
echo  - 如遇权限问题,请以管理员身份运行
echo.
pause
goto menu

:exit
exit