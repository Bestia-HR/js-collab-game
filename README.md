# JS Collab Game: Ucieczka z serwerowni

- Pracujecie w zespole dwu- albo trzyosobowym. 
- Budujecie jedną tekstową grę. 
- Każda osoba pisze część programu na własnym branchu, a potem łączycie pracę w jednym repozytorium. 
- Gracz wydaje polecenia w konsoli dewelopera.

## 1. Wasza misja

Jest piątek, 16:59. W szkolnej serwerowni zgasło światło, elektroniczne drzwi zablokowały się, a administrator napisał tylko: „u mnie działa”. Musicie znaleźć kartę dostępu, wziąć bezpiecznik, przywrócić zasilanie i otworzyć wyjście. Macie 10 jednostek energii awaryjnej.

- Pomieszczenia tworzą korytarz. 
- `idz("prawo")` zwiększa numer pokoju o 1, a `idz("lewo")` zmniejsza o 1. 
- Nie ma teleportacji.

| Numer | Pomieszczenie | Co można zrobić |
|---|---|---|
| 1 | Recepcja | Zabrać kartę |
| 2 | Magazyn | Zabrać bezpiecznik |
| 3 | Serwerownia | Zamontować posiadany bezpiecznik i przywrócić zasilanie |
| 4 | Wyjście | Otworzyć drzwi, gdy mamy kartę i działa zasilanie |

**Reguły:**

- Każdy udany ruch i wykonana akcja kosztują dokładnie 1 energię.
- Oglądanie mapy, opisów, pomocy i stanu jest bezpłatne.
- Literówka, ruch w ścianę, ponowne zabranie przedmiotu i akcja bez spełnionych warunków są bezpłatne.
- Bezpiecznik znika z kieszeni po naprawie. Nie odradza się w magazynie.
- Przy energii 0 przegrywamy, chyba że właśnie skutecznie otworzyliśmy wyjście. Wygrana ostatnim ruchem jest dozwolona.
- Po końcu gry można oglądać informacje, ale ruch i akcje są zablokowane. `start()` zaczyna od nowa.

To gra dla jednego gracza tworzona przez zespół. Możecie wspólnie podejmować decyzje albo przekazać gotową grę innemu zespołowi.

## 2. Przygotowanie projektu — jedna wspólna baza

1. "Osiołek" zakłada repozytorium zespołu na GitHubie i zapewnia pozostałym członkom uprawnienia do zapisu. 

    - Zaproszone osoby akceptują zaproszenie. 

    - Wszyscy klonują to samo repozytorium zespołu; osobne forki nie są tu potrzebne.
2. Pracujecie w swoich kopiach na własnych pendrive’ach. 

    - Na szkolnym stanowisku uruchamiacie znaną konfigurację SSH/Gita z pendrive’a.
3. "Osiołek" kopiuje zawartość folderu `starter` do repozytorium: `index.html` i `app.js`. Dokłada tę instrukcję jako README, jeśli chcecie mieć zasady obok kodu.
4. "Osiołek" zapisuje wspólną bazę na `main` i wypycha ją do zdalnego repozytorium. Pozostali pobierają bazę przed utworzeniem branchy.
5. Każdy otwiera `index.html` w przeglądarce. Otwiera F12 → Console/Konsola. Na części laptopów potrzebne jest Fn+F12; można użyć menu przeglądarki.
6. Wpiszcie `pomoc()` i naciśnijcie Enter. Powinien pojawić się komunikat. Pozostałe funkcje mają na razie komunikaty „do uzupełnienia”. To poprawny, celowo nieukończony starter.

Nie potrzeba Node, npm, serwera, internetu do samej gry ani dodatkowego CSS. Internet jest potrzebny do pracy ze zdalnym repozytorium. Skrypt jest zwykłym skryptem z `defer`; **nie dodawajcie `type="module"`**, bo w tej wersji wywołujemy jego funkcje bezpośrednio z konsoli strony.

Kod piszcie w `app.js`, a w konsoli wpisujcie polecenia gry. Po zmianie kodu: zapisz plik → odśwież stronę → wykonaj próbę. Odświeżenie uruchamia nową grę. Samo `start()` resetuje stan, ale nie wczytuje zmienionego pliku.

Po komendzie konsola może pokazać dodatkowe `undefined`: nasza funkcja wypisała komunikaty, ale nie zwraca wartości. To nie jest błąd. Czerwony `ReferenceError` lub `SyntaxError` wymaga sprawdzenia. Gdy przeglądarka ostrzega przed wklejaniem kodu do konsoli, nie obchodźcie zabezpieczenia; krótkie komendy wpisujcie ręcznie, a listingi zapisujcie w edytorze.

## 3. Kontrakt zespołu — ustalcie go przed kodowaniem

Nie zmieniamy nazw publicznych funkcji, zmiennych ani tekstów komend bez uzgodnienia z resztą zespołu. Komendy są małymi literami, bez polskich znaków. Napisy trzeba podawać w cudzysłowach: `idz("prawo")`, a nie `idz(prawo)`.

| Zmienna | Znaczenie i stan początkowy |
|---|---|
| `MAKS_ENERGIA` | Stała 10 |
| `pokoj` | Aktualny pokój, początkowo 1 |
| `energia` | Pozostałe tury, początkowo 10 |
| `karta` | Czy mamy kartę; `false` |
| `bezpiecznik` | Czy bezpiecznik jest w kieszeni; `false` |
| `zasilanie` | Czy zamontowano bezpiecznik; `false` |
| `koniec` | Czy rozgrywka się skończyła; `false` |
| `wygrana` | Czy powodem końca jest sukces; `false` |

| Funkcja | Argument i zadanie | Zwracana wartość |
|---|---|---|
| `start()` | Resetuje wszystkie zmienne, wypisuje pomoc i opis | Brak |
| `zakonczTure()` | Zużywa 1 energię, ogłasza sukces albo porażkę | Brak |
| `nazwaPokoju(numer)` | Zamienia numer pokoju na nazwę | Tekst |
| `pomoc()` | Wypisuje komendy i zasady | Brak |
| `status()` | Pokazuje aktualne dane | Brak |
| `mapa()` | Pętlą wypisuje cztery pokoje i zaznacza aktualny | Brak |
| `rozejrzyj()` | Opisuje aktualny pokój i przedmioty | Brak |
| `idz(kierunek)` | Obsługuje `"prawo"` oraz `"lewo"` | Brak |
| `akcja(co)` | Obsługuje `"karta"`, `"bezpiecznik"`, `"napraw"`, `"wyjdz"` | Brak |

`start()` i `zakonczTure()` są gotowe. Czytacie je wspólnie, lecz w podstawowym zadaniu ich nie zmieniacie. Koszt naliczamy wyłącznie przez `zakonczTure()`. Nie odejmujcie dodatkowej energii w `idz` albo w gałęziach `akcja`.

Wspólne zmienne są świadomym uproszczeniem tego ćwiczenia. Ułatwiają połączenie kodu bez wprowadzania obiektów i modułów. Później stan programu będzie można zamknąć w obiekcie. Tutaj gramy komendami; ręczne ustawianie `energia = 100` jest ingerencją w program, nie legalnym ruchem.

## 4. Podział pracy

| Zespół | Osoba A | Osoba B | Osoba C |
|---|---|---|---|
| 3 osoby | Sekcja A: mapa, nazwy, komunikaty | Sekcja B: ruch; prowadzi integrację i zapisuje próby | Sekcja C: akcje i wygrana |
| 2 osoby | Sekcje A i B | Sekcja C; przygotowuje scenariusze prób |

Sekcja C wymaga najwięcej warunków; osoba B może po zakończeniu ruchu pomóc jej, czytając warunki i proponując przypadki testowe. Nie edytuje równocześnie tego samego fragmentu na własnym branchu. Role nie oznaczają, że tylko jedna osoba umie dany fragment: przy odbiorze każdy wyjaśnia jedną funkcję napisaną przez kolegę.

Wszyscy zmieniają ten sam `app.js`, ale **tylko swoją oznaczoną sekcję**. Nie przeformatowujcie całego pliku, nie przenoście funkcji ani końcowego `start()`. Git potrafi łączyć zmiany w różnych miejscach; nie gwarantuje to zgodności logiki, dlatego potrzebne są próby całej gry.

## 5. Karta A: mapa, nazwy i informacje

**Krok A1 — funkcja, która zwraca tekst.** W `nazwaPokoju(numer)` użyj `switch`. Dla 1 zwróć `"Recepcja"`, dla 2 `"Magazyn"`, dla 3 `"Serwerownia"`, dla 4 `"Wyjscie"`, a dla innego numeru `"Nieznane pomieszczenie"`.

Pierwsza gałąź jako podpowiedź:

```js
function nazwaPokoju(numer) {
  switch (numer) {
    case 1:
      return "Recepcja";
    // Pozostale przypadki dopisujesz samodzielnie.
    default:
      return "Nieznane pomieszczenie";
  }
}
```

Po `return` nie jest potrzebne `break`: opuszczamy całą funkcję. Sam `console.log("Recepcja")` nie zastąpi zwrócenia wartości. Inne funkcje mają dostać nazwę i wykorzystać ją we własnym komunikacie.

**Próba:** wpisz `nazwaPokoju(3)` oraz `nazwaPokoju(99)`. Oczekujesz odpowiednio `"Serwerownia"` i komunikatu o nieznanym pomieszczeniu.

**Krok A2 — mapa.** Pętla `for` ma przejść po liczbach od 1 do 4 włącznie. Każda iteracja wypisuje numer i `nazwaPokoju(numer)`. Gdy `numer === pokoj`, dopisz `" <-- jestes tutaj"`. Użyj `if` albo ternariusza. Mapa nie może zmieniać `pokoj` ani `energia`.

```js
for (let numer = 1; numer <= 4; numer = numer + 1) {
  // Zbuduj i wypisz opis jednego pomieszczenia.
}
```

**Krok A3 — status.** Pokaż aktualny pokój, energię, kartę, bezpiecznik, zasilanie i stan gry. Wykorzystaj co najmniej jeden ternariusz:

```js
console.log("Karta: " + (karta ? "tak" : "nie"));
```

Nawiasy sprawiają, że najpierw wybieramy słowo, a dopiero później łączymy je z etykietą.

**Krok A4 — opis pokoju.** W `rozejrzyj()` użyj `switch (pokoj)`. W recepcji karta leży na biurku tylko, gdy `karta` jest `false`. W magazynie bezpiecznik leży na półce tylko, gdy nie jest ani w kieszeni, ani zamontowany: `!bezpiecznik && !zasilanie`. W serwerowni opisz, czy zasilanie działa. Przy wyjściu przypomnij wymagania.

**Krok A5 — pomoc.** Wypisz wszystkie dozwolone komendy oraz regułę kosztu. Przygotuj komunikaty, dzięki którym inny zespół zagra bez zaglądania do kodu.

**Odbiór A:** mapa ma dokładnie cztery wiersze i jeden znacznik; pomoc wymienia cztery akcje; wielokrotne czytanie informacji nie zużywa energii.

## 6. Karta B: ruch

**Krok B1 — zakończona gra.** Na początku `idz` sprawdź `koniec`. Jeśli to `true`, wypisz informację i zrób `return`. Dzięki temu reszta funkcji się nie wykona.

**Krok B2 — kandydat na nowy pokój.** Utwórz lokalne `let nastepnyPokoj = pokoj`. W `switch (kierunek)` dla `"prawo"` dodaj 1, dla `"lewo"` odejmij 1. Przy nieznanym kierunku wypisz wskazówkę i wyjdź przez `return`.

**Krok B3 — granice.** Jeśli kandydat jest mniejszy od 1 LUB większy od 4, wypisz informację o ścianie i wyjdź. Sprawdzaj kandydat, zanim zmienisz wspólny `pokoj`.

**Krok B4 — wykonanie.** Dopiero teraz przypisz nowy numer do `pokoj`, wywołaj `rozejrzyj()` i dokładnie raz `zakonczTure()`.

**Próby od nowej gry:**

```js
start();
idz("lewo");   // Nadal pokoj 1, energia 10.
idz("gora");   // Nadal pokoj 1, energia 10.
idz("prawo");  // Pokoj 2, energia 9.
status();
```

Twój ruch da się sprawdzić, gdy koledzy jeszcze piszą: nawet niegotowe `status()` nie przeszkadza wpisać w konsoli `pokoj` i `energia` jako osobne odczyty. Nie zmieniaj ich ręcznie w odbiorze gry.

## 7. Karta C: przedmioty i wygrana

**Krok C1 — blokada.** Jak w ruchu, na początku odrzuć akcję, gdy `koniec` jest prawdą.

**Krok C2 — cztery gałęzie `switch (co)`.** Dla każdej najpierw sprawdź warunki, dopiero potem zmieniaj stan.

| Akcja | Kiedy jest dozwolona | Co zmienia |
|---|---|---|
| `karta` | Pokój 1 i jeszcze nie mamy karty | `karta = true` |
| `bezpiecznik` | Pokój 2; nie mamy bezpiecznika i zasilanie jeszcze nie działa | `bezpiecznik = true` |
| `napraw` | Pokój 3; mamy bezpiecznik i zasilanie nie działa | `bezpiecznik = false`, `zasilanie = true` |
| `wyjdz` | Pokój 4; mamy kartę i działa zasilanie | `wygrana = true`, `koniec = true` |

**Jedna gałąź jako wzór:**

```js
case "karta":
  if (pokoj !== 1 || karta) {
    console.log("Tutaj nie ma karty do zabrania.");
    return;
  }
  karta = true;
  console.log("Zabierasz karte.");
  break;
```

`return` przy odmowie kończy funkcję. `break` po sukcesie kończy tylko `switch`, więc kod pod `switch` jeszcze się wykona.

**Krok C3 — koszt w jednym miejscu.** Po całym `switch` wywołaj raz `zakonczTure()`. Dzięki `return` odrzucone działania do tego miejsca nie dojdą. Gałąź `default` też powinna wypisać komunikat i zrobić `return`.

**Krok C4 — wygrana przed rozliczeniem.** Przy poprawnym wyjściu ustaw `wygrana` i `koniec` przed `zakonczTure()`. Gotowy silnik najpierw sprawdza wygraną, więc otwarcie drzwi ostatnią jednostką energii zostanie uznane za sukces.

**Próby:** karta w recepcji zużywa jedną energię, druga próba nic nie zmienia. Bezpiecznika nie można zabrać z recepcji. Naprawa bez przedmiotu nie działa. Przy wyjściu samą kartą nie otwieramy drzwi.

## 8. Łączenie pracy — małe kroki

Nazwy branchy: `feature/mapa`, `feature/ruch`, `feature/akcje`. W parze można użyć `feature/mapa-ruch` i `feature/akcje`. Każdy branch startuje ze wspólnej bazy.

Przykład dla autora ruchu:

```bash
git switch main
git pull --ff-only
git switch -c feature/ruch
# Edytujesz swoja sekcje i sprawdzasz ja w przegladarce.
git add app.js
git commit -m "Dodaj ruch pomiedzy pokojami"
git push -u origin feature/ruch
```

"Osiołek" integruje ukończone sekcje po kolei. Przed następną czeka na zakończenie prób poprzedniej:

```bash
git switch main
git pull --ff-only
git fetch origin
git merge origin/feature/mapa
# Otworz gre, odswiez i sprawdz mape oraz informacje.
git merge origin/feature/ruch
# Odswiez i sprawdz granice oraz koszt ruchu.
git merge origin/feature/akcje
# Odswiez i wykonaj wspolne proby calej gry.
git push origin main
```

`--ff-only` zatrzyma pobieranie, jeśli lokalny i zdalny `main` się rozeszły; wtedy sprawdźcie historię zamiast używać siłowego push. Po integracji każdy pobiera finalny `main`. Te polecenia zakładają, że tylko wyznaczony "osiołek" publikuje integrację na `main`, a pozostali publikują swoje branche.

Jeżeli merge zgłosi konflikt, zatrzymajcie się i przeczytajcie obie wersje razem. Usuńcie znaczniki konfliktu, zachowując potrzebne zmiany obu osób. Zapiszcie plik, uruchomcie grę, potem `git add app.js` i `git commit`. Nie wybierajcie całego „ours/theirs” bez przeczytania. Konflikt nie jest obowiązkowy — udane połączenie rozdzielonych zadań też jest współpracą.

## 9. Odbiór i wymiana gier

W repozytorium utwórzcie `TESTY.md`. Wpiszcie: próbę, wynik oczekiwany, wynik otrzymany, kto sprawdzał. Nie wystarczy zdanie „działa”. Każdą niezależną próbę zaczynajcie od `start()`.

1. Mapa ma cztery pokoje, tylko jeden zaznaczony. Informacje są bezpłatne.
2. Lewo z pokoju 1 i nieznany kierunek nie zmieniają danych.
3. Prawo przesuwa o jeden pokój i zużywa jedną energię.
4. Tego samego przedmiotu nie da się zabrać dwa razy.
5. Nie da się naprawić zasilania bez bezpiecznika ani otworzyć drzwi bez obu wymagań.
6. Da się wygrać, wykonując potrzebne czynności w rozsądnej kolejności.
7. Po dziesięciu poprawnych ruchach bez wygranej następuje porażka. Kolejny ruch nie zmienia już stanu.
8. `start()` przywraca energię, pozycję oraz wszystkie flagi.

Po ukończeniu podstawy zamieńcie się stanowiskami z innym zespołem. Zagrajcie według jego komunikatów. Zgłoście jeden konkretny problem lub jedną rzecz, która pomagała zrozumieć grę.

## 10. Dodatki — dopiero po działającej podstawie

Wybierzcie najwyżej jeden. Przed pisaniem uzgodnijcie zmianę kontraktu.

- **Licznik ruchów:** nowa zmienna zerowana przez `start`, zwiększana tylko po poprawnym ruchu. Pokaż wynik w `status`.
- **Czytelny poziom energii:** funkcja `pasekEnergii()` buduje w pętli napis z dziesięciu znaków, np. pełne znaki dla pozostałej energii i kropki dla zużytej. Funkcja zwraca napis; `status()` go wypisuje.
- **Własny klimat:** zmieńcie opisy na ucieczkę z lochu, statku lub szkoły po godzinach. W podstawowym kontrakcie zachowajcie numery i mechanikę, żeby nie zepsuć cudzych funkcji.

Nie dodawajcie na tym etapie ekwipunku w tablicach, losowych przeciwników, grafiki ani nieskończonej pętli rozgrywki. Najpierw oddajcie małą, kompletną grę.
