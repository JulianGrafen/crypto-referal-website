import React from 'react';

// Beispiel für Blogartikel-Daten
const articles = [
    {
        id: 1,
        title: "Bitcoin: Ein Überblick über die letzten 5 Jahre",
        date: "2024-07-20",
        excerpt: "Ein Rückblick auf die Entwicklung von Bitcoin in den letzten fünf Jahren. Welche bedeutenden Ereignisse haben den Preis und die Technologie beeinflusst?",
        image: "https://via.placeholder.com/800x400?text=Bitcoin+Entwicklung",
        content: "In den letzten fünf Jahren hat Bitcoin eine aufregende Reise durchlaufen. Von den frühen Tagen bis hin zu den heutigen Entwicklungen..."
    },
    {
        id: 2,
        title: "Die Auswirkungen der Bitcoin-Halvings auf den Preis",
        date: "2023-12-15",
        excerpt: "Wie beeinflussen die Bitcoin-Halvings die Preisentwicklung? Ein Blick auf historische Daten und Prognosen.",
        image: "https://via.placeholder.com/800x400?text=Bitcoin+Halvings",
        content: "Das Halving ist ein bedeutendes Ereignis für Bitcoin, da es die Menge der neu geschaffenen Bitcoins halbiert. Dies hat historisch gesehen einen..."
    },
    {
        id: 3,
        title: "Bitcoin und die Regulierung: Ein globaler Vergleich",
        date: "2022-05-10",
        excerpt: "Wie gehen verschiedene Länder mit der Regulierung von Bitcoin um? Ein Überblick über globale Regelungen und deren Auswirkungen.",
        image: "https://via.placeholder.com/800x400?text=Bitcoin+Regulierung",
        content: "Die Regulierung von Bitcoin variiert stark zwischen den verschiedenen Ländern. Während einige Länder Bitcoin als legales Zahlungsmittel anerkennen, gibt es in anderen..."
    },
    {
        id: 4,
        title: "Technologische Fortschritte und Bitcoin: Was erwartet uns?",
        date: "2021-08-25",
        excerpt: "Technologische Innovationen, die Bitcoin beeinflussen. Ein Blick auf neue Entwicklungen und zukünftige Trends.",
        image: "https://via.placeholder.com/800x400?text=Bitcoin+Technologie",
        content: "Bitcoin hat sich seit seiner Einführung technologisch erheblich weiterentwickelt. Von der Einführung von SegWit bis hin zu Entwicklungen wie dem Lightning Network..."
    },
    {
        id: 5,
        title: "Die Rolle von Bitcoin in der Finanzkrise",
        date: "2020-03-12",
        excerpt: "Wie hat sich Bitcoin in der jüngsten Finanzkrise verhalten? Eine Analyse der Preisbewegungen und der Marktreaktionen.",
        image: "https://via.placeholder.com/800x400?text=Bitcoin+Finanzkrise",
        content: "In Zeiten der Finanzkrise zeigt sich oft, wie stabil oder volatil Bitcoin sein kann. Diese Analyse untersucht, wie Bitcoin in den letzten Krisen abgeschnitten hat..."
    },
    {
        id: 6,
        title: "Bitcoin ETF: Die Auswirkungen auf den Markt",
        date: "2024-01-15",
        excerpt: "Wie beeinflussen Bitcoin ETFs den Kryptowährungsmarkt? Eine Untersuchung der Vorteile und Herausforderungen von Bitcoin ETFs.",
        image: "https://via.placeholder.com/800x400?text=Bitcoin+ETF",
        content: "Bitcoin ETFs ermöglichen es Anlegern, Bitcoin über traditionelle Börsen zu kaufen. Diese Analyse beleuchtet die Auswirkungen von ETFs auf den Markt und die Preisvolatilität..."
    },
    {
        id: 7,
        title: "Der Bitcoin-Boom von 2021: Was ist passiert?",
        date: "2023-09-01",
        excerpt: "Ein detaillierter Rückblick auf den Bitcoin-Boom im Jahr 2021 und die Faktoren, die zu diesem Anstieg beigetragen haben.",
        image: "https://via.placeholder.com/800x400?text=Bitcoin+Boom",
        content: "Der Bitcoin-Boom von 2021 war geprägt von einem rasanten Anstieg des Bitcoin-Preises. Wir betrachten die Ereignisse, die zu diesem Boom führten und die langfristigen Auswirkungen..."
    },
    {
        id: 8,
        title: "Sicherheit und Bitcoin: Wie schützen Sie Ihre Investition?",
        date: "2022-11-20",
        excerpt: "Tipps und Tricks zur Sicherung Ihrer Bitcoin-Investitionen und zur Vermeidung häufiger Sicherheitsrisiken.",
        image: "https://via.placeholder.com/800x400?text=Bitcoin+Sicherheit",
        content: "Die Sicherheit Ihrer Bitcoin-Investitionen ist von größter Bedeutung. Dieser Artikel bietet eine umfassende Anleitung zur Sicherung Ihrer Bitcoins, einschließlich der Verwendung von Hardware-Wallets und sicheren Passwörtern..."
    },
    {
        id: 9,
        title: "Bitcoin Mining: Die wirtschaftlichen Aspekte",
        date: "2021-06-15",
        excerpt: "Eine Analyse der wirtschaftlichen Auswirkungen des Bitcoin Minings, einschließlich Kosten, Belohnungen und Energieverbrauch.",
        image: "https://via.placeholder.com/800x400?text=Bitcoin+Mining",
        content: "Bitcoin Mining ist ein zentraler Bestandteil des Bitcoin-Ökosystems. In diesem Artikel betrachten wir die wirtschaftlichen Aspekte des Mining, einschließlich der erforderlichen Ausrüstung, der Energiekosten und der Belohnungen..."
    },
    {
        id: 10,
        title: "Wie Bitcoin in Schwellenländern genutzt wird",
        date: "2020-12-10",
        excerpt: "Untersuchung der Nutzung von Bitcoin in Schwellenländern und der Rolle, die es bei der wirtschaftlichen Entwicklung spielt.",
        image: "https://via.placeholder.com/800x400?text=Bitcoin+Schwellenländer",
        content: "Bitcoin wird zunehmend in Schwellenländern genutzt, um wirtschaftliche Herausforderungen zu bewältigen. Dieser Artikel untersucht, wie Bitcoin in verschiedenen Regionen zur finanziellen Inklusion beiträgt..."
    },
    {
        id: 11,
        title: "Der Einfluss von Bitcoin auf die traditionelle Finanzwelt",
        date: "2024-03-05",
        excerpt: "Wie beeinflusst Bitcoin traditionelle Finanzsysteme und Banken? Ein Blick auf die Veränderungen und Herausforderungen.",
        image: "https://via.placeholder.com/800x400?text=Bitcoin+Finanzen",
        content: "Bitcoin hat das Potenzial, die traditionelle Finanzwelt zu verändern. Dieser Artikel untersucht, wie Banken und Finanzinstitutionen auf die zunehmende Akzeptanz von Bitcoin reagieren und welche Herausforderungen sich ergeben..."
    },
    {
        id: 12,
        title: "Bitcoin als Wertaufbewahrungsmittel: Eine langfristige Perspektive",
        date: "2023-07-30",
        excerpt: "Die Rolle von Bitcoin als Wertaufbewahrungsmittel im Vergleich zu traditionellen Anlagen wie Gold und Immobilien.",
        image: "https://via.placeholder.com/800x400?text=Bitcoin+Wertaufbewahrung",
        content: "Bitcoin wird oft als digitales Gold bezeichnet. In diesem Artikel vergleichen wir Bitcoin mit traditionellen Wertaufbewahrungsmitteln wie Gold und Immobilien und untersuchen seine langfristigen Potenziale und Risiken..."
    },
    {
        id: 13,
        title: "Wie man Bitcoin in einem Bullenmarkt investiert",
        date: "2023-10-01",
        excerpt: "Strategien und Tipps für Investitionen in Bitcoin während eines Bullenmarkts, einschließlich der besten Kaufzeitpunkte und Risikomanagement.",
        image: "https://via.placeholder.com/800x400?text=Bitcoin+Bullenmarkt",
        content: "Investieren in Bitcoin während eines Bullenmarkts kann lukrativ sein, aber auch riskant. Dieser Artikel bietet Tipps und Strategien für Investitionen in Bitcoin, einschließlich der besten Zeitpunkte zum Kauf und des Risikomanagements..."
    },
    {
        id: 14,
        title: "Bitcoin und Nachhaltigkeit: Eine kritische Analyse",
        date: "2022-09-15",
        excerpt: "Eine kritische Untersuchung der Nachhaltigkeit von Bitcoin, einschließlich der Umweltbelastung und der möglichen Lösungsansätze.",
        image: "https://via.placeholder.com/800x400?text=Bitcoin+Nachhaltigkeit",
        content: "Bitcoin steht oft in der Kritik wegen seines hohen Energieverbrauchs. Dieser Artikel untersucht die Umweltbelastung von Bitcoin und diskutiert mögliche Lösungsansätze für eine nachhaltigere Zukunft..."
    }
];

const Blog = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8">Bitcoin Blog</h1>
                {articles.map(article => (
                    <article key={article.id} className="bg-white shadow-md rounded-lg mb-8">
                        <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-t-lg"/>
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
                            <p className="text-gray-600 text-sm mb-4">{article.date}</p>
                            <p className="text-gray-800 mb-4">{article.excerpt}</p>
                            <a href="#" className="text-blue-500 hover:underline">Weiterlesen</a>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Blog;
