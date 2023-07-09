import React from 'react';

const ErstelleEinKonto = () => {
    return(
        <article className="text-white font-poppins mr-5">
          <div className="py-4">
      <ol className=" ">
        <li className="mb-4">
          <p className="font-bold text-l">1.Erstelle ein Konto auf Binance</p>
          <ul className="list-disc ">
            <li>   Folge diesen <a href="https://accounts.binance.com/register?ref=YSY8VOEH" className="text-black underline">Link</a> auf Binance, um 10% Rabatt auf die Kaufgebühren zu bekommen und klicke auf "Registrieren".
</li>
            <li>Gib deine E-Mail-Adresse und ein sicheres Passwort ein.</li>
            <li>Bestätige deine E-Mail-Adresse, indem du dem Link in der Bestätigungs-E-Mail von Binance folgst.</li>
            <li>Schließe die Registrierung ab, indem du alle erforderlichen Informationen eingibst.</li>
          </ul>
        </li>
        <li className="mb-4">
          <p className="font-bold text-l">2.Verifiziere dein Konto</p>
          <ul className="list-disc ">
            <li>Melde dich bei deinem Binance-Konto an.</li>
            <li>Klicke oben rechts auf dein Profilbild und wähle "Identitätsverifizierung".</li>
            <li>Folge den Anweisungen, um deine Identität zu überprüfen. Du wirst wahrscheinlich Fotos oder Scans deines Ausweises oder Reisepasses sowie ein Selfie hochladen müssen.</li>
            <li>Warte auf die Überprüfung deiner Dokumente. Dies kann einige Zeit in Anspruch nehmen, aber du wirst per E-Mail über den Fortschritt informiert.</li>
          </ul>
        </li>
        <li className="mb-4">
          <p className="font-bold text-l">3.Füge Geld zu deinem Binance-Konto hinzu</p>
          <ul className="list-disc ">
            <li>Nachdem dein Konto verifiziert wurde, melde dich an und klicke auf "Einzahlungen" in der oberen Menüleiste.</li>
            <li>Wähle die gewünschte Einzahlungsmethode, zum Beispiel Banküberweisung oder Kreditkarte, und folge den Anweisungen, um das Geld auf dein Binance-Konto zu überweisen.</li>
            <li>Warte, bis das Geld auf deinem Binance-Konto eingegangen ist. Dies kann je nach Einzahlungsmethode variieren.</li>
          </ul>
        </li>
        <li className="mb-4">
          <p className="font-bold text-l">4.Kaufe Bitcoin auf Binance</p>
          <ul className="list-disc ">
            <li>Melde dich bei deinem Binance-Konto an.</li>
            <li>Klicke oben in der Menüleiste auf "Handel" und wähle "Krypto kaufen".</li>
            <li>Wähle Bitcoin (BTC) als die gewünschte Kryptowährung aus.</li>
            <li>Gib den Betrag ein, den du kaufen möchtest, oder wähle einen der vorgeschlagenen Beträge aus.</li>
            <li>Überprüfe die Transaktionsdetails und bestätige den Kauf.</li>
          </ul>
        </li>
      </ol>
      <p className="font-bold">Gratulation! Du hast erfolgreich Bitcoin auf Binance gekauft. Die gekauften Bitcoin werden in deinem Binance-Wallet angezeigt.</p>
      <br/>
      <p>Bitte beachte, dass der genaue Ablauf je nach Benutzeroberfläche von Binance variieren kann. Stelle sicher, dass du dich mit den aktuellen Funktionen und Richtlinien von Binance vertraut machst, da diese sich im Laufe der Zeit ändern können.</p>
    </div>
            

        </article>
    )
};

export default ErstelleEinKonto;