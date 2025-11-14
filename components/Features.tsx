import { 
  Bookmark, 
  Image as ImageIcon, 
  FileText, 
  Link as LinkIcon,
  Folder,
  Tag,
  Star,
  Grid3x3,
  StickyNote,
  Search,
  Filter,
  ArrowUpDown,
  Eye,
  CheckSquare,
  Download,
  Upload,
  Copy,
  Smartphone,
  Zap,
  Lock,
  Palette
} from 'lucide-react'

const features = [
  {
    category: 'Smart Content Management',
    icon: Bookmark,
    color: 'from-primary-500 to-primary-600',
    items: [
      { icon: LinkIcon, title: 'One-Tap Saving', description: 'Save any URL with automatic metadata fetching' },
      { icon: ImageIcon, title: 'Automatic Thumbnails', description: 'Beautiful preview images extracted automatically' },
      { icon: FileText, title: 'Rich Metadata', description: 'Titles and descriptions fetched automatically' },
      { icon: Zap, title: 'Universal Support', description: 'Works with YouTube, TikTok, Instagram, and any web content' }
    ]
  },
  {
    category: 'Powerful Organization',
    icon: Folder,
    color: 'from-accent-500 to-accent-600',
    items: [
      { icon: Folder, title: 'Custom Collections', description: 'Create themed collections with custom icons and colors' },
      { icon: Tag, title: 'Smart Tags', description: 'Multi-tag support with suggestions for easy categorization' },
      { icon: Star, title: 'Favorites System', description: 'Star your most important clips for quick access' },
      { icon: Grid3x3, title: 'Categories', description: 'Pre-built categories: Video, Article, Tutorial, Entertainment' },
      { icon: StickyNote, title: 'Personal Notes', description: 'Add comments and context to any clip' }
    ]
  },
  {
    category: 'Advanced Discovery',
    icon: Search,
    color: 'from-purple-500 to-purple-600',
    items: [
      { icon: Search, title: 'Powerful Search', description: 'Search by title, URL, category, tags, or notes' },
      { icon: Filter, title: 'Smart Filters', description: 'Filter by category, tags, favorites, and collections' },
      { icon: ArrowUpDown, title: 'Multiple Sort Options', description: 'Sort by date, title, or category (ascending/descending)' },
      { icon: Eye, title: 'Beautiful UI', description: 'Clean, modern interface with thumbnail previews' }
    ]
  },
  {
    category: 'Bulk Management',
    icon: CheckSquare,
    color: 'from-green-500 to-green-600',
    items: [
      { icon: CheckSquare, title: 'Multi-Select Mode', description: 'Manage multiple clips at once' },
      { icon: Star, title: 'Batch Favorites', description: 'Add/remove favorites in bulk' },
      { icon: Copy, title: 'Bulk Delete', description: 'Clean up multiple clips efficiently' },
      { icon: Upload, title: 'Batch Export', description: 'Export selected clips or entire collections' }
    ]
  },
  {
    category: 'Data Control',
    icon: Download,
    color: 'from-orange-500 to-orange-600',
    items: [
      { icon: Download, title: 'Export/Import', description: 'Full data backup in JSON format' },
      { icon: Upload, title: 'Collection Export', description: 'Export individual collections' },
      { icon: Copy, title: 'Duplicate Detection', description: 'Smart URL matching prevents duplicates' },
      { icon: Smartphone, title: 'iCloud Sync Ready', description: 'Architecture ready for cloud sync (coming soon)' }
    ]
  },
  {
    category: 'iOS Integration',
    icon: Smartphone,
    color: 'from-blue-500 to-blue-600',
    items: [
      { icon: Smartphone, title: 'Home Screen Widgets', description: 'View recent clips without opening the app' },
      { icon: ImageIcon, title: 'Thumbnail Caching', description: 'Widgets show previews instantly' },
      { icon: Zap, title: 'Auto-Updates', description: 'Widgets refresh automatically every 15 minutes' }
    ]
  },
  {
    category: 'Delightful Experience',
    icon: Palette,
    color: 'from-pink-500 to-pink-600',
    items: [
      { icon: Palette, title: 'Modern Design', description: 'Clean, intuitive interface with beautiful styling' },
      { icon: Zap, title: 'Haptic Feedback', description: 'Tactile responses for key interactions' },
      { icon: Eye, title: 'Smooth Animations', description: 'Polished transitions throughout' }
    ]
  },
  {
    category: 'Privacy & Security',
    icon: Lock,
    color: 'from-gray-700 to-gray-900',
    items: [
      { icon: Lock, title: 'Anonymous Auth', description: 'No email or password required' },
      { icon: Lock, title: 'Secure Backend', description: 'Powered by Supabase with Row Level Security' },
      { icon: Smartphone, title: 'Local-First', description: 'Data cached locally for instant access' }
    ]
  }
]

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features,
            <span className="text-gradient"> Simple Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build your personal content library, beautifully organized and always accessible
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-16">
          {features.map((feature, idx) => {
            const CategoryIcon = feature.icon
            return (
              <div key={idx} className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg`}>
                    <CategoryIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{feature.category}</h3>
                </div>

                {/* Feature Items */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {feature.items.map((item, itemIdx) => {
                    const ItemIcon = item.icon
                    return (
                      <div 
                        key={itemIdx}
                        className="group p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200"
                      >
                        <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${feature.color} bg-opacity-10 mb-3 group-hover:scale-110 transition-transform`}>
                          <ItemIcon className="w-5 h-5 text-gray-200" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

