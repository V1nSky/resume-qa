# Bug Reports — EN, Jira-style examples

## BUG-001 — Driver Board: action button is available for an invalid status
**Project:** Driver Board  
**Severity:** Major  
**Priority:** High  
**Environment:** macOS/Chrome, local dev, desktop/mobile viewport

**Steps:**
1. Open the admin panel.
2. Find an entity with a status where the action must be forbidden.
3. Click the action button.

**Actual result:** the action is available and can change the entity state incorrectly.  
**Expected result:** the button is hidden or disabled for invalid statuses; backend also blocks the action.

## BUG-002 — GLOBAL Dispatch: lead form accepts an invalid phone number
**Project:** GLOBAL Dispatch  
**Severity:** Major  
**Priority:** High

**Steps:**
1. Open the lead form.
2. Enter a valid name and phone `123`.
3. Submit the form.

**Actual result:** a lead may be created with an invalid phone.  
**Expected result:** the form shows validation error and API does not store invalid data.

## BUG-003 — Kwork Notifier: repeated notification is not sent after deduplication reset
**Project:** Kwork Notifier  
**Severity:** Medium  
**Priority:** Medium

**Steps:**
1. Receive a notification about a new message.
2. Click `✓ Read`.
3. Wait for a new message in the same dialog.

**Actual result:** notification may not be sent if the state was not reset correctly.  
**Expected result:** after deduplication reset, the next message from the same dialog is sent again.

## BUG-004 — Manicure Bot: a booked slot remains available
**Project:** Manicure Bot  
**Severity:** Critical  
**Priority:** High

**Steps:**
1. User A books a free slot.
2. User B opens the calendar.
3. User B selects the same slot.

**Actual result:** double booking may happen.  
**Expected result:** after booking confirmation, the slot disappears from available slots; backend checks slot availability before saving.

## BUG-005 — LeadHunter Mini App: actions are available without Telegram WebApp validation
**Project:** LeadHunter v6  
**Severity:** Critical  
**Priority:** High

**Steps:**
1. Open Mini App API outside Telegram client.
2. Send a request to a protected endpoint without valid initData.
3. Check the response.

**Actual result:** API may return data or execute an action.  
**Expected result:** request without valid Telegram initData is rejected with 401/403.
