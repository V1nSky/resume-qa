# Bug Reports — RU, Jira-style examples

## BUG-001 — Driver Board: кнопка Publish/Action доступна для неподходящего статуса
**Проект:** Driver Board / похожая логика статусов  
**Severity:** Major  
**Priority:** High  
**Environment:** macOS/Chrome, local dev, desktop/mobile viewport

**Steps:**
1. Открыть админку.
2. Найти сущность со статусом, для которого действие должно быть запрещено.
3. Нажать action-кнопку.

**Actual result:** действие доступно и может изменить состояние объекта некорректно.  
**Expected result:** кнопка скрыта или disabled для неподходящего статуса; backend дополнительно блокирует действие.  
**Комментарий:** проверять не только UI, но и API-защиту.

## BUG-002 — GLOBAL Dispatch: форма заявки принимает некорректный телефон
**Проект:** GLOBAL Dispatch  
**Severity:** Major  
**Priority:** High

**Steps:**
1. Открыть форму заявки.
2. Ввести имя и телефон `123`.
3. Отправить форму.

**Actual result:** заявка может быть создана с некорректным телефоном.  
**Expected result:** форма показывает ошибку валидации, API не сохраняет некорректную заявку.

## BUG-003 — Kwork Notifier: повторное уведомление не приходит после сброса дедупликации
**Проект:** Kwork Notifier  
**Severity:** Medium  
**Priority:** Medium

**Steps:**
1. Получить уведомление о новом сообщении.
2. Нажать `✓ Прочитано`.
3. Дождаться нового сообщения в том же диалоге.

**Actual result:** уведомление может не прийти, если state не сброшен корректно.  
**Expected result:** после сброса дедупликации следующее сообщение из диалога снова отправляется в Telegram.

## BUG-004 — Manicure Bot: слот остаётся доступным после бронирования
**Проект:** Manicure Bot  
**Severity:** Critical  
**Priority:** High

**Steps:**
1. Пользователь A бронирует свободный слот.
2. Пользователь B открывает календарь.
3. Пользователь B выбирает тот же слот.

**Actual result:** возможна двойная запись на одно время.  
**Expected result:** после подтверждения записи слот исчезает из доступных, backend проверяет занятость перед сохранением.

## BUG-005 — LeadHunter Mini App: действия доступны без корректной Telegram WebApp validation
**Проект:** LeadHunter v6  
**Severity:** Critical  
**Priority:** High

**Steps:**
1. Открыть Mini App API вне Telegram-клиента.
2. Отправить запрос к защищённому endpoint без валидного initData.
3. Проверить ответ.

**Actual result:** API может вернуть данные или выполнить действие.  
**Expected result:** запрос без валидного Telegram initData отклоняется с 401/403.
