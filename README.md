Общие положения функциональности:
- Веб-приложение для управления задачами.
- Все взаимодействие идет через API.
- Аутентификация не требуется.

Требования перед установкой
- Установленный PHP 8.1+
- Установленный Composer
- Установленный Node.js (версия 18 или выше)
- Установленная СУБД MySQL 8.0
- Установленный phpMyAdmin (опционально)

Развертывание проекта:
1. Клонировать репозиторий:
   
"git clone https://github.com/temastraik/vnature_to-to_project <br> cd vnature_to-to_project"

3. В каталоге backend создать .env на основе .env.example, отредактировать настройки базы данных по вашим параметрам
<img width="291" height="116" alt="image" src="https://github.com/user-attachments/assets/15da9e65-ac1e-49ad-b22c-3f72191ad21d" />

4. Запустить базу данных в MySQL (через phpMyAdmin или командную строку)

5. В терминале установить и запустить необходимое PHP окружение

"cd backend <br> composer install <br> php artisan migrate <br> php artisan key:generate"

7. В терминале установить необходимое JavaScript окружение

"cd .. <br> cd frontend <br> npm install"

9. В терминале запустить сервер
   
"cd .. <br> cd backend <br> php artisan serve"

10. Собрать фронтенд с другого терминала
    
"cd vnature_to-to_project <br> cd frontend <br> npm run dev"

