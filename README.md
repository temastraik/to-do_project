Общие положения функциональности:
- Laravel + Vue.
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
```bash
git clone https://github.com/temastraik/to-do_project
cd to-do_project
```
2. В каталоге backend создать .env на основе .env.example, отредактировать настройки базы данных по вашим параметрам
<img width="291" height="116" alt="image" src="https://github.com/user-attachments/assets/15da9e65-ac1e-49ad-b22c-3f72191ad21d" />

3. В терминале установить и запустить необходимое PHP окружение
```bash
cd backend
composer install
php artisan migrate
```
4. В терминале установить необходимое JavaScript окружение
```bash
cd ..
cd frontend
npm install
```
5. В терминале запустить сервер
```bash
cd ..
cd backend
php artisan serve
```
6. Собрать фронтенд с другого терминала
```bash
cd to-do_project
cd frontend
npm run dev
```
