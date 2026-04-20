import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogPosts';
import ArticleSection from '../components/ArticleSection';

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

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-btcDark flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-bold text-btcText mb-4">Artikel nicht gefunden</h1>
        <p className="text-btcMuted mb-8">
          Der gesuchte Artikel existiert nicht oder wurde verschoben.
        </p>
        <Link
          to="/blog"
          className="text-btcOrange font-semibold hover:underline underline-offset-4"
        >
          ← Zurück zum Blog
        </Link>
      </div>
    );
  }

  const categoryClass =
    CATEGORY_COLORS[post.category] ?? 'bg-btcOrange/15 text-btcOrange';

  return (
    <main className="min-h-screen bg-btcDark">
      {/* ── Hero banner ─────────────────────────────────────────── */}
      <div className="bg-btcSurface border-b border-btcBorder">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-24 pb-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-btcMuted mb-6">
            <Link to="/" className="hover:text-btcOrange transition-colors">
              Startseite
            </Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-btcOrange transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-btcText truncate max-w-[200px]">{post.title}</span>
          </nav>

          {/* Category & meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryClass}`}
            >
              {post.category}
            </span>
            <span className="text-xs text-btcMuted">{formatDate(post.date)}</span>
            <span className="text-xs text-btcMuted">{post.readingTime} Min. Lesezeit</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-btcText leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-btcMuted leading-relaxed text-base sm:text-lg">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* ── Article body ─────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {post.sections.map((section, index) => (
          <ArticleSection key={index} section={section} />
        ))}

        {/* ── Back link ─────────────────────────────────────────── */}
        <div className="mt-16 pt-8 border-t border-btcBorder">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-btcOrange font-semibold hover:underline underline-offset-4"
          >
            ← Alle Artikel
          </Link>
        </div>
      </div>
    </main>
  );
}
