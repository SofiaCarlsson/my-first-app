import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Person from "../components/Person"
import BarnensSaga from "../components/BarnensSaga"

const Body = styled.div`
  input {
    width: 100%;
    padding: 5px;
  }
  textarea {
    width: 100%;
    padding: 5px;
  }
  /* Skriv css här */
  button {
    background-color: #006699;
    color: #ffffff;
    border: 1px solid #ffffff;
    padding: 4px 15px;
    margin-right: 2px;

    :hover {
      background-color: #204060;
    }
  }
  h2 {
    color: #006699;
    border-bottom: 1px solid #006699;
  }
  p {
    font-size: 18px;
    font-weight: 800;
  }
  div {
  }
`

const Coloredbox = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${p => p.color};
  box-shadow: 0 0 5px;
  margin-right: 10px;
`
const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`
const IndexPage = () => {
  const [value, setValue] = useState("")
  // Skriv javascript här
  const firstName = "Sofia"
  const lastName = "Carlsson"
  const age = 106

  return (
    <Layout>
      <Body>
        <h2>
          Hej, mitt namn är {firstName} {lastName}
        </h2>
        <p>Jag är {age} år gammal och bor på Hattgatan 30.</p>

        <h2>Hej, mitt namn är Sebbe.</h2>
        <p>Jag är 1010 år gammal och bor på Mars!</p>

        <h2>Beskrivning</h2>
        <p>
          <em>Hej</em> hopp <strong>trallala</strong>
        </p>

        <ul>
          <li>Träna</li>
          <li>Resa</li>
          <li>Vila</li>
        </ul>

        <hr></hr>

        <img src="http://sundsvall.se/wp-content/uploads/2016/03/Hartungviken-liten-vic-370x275.jpg"></img>

        <h2>Inköpslista</h2>
        <ol>
          <li>En handväska</li>
          <li>En resa</li>
        </ol>

        <label>Max 300 tkn</label>
        <input placeholder="Fritext" />
        <br />
        <br />

        <textarea />

        <br />
        <button>+</button>
        <button>-</button>

        <Container>
          <Coloredbox color="#0077b3"></Coloredbox>
          <Coloredbox color="#0088cc"></Coloredbox>
          <Coloredbox color="#0099e6"></Coloredbox>
          <Coloredbox color="#00aaff"></Coloredbox>
        </Container>

        {/* ------------------------------------------------------------ */}
        {/* ------------------------- Javascript ----------------------- */}
        {/* ------------------------------------------------------------ */}

        {/* Uppgift 1 */}
        {/* - Byt ut ditt förnamn mot en javascript-variabel. KLAR! */}

        {/* Uppgift 2 */}
        {/* - Byt ut ditt efternamn mot en javascript-variabel. KLAR! */}

        {/* Uppgift 3 */}
        {/* - Byt ut din ålder mot en javascript-variabel. KLAR! */}

        {/* Uppgift 4 */}
        {/* - Byt ut listan med saker du vill göra mot en javascript-lista (skrivs som ["första", "andra"]). Tips, man kan skapa automatiska HTML-listor från arrayer med funktionen .map(), exempelvis <ul>{todos.map(todo => <li>todo</li>)}</ul> */}

        {/* Uppgift 5 */}
        {/* - Byt ut de enstaka variablerna mot ett Sofia-objekt. */}

        {/* Uppgift 6 */}
        {/* - Skapa en ny ändringsbar variabel med formatet const [value, setValue] = useState(0) */}
        {/*   value och Value kan kallas vad du vill men bör hålla formatet ovan. För det här exemplet ska de heta const [charactersRemaining, setCharactersRemaining] = useState(300) */}

        {/* Uppgift 7 */}
        {/* - Visa resultatet av charactersRemaining variabeln istället för det hårdkodade värdet 300 ovanför input.  */}

        {/* Uppgift 8 */}
        {/* - Ändra värdet för charactersRemaining med hjälp av +/- knapparna. Detta görs genom att skriva exempelvis onClick={() => setCharactersRemaining(charactersRemaining + 1)} */}

        {/* Uppgift 9 */}
        {/* - Lägg till ett ändringsbart värde för freeText med useState och använd det för att sätta värden i input */}
        {/*   För att sätta värden i input använd value={freeText} och onChange={e => { setFreeText(e.target.value); }} */}

        {/* Uppgift 10 */}
        {/* - Använd räknaren för sträng-längd (freeText.length) för att sätta charactersRemaining till korrekt värde. */}
        {/*   Inuti inputs onChange, efter setFreeText(), kan du lägga till nya sträng-längden: setCharactersRemaining(e.target.value.length). */}

        {/* Uppgift 11 */}
        {/* - Skapa en ändringsbar åldersvariabel, en rubrik för ålder och +/- knappar för att ändra åldersvariabel. */}

        {/* Uppgift 12 */}
        {/* - Skapa en funktion som sätter ihop hälsningsmeddelandet och använd den för att visa upp meddelandet */}
        {/*   För att skapa en funktion skriver du const funktionNamn = () => { innehåll } */}
        {/*   För att använda en funktion skriver du { funktionNamn() } */}

        {/* Uppgift 13 */}
        {/* - Fäst funktionen i ett attribut på Sofia-objektet */}

        {/* Uppgift 14 */}
        {/* - Skapa ett Sebastian-objekt som har samma attribut som Sofia-objektet. */}

        {/* Uppgift 15 */}
        {/* - Skapa en lista (array) som innehåller båda objekten och visa uppgifterna för båda på sidan med en loop dvs. listNamn.map(). */}

        {/* Uppgift 16 */}
        {/* - Flytta deklarationen av html för objekten inuti loopen till filen Person.js. Tips, det ska vara innanför return (*här*). För att använda filen och skicka in data, skriv <Person data={data} /> */}

        {/* Uppgift 17 */}
        {/* - Skapa en ny komponent för en input med tillhörande label. */}

        {/* Uppgift 18 */}
        {/* - Använd den nya komponenten för att fylla i förnamn, efternamn och ålder på ett nytt personobjekt.  */}

        {/* Uppgift 19 */}
        {/* - Skapa en knapp för att lägga in personobjektet till listan med personer. */}
        {/*   För att lägga till i en lista används metoden .push() exempelvis listNamn.push("Senaste inlägg i array") */}

        {/* Uppgift 20 */}
        {/* - Skapa en knapp för att ta bort det senaste tillägget från listan. */}
        {/*   För att ta bort ur en lista används metoden .pop() exempelvis listNamn.pop() */}

        {/* ------------------------------------------------------------ */}
        {/* ------------------------- CSS ------------------------------ */}
        {/* ------------------------------------------------------------ */}

        {/* Uppgift 1 */}
        {/* - Byt färg på huvudrubrikerna (h2) med hjälp av color: färg KLAR! */}
        {/* Uppgift 2 */}
        {/* - Lägg till en linje på huvudrubrikerna (h2) med hjälp av border-bottom: storlek typ färg KLAR! */}
        {/* Uppgift 3 */}
        {/* - Lägg till en bakgrundsfärg och linje på knapparna (button) med hjälp av background-color: färg och border: storlek typ färg KLAR! */}
        {/* Uppgift 4 */}
        {/* - Lägg till en ny färg på knapparna (button) när musen är ovanför dem med hjälp av :hover och background-color: färg KLAR! */}
        {/* Uppgift 5 */}
        {/* - Öka avståndet mellan text och linje på knapparna (button) med padding: storlek KLAR! */}
        {/* Uppgift 6 */}
        {/* - Öka avståndet mellan knapparna (button) med margin: storlek KLAR! */}
        {/* Uppgift 7 */}
        {/* - Sätt en mindre storlek på texten (p) med hjälp av font-size: storlek KLAR! */}
        {/* Uppgift 8 */}
        {/* - Sätt en fetare stil på texten (p) med hjälp av font-weight: hundratal KLAR! */}
        {/* Uppgift 9 */}
        {/* - Skapa en färgad box (div) som är 200px hög och bred med hjälp av width: storlek och height: storlek samt background-color: färg KLAR! */}
        {/* Uppgift 10 */}
        {/* - Se till att boxen får en skugga med box-shadow: 0 0 storlek färg KLAR! */}
        {/* Uppgift 11 */}
        {/* - Gör kopior av boxen med regnbågens alla färger KLAR! */}
        {/* Uppgift 12 */}
        {/* - Skapa en ny stil-komponent (som Body) och döp den till Container, sätt <Container> runt boxarna (div). KLAR! */}
        {/* Uppgift 13 */}
        {/* Gör positionen av boxarna (div) inuti Container flexibla med hjälp av display: typ KLAR! */}
        {/* Uppgift 14 */}
        {/* - Byt ordningen på boxarna (div) inuti Container genom att använda flex-direction: riktning KLAR! */}
        {/* Uppgift 15 */}
        {/* - Sätt bredden på input och textarea till max med width: 100% KLAR! */}

        {/* Uppgift 16 */}
        {/* - Lägg till en pekare vid markering av knappar med hjälp av cursor: pointer */}

        {/* Uppgift 17 */}
        {/* - Ta bort ursprungliga linjen runt input med border: none */}
        {/*   Lägg till en ny linje i botten av input med border-bottom: storlek typ färg */}

        {/* Uppgift 18 */}
        {/* - Ändra bakgrundsfärgen så den ärver bakomliggande färg med background-color: inherit */}

        {/* ------------------------------------------------------------ */}
        {/* ------------------------- HTML ----------------------------- */}
        {/* ------------------------------------------------------------ */}

        {/* Uppgift 1 */}
        {/* - Fyll i ditt namn, ålder och address nedan. KLAR! */}

        {/* Uppgift 2 */}
        {/* - Skapa en ny rubrik av storlek 3 som heter 'Beskrivning' och en ny beskrivande paragraf nedan. <h2><p> KLAR! */}

        {/* Uppgift 3 */}
        {/* - Gör ett viktigt ord i föregående paragraf till fet text. <strong> KLAR! */}

        {/* Uppgift 4 */}
        {/* - Gör ett intressant ord i föregående paragraf till kursiv text. <em> KLAR! */}

        {/* Uppgift 5 */}
        {/* - Dra en linje efter beskrivningsparagrafen. <hr> KLAR! */}

        {/* Uppgift 6 */}
        {/* - Lägg in en brytpunkt i paragrafen. <br> KLAR! */}

        {/* Uppgift 7 */}
        {/* - Skapa en lista med saker du vill göra under nästa år. <ul><li> KLAR! */}

        {/* Uppgift 8 */}
        {/* - Lägg in en bild på hartungviken. <img> Klar! */}

        {/* Uppgift 9 */}
        {/* - Skapa en prioriterad lista med saker du vill köpa under nästa år. KLAR! */}

        {/* Uppgift 10 */}
        {/* - Skapa ett enkelt fält som det går att skriva i. KLAR! */}

        {/* Uppgift 11 */}
        {/* - Skapa ett stort fält som det går att skriva i. KLAR! */}

        {/* Uppgift 12 */}
        {/* - Lägg in två knappar som det står + och - i. KLAR! */}

        {/* <BarnensSaga /> */}
      </Body>
    </Layout>
  )
}

export default IndexPage
