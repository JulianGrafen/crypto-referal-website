import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogPosts';

const CATEGORY_COLORS = {
  Grundlagen: 'bg-blue-500/15 text-blue-400',
  Vergleich: 'bg-purple-500/15 text-purple-400',
  Zahlungsmethoden: 'bg-teal-500/15 text-teal-400',
  Sicherheit: 'bg-red-500/15 text-red-400',
  Strategie: 'bg-green-500/15 text-green-400',
  Tipps: 'bg-yellow-500/15 text-yellow-400',
  'Recht & Steuern': 'bg-orange-500/15 text-orange-400',
  Analyse: 'bg-indigo-500/15 text-indigo-400',
};

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

function ArticleCard({ post }) {
  const categoryClass =
    CATEGORY_COLORS[post.category] ?? 'bg-btcOrange/15 text-btcOrange';

  return (
    <article className="card-glass rounded-2xl overflow-hidden flex flex-col hover:border-btcOrange/30 border border-transparent transition-all duration-300 group">
      <div className="h-0.5 w-full bg-gradient-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryClass}`}>
            {post.category}
          </span>
          <span className="text-xs text-btcMuted">{post.readingTime} Min.</span>
        </div>
        <h2 className="text-lg font-bold text-btcText leading-snug mb-3 group-hover:text-btcOrange transition-colors duration-200">
          {post.title}
        </h2>
        <p className="text-btcMuted text-sm leading-relaxed flex-1 mb-5">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-btcBorder">
          <span className="text-xs text-btcMuted/70">{formatDate(post.date)}</span>
          <Link
            to={`/blog/${post.slug}`}
            className="text-sm font-semibold text-btcOrange hover:underline underline-offset-4 inline-flex items-center gap-1"
          >
            Lesen <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Blog() {
  return (
    <main className="min-h-screen bg-btcDark">
      <div className="bg-btcSurface border-b border-btcBorder">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-14 text-center">
          <p className="text-xs font-semibold tracking-widest text-btcOrange uppercase mb-4">
            Wissen & Analyse
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-btcText mb-4 leading-tight">
            Bitcoin Blog
          </h1>
          <p className="text-btcMuted max-w-xl mx-auto text-base sm:text-lg">
            Fundierte Artikel zu Bitcoin-Kauf, Strategie, Sicherheit und Steuern.
            Kein Hype – nur klares Wissen.
          </p>
        </div>
      </div>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
