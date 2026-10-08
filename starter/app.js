// WSPOLNY KONTRAKT: nazwy zmiennych i funkcji uzgadnia caly zespol.
const MAKS_ENERGIA = 10;
let pokoj = 1;
let energia = MAKS_ENERGIA;
let karta = false;
let bezpiecznik = false;
let zasilanie = false;
let koniec = false;
let wygrana = false;

// SEKCJA 0 — GOTOWY SILNIK NAUCZYCIELA
function start() {
  pokoj = 1;
  energia = MAKS_ENERGIA;
  karta = false;
  bezpiecznik = false;
  zasilanie = false;
  koniec = false;
  wygrana = false;
  console.log("UCIECZKA Z SERWEROWNI. Zasilanie awaryjne wystarczy na 10 tur.");
  pomoc();
  rozejrzyj();
}

function zakonczTure() {
  energia = energia - 1;
  console.log("Pozostala energia: " + energia);
  if (wygrana) {
    console.log("WYGRANA! Drzwi otwarte. Mozesz wrocic do domu.");
  } else if (energia === 0) {
    koniec = true;
    console.log("PRZEGRANA. Zasilanie awaryjne padlo. Wpisz start().");
  }
}

// SEKCJA A — INFORMACJE I MAPA
function nazwaPokoju(numer) {
  // TODO A1: switch; zwroc nazwe pokoju jako tekst.
  switch (numer){
    case 1:
      return "Recepcja";
    case 2:
      return "Magazyn";
    case 3:
      return "Serwerownia";
    case 4:
      return "Wyjscie";
    default:
      return "Nieznane pomieszczenie";
  }
  return "Nazwa do uzupelnienia";
}

function pomoc() {
  console.log('Dostepne: start(), pomoc(), status(), mapa(), rozejrzyj(), idz("prawo"), akcja("karta"), akcja("bezpiecznik"), akcja("napraw"), akcja("wyjdz")');
  // TODO A5: dopisz pozostale kierunki i akcje oraz zasade kosztu.
  console.log('Zasada kosztu: Kazdy udany ruch i udana akcja kosztuja 1 energie. Bledy i przegladanie stanu sa bezplatne.');
}

function status() {
  // TODO A3: wypisz pokoj, energie, przedmioty, zasilanie i stan gry.
  console.log("Karta: " + (karta ? "tak" : "nie"));
  console.log("Pokoj: " + pokoj + "(" + nazwaPokoju(pokoj) + ")");
  console.log("Energia: " + energia);
  console.log("Bezpiecznik: " + (bezpiecznik ? "tak" : "nie" ));
  console.log("Zasilanie: " + (zasilanie ? "tak" : "nie"));
  console.log("Koniec gry: " + (koniec ? "tak" : "nie"));
  console.log("Wygrana: " + (wygrana ? "tak" : "nie"));
  console.log("Status do uzupelnienia");
}

function mapa() {
  // TODO A2: petla for od 1 do 4; nazwa i znacznik aktualnego pokoju.
  for( let numer = 1; numer <= 4; numer = numer + 1){

    let opis = `${numer} ${nazwaPokoju(numer)}`;
    if(numer === pokoj){
      opis = opis + '<-- jestes tutaj';
    }
    console.log(opis);
  }
  console.log("Mapa do uzupelnienia");
}

function rozejrzyj() {
  // TODO A4: switch(pokoj); opis zgodny ze stanem przedmiotow.
  switch(pokoj){
    case 1:
      console.log("Jestes w Recepcji");
      if(!karta){
        console.log("karta lezy na biurku");
      }
      break;
    case 2:
      console.log("Jestes w magazynie");
      if(!bezpiecznik && !zasilanie){
        console.log("Bezpiecznik lezy na polce");
      }
      break;
    case 3:
      console.log("Jestes w Serwerowni");
      if(zasilanie){
        console.log("Zasilanie dziala");
      }else{
        console.log("Zasilanie nie dziala, zamontuj bezpiecznik")
      }
      break;
    case 4:
      console.log("Jestes przy wyjsciu");
      console.log("Aby wyjsc wlacz zasilanie i wez karte dostepu");
      break;
    default:
      return "Nieznane pomieszczenie";

  }
  console.log("Opis pokoju do uzupelnienia");
}

// SEKCJA B — RUCH
function idz(kierunek) {
  if(koniec==true)
  {
    console.log("Gra sie zakonczyla");
    return ;
  }
  let nastepnyPokoj = pokoj;
  switch(kierunek)
  {
    case "prawo":
      {
        
      
        nastepnyPokoj++;
        if(nastepnyPokoj>4)
          {
            console.log("sciana !!!");
            return ;
            
          }
          
         
      
        break;
      }
    case "lewo":
      {
        
        nastepnyPokoj--;
        if(nastepnyPokoj<1)
        {
          console.log("sciana !!!");
          return ;
          
        }
        
        break;
      }
    default:
      {
        console.log(`Wskazówka: jetes w ${pokoj} pokoju a mozesz sie poruszac w lewo czyli pokoj dalej 
          lub lewo pokoj nizej `);
        
        break;
        
      }


  }
  pokoj=nastepnyPokoj;
  rozejrzyj();
  zakonczTure();
  // TODO B1: zablokuj ruch po koncu gry.
  // TODO B2: switch kierunku; oblicz kandydat na nowy pokoj.
  // TODO B3: odrzuc pokoj poza 1..4 i nieznany kierunek bez kosztu.
  // TODO B4: zapisz poprawny pokoj, rozejrzyj(), zakonczTure().
  // console.log("Ruch do uzupelnienia");
}

// SEKCJA C — PRZEDMIOTY I WYGRANA
function akcja(co) {
  // TODO C1: zablokuj akcje po koncu gry.
  // TODO C2: switch: karta / bezpiecznik / napraw / wyjdz.
  // TODO C2: przed zmiana sprawdz pokoj i wymagany stan.
  // TODO C3: przy odrzuceniu return; przy sukcesie break.
  // TODO C3: po switch jedno zakonczTure().
  // TODO C4: wygrana i koniec ustawione przed rozliczeniem tury!
  console.log("Akcje do uzupelnienia");
}

start();
