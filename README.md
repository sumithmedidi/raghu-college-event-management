# College Event Management System (CEMS)
**Academic Year:** 2026  

---

## 📌 Project Overview
The **College Event Management System** is a centralized web application designed to streamline planning, organizing, registering, and tracking college events (Technical Hackathons, Cultural Fests, Sports Tournaments, Workshops, and Seminars).

---

## 🚀 Front-End Prototype Structure (HTML, CSS, JS)

This standalone prototype is structured into three clean, self-contained files:

```
c:\FSD PROJECT\
│
├── index.html        # Complete UI layout, navigation, tabs, cards, and interactive modals
├── style.css         # Custom responsive styling, college theme, card animations & print CSS
└── script.js         # Client-side state, search, category filters, registration logic & CSV export
```

### How to Run:
Simply double-click `index.html` to open it in **Google Chrome**, **Microsoft Edge**, or any modern web browser.  
No server installation or complex setup is required to evaluate the prototype.

---

## ✨ Implemented Core Modules

| Module | Features in Prototype |
| :--- | :--- |
| **Role Switcher** | Quick toggle between **Student**, **Coordinator**, and **Admin** modes. |
| **Event Discovery** | Live search bar & category filters: *Technical*, *Cultural*, *Sports*, *Workshops*, and *Seminars*. |
| **Event Cards** | Dynamic capacity progress bars, seat availability counters, date, venue, and tags. |
| **Student Registration** | 1-click registration modal with validation, roll number tracking, and duplicate prevention. |
| **Digital E-Pass** | Generates digital entry pass with a unique reference code (`EVT-2026-XXXX`) and simulated QR code. |
| **Coordinator Console** | Event table with capacity tracking, participant lists, and CSV export. |
| **Attendance & Certificates** | 1-click Attendance Toggle (*Present / Absent*). Marking *Present* instantly unlocks the official **Certificate of Participation**. |
| **Live Announcements** | Broadcast ticker showing urgent updates (e.g. schedule changes, room updates). |

---

## 🔄 Next Steps: Transitioning to Django & MySQL
When you are ready, we can connect this front-end interface directly to:
1. **Python Django Backend** (already initialized in the background)
2. **Database Models** (SQLite for local testing, MySQL ready for college labs)
3. **User Authentication & Session Management**
