import React from 'react';

const ErstelleEinKonto = () => {
  return (
    <article className="text-white font-poppins p-5 max-w-3xl mx-auto bg-gray-600 shadow-lg rounded-lg mt-10">
        <h1 className="text-2xl font-bold text-center mb-6">Wie man einfach und sicher Bitcoin auf Binance kauft</h1>
        <p className="text-center mb-6">Erfahren Sie in dieser Schritt-für-Schritt-Anleitung, wie Sie ganz einfach Ihr erstes Bitcoin auf Binance kaufen können. Ideal für Anfänger!</p>
        <div className="py-4">
            <ol className="list-decimal pl-5 space-y-6">
                <li className="mb-6">
                    <p className="font-bold text-lg mb-2">1. Erstellen Sie ein Konto auf Binance</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            Folgen Sie diesem <a href="https://accounts.binance.com/register?ref=YSY8VOEH" className="text-blue-500 underline">Link</a> auf Binance, um 10% Rabatt auf die Kaufgebühren zu erhalten, und klicken Sie auf "Registrieren".
                        </li>
                        <li>Geben Sie Ihre E-Mail-Adresse und ein sicheres Passwort ein.</li>
                        <li>Bestätigen Sie Ihre E-Mail-Adresse, indem Sie dem Link in der Bestätigungs-E-Mail von Binance folgen.</li>
                        <li>Schließen Sie die Registrierung ab, indem Sie alle erforderlichen Informationen eingeben.</li>
                        {/* Platzhalter für Bild 1 */}
                        <li className="mt-4">
                            <img src="https://via.placeholder.com/600x400?text=Konto+erstellen" alt="Konto erstellen" className="w-full rounded-lg shadow-md" />
                            <p className="text-sm text-center mt-2">Beispielbild: Kontoerstellung auf Binance.</p>
                        </li>
                    </ul>
                </li>
                <li className="mb-6">
                    <p className="font-bold text-lg mb-2">2. Verifizieren Sie Ihr Konto</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Melden Sie sich bei Ihrem Binance-Konto an.</li>
                        <li>Klicken Sie oben rechts auf Ihr Profilbild und wählen Sie "Identitätsverifizierung".</li>
                        <li>Folgen Sie den Anweisungen, um Ihre Identität zu überprüfen. Sie werden wahrscheinlich Fotos oder Scans Ihres Ausweises oder Reisepasses sowie ein Selfie hochladen müssen.</li>
                        <li>Warten Sie auf die Überprüfung Ihrer Dokumente. Dies kann einige Zeit in Anspruch nehmen, aber Sie werden per E-Mail über den Fortschritt informiert.</li>
                        {/* Platzhalter für Bild 2 */}
                        <li className="mt-4">
                            <img src="https://via.placeholder.com/600x400?text=Konto+verifizieren" alt="Konto verifizieren" className="w-full rounded-lg shadow-md" />
                            <p className="text-sm text-center mt-2">Beispielbild: Identitätsverifizierung auf Binance.</p>
                        </li>
                    </ul>
                </li>
                <li className="mb-6">
                    <p className="font-bold text-lg mb-2">3. Fügen Sie Geld zu Ihrem Binance-Konto hinzu</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Nachdem Ihr Konto verifiziert wurde, melden Sie sich an und klicken Sie auf "Einzahlungen" in der oberen Menüleiste.</li>
                        <li>Wählen Sie die gewünschte Einzahlungsmethode, zum Beispiel Banküberweisung oder Kreditkarte, und folgen Sie den Anweisungen, um das Geld auf Ihr Binance-Konto zu überweisen.</li>
                        <li>Warten Sie, bis das Geld auf Ihrem Binance-Konto eingegangen ist. Dies kann je nach Einzahlungsmethode variieren.</li>
                        {/* Platzhalter für Bild 3 */}
                        <li className="mt-4">
                            <img src="https://via.placeholder.com/600x400?text=Geld+einzahlen" alt="Geld einzahlen" className="w-full rounded-lg shadow-md" />
                            <p className="text-sm text-center mt-2">Beispielbild: Geld auf das Binance-Konto einzahlen.</p>
                        </li>
                    </ul>
                </li>
                <li className="mb-6">
                    <p className="font-bold text-lg mb-2">4. Kaufen Sie Bitcoin auf Binance</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Melden Sie sich bei Ihrem Binance-Konto an.</li>
                        <li>Klicken Sie oben in der Menüleiste auf "Handel" und wählen Sie "Krypto kaufen".</li>
                        <li>Wählen Sie Bitcoin (BTC) als die gewünschte Kryptowährung aus.</li>
                        <li>Geben Sie den Betrag ein, den Sie kaufen möchten, oder wählen Sie einen der vorgeschlagenen Beträge aus.</li>
                        <li>Überprüfen Sie die Transaktionsdetails und bestätigen Sie den Kauf.</li>
                        {/* Platzhalter für Bild 4 */}
                        <li className="mt-4">
                            <img src="https://via.placeholder.com/600x400?text=Bitcoin+kaufen" alt="Bitcoin kaufen" className="w-full rounded-lg shadow-md" />
                            <p className="text-sm text-center mt-2">Beispielbild: Bitcoin auf Binance kaufen.</p>
                        </li>
                    </ul>
                </li>
            </ol>
            <p className="font-bold mt-6 text-center">Gratulation! Sie haben erfolgreich Bitcoin auf Binance gekauft. Die gekauften Bitcoin werden in Ihrem Binance-Wallet angezeigt.</p>
            <br />
            <p className="text-center">Bitte beachten Sie, dass der genaue Ablauf je nach Benutzeroberfläche von Binance variieren kann. Stellen Sie sicher, dass Sie sich mit den aktuellen Funktionen und Richtlinien von Binance vertraut machen, da diese sich im Laufe der Zeit ändern können.</p>
        </div>
    </article>
  );
};

export default ErstelleEinKonto;
