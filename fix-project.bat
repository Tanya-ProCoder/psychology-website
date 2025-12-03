@echo off
chcp 65001 >nul
echo Исправление конфигурации проекта...

echo Останавливаем контейнеры...
docker-compose down

echo Удаляем старые образы...
docker system prune -f

echo Запускаем исправленную конфигурацию...
docker-compose up -d

echo Ожидаем запуск сервисов...
timeout /t 20

echo Проверяем работу...
echo.
echo Теперь должны работать:
echo Frontend: http://localhost:5173
echo Backend API: http://localhost/api/health
echo PHPMyAdmin: http://localhost:8081
echo.
pause