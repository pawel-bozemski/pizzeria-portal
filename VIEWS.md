# Dashboard

- '/'
  - statystyki dziesiejszych zamówień (zdalne i lokalne)
  - lista rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- '/login'
  - pola na login i hasło
  - guzik do zalogowania (link do dashboardu)


# Widok dostępności stolików

- '/tables'
  - wybór daty i godziny
  - tabela z listą rezerwacji oraz wydarzeń
    - kolumna = 1 stolik
    - wiersz = 30 minut
    - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są różne stoliki
    - po kliknięciu rezerwacji/eventu przechodzimy na stronę szczegółów
- '/tables/booking/:id'
  - zawiera wszystkie informacje dotyczące rezerwacji
  - umożliwia edycję i zapisanie zmian
- '/tables/booking/:new'
  - analogicznie jak powyżej, bez początkowych informacji
- '/tables/events/:id'
  - analogicznie jak powyżej, dla eventów
- '/tables/events/:new'
  - analogicznie jak powyżej, dla eventów bez początkowych informacji

# Widok kelnera

-'/waiter'
 - tabela
  - w wierszach stoliki
  - w kolumnach różne informacje (status, czas od ostatniej aktywności)
  - ostatnia kolimna - dostępne akcje dla danego stolika
-'/waiter/order/new'
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówienie (zamówione produkty z opcjami i ceną)
  - kwotę zamówienia
-'/waiter/order/:id'
  - jak powyższe

# Widok kuchni

- '/kitchen'
  - lista zamówień w kolejności ich złożenia
  - lista musi zawierać:
    - numer stolika (lub zamówienia zdalnego)
    - pełne informacje dot. zamówionych dań
  - na liście musi być możłiwość oznaczenia zmówienia jako zrealizowane

