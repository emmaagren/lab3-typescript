# Laboration3 - Angular I

Det här projektet är skapat som en del av kursen Programmering i TypeScript vid Mittuniversitetet.

## Publicerad webbplats

https://lab3-typescript.netlify.app/

## Beskrivning

Webbplatsen är en enhetsomvandlare byggd med Angular och TypeScript. Användaren kan omvandla mellan olika längd- och temperaturenheter.

## Funktioner

- Omvandling från meter till fot.
- Omvandling från fot till meter
- Omvandling från Celsius till Fahrenheit
- Omvandling från Fahrenheit till Celsius
- Resultat som uppdateras direkt vid inmatning
- Responsiv design för mobil och dator
- Navigering mellan tre undersidor

## Tekniker

- Angular
- TypeScript
- HTML
- CSS
- Angular Router
- Angular FormsModule och ngModel
- Angular DecimalPipe

## Webbplatsens struktur

Webbplatsen består av tre sidor:

**Startsida:** Introduktion till enhetsomvanlaren samt en informationskomponent.
**Konvertera:** Fyra inmatningsfält för omvandling av längd och temperatur.
**Om arbetet:** Beskrivning av hur laborationen har genomförts och vilka slutsatser som dragits.
Projektet använder separata Angular-komponenter för sidorna och en återanvändbar informationskomponent.

## Installation och körning

För att köra projektet lokalt behöver Node.js och npm vara installerade.

Klona projektet:

```bash
git clone https://github.com/emmaagren/lab3-typescript.git
```

Gå till projektmappen:

```bash
cd lab3-typescript
```

Installera beroenden:

```bash
npm install
```

Starta utvecklingsservern:

```bash
ng serve
```

Öppna sedan http://localhost:4200/ i webbläsaren.

## Produktionsbygge

Skapa en optimerad version av webbplatsen:

```bash
ng build
```

## Github

https://github.com/emmaagren/lab3-typescript.git

## Författare

Emma Ågren
Student
Mittuniversitetet
