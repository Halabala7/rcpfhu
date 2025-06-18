# ⏱️ Rejestrator Czasu Pracy z Kartami NFC i ESP32



System ma być stworzony z myślą o firmach, które chcą **monitorować czas pracy pracowników** w sposób automatyczny i nowoczesny. 
Pracownicy odbijają się kartami NFC przy czytniku podłączonym do mikrokontrolera ESP32, który przesyła dane do serwera. 
Strona internetowa umożliwia przegląd i analizę danych w czasie rzeczywistym.

---

## 🔧 Funkcjonalności

- ✅ Rejestracja wejścia i wyjścia pracowników za pomocą kart NFC
- ✅ Połączenie z serwerem i bazą danych
- ✅ Panel administracyjny z dostępem do danych
- ✅ Statystyki czasu pracy w przejrzystej formie
- ✅ Nowoczesny, responsywny interfejs użytkownika

---

## 💡 Jak to działa?

1. Pracownik przykłada kartę NFC do czytnika.
2. ESP32 odczytuje unikalny identyfikator karty.
3. Dane przesyłane są do serwera przez Wi-Fi.
4. Serwer zapisuje dane do bazy.
5. Strona www umożliwia przegląd zdarzeń, analizy i statystyki.

---

## 🧰 Technologie

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js 
- **Baza danych**: MySQL 
- **Urządzenie IoT**: ESP32 z modułem NFC 
- **Protokół komunikacji**: HTTP 


## ⚙️ Wymagania

- ESP32 z obsługą Wi-Fi
- Moduł NFC
- Karty zbliżeniowe NFC 
- Serwer z backendem i bazą danych (lokalnie lub w chmurze)

---

## 📊 Przykładowe dane

| Pracownik | Wejście        | Wyjście       | Czas pracy |
|-----------|----------------|----------------|------------|
| Jan Nowak | 2025-06-18 08:01 | 2025-06-18 16:05 | 8h 04min   |
| Anna Kowalska | 2025-06-18 08:12 | 2025-06-18 15:59 | 7h 47min   |

---

## 📌 Cel projektu

Pomóc firmom w:

- zwiększeniu przejrzystości pracy
- optymalizacji czasu i kosztów
- automatyzacji procesów ewidencji czasu pracy

