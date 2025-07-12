/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://serrurierservices.fr',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: [], // Adaugă aici pagini de exclus dacă e nevoie
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://serrurierservices.fr/sitemap-0.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
  },
  // Configurare pentru pagini specifice
  additionalPaths: async () => {
    const result = [];
    
    // Pagina zone cu prioritate mai mare
    result.push({
      loc: '/zone',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    });
    
    // Secțiuni din pagina principală (anchor links)
    const sections = [
      { loc: '/#top', priority: 1.0, changefreq: 'weekly' },
      { loc: '/#gallery', priority: 0.8, changefreq: 'monthly' },
      { loc: '/#avis', priority: 0.8, changefreq: 'monthly' },
      { loc: '/#services', priority: 0.9, changefreq: 'monthly' },
    ];
    
    sections.forEach(section => {
      result.push({
        loc: section.loc,
        changefreq: section.changefreq,
        priority: section.priority,
        lastmod: new Date().toISOString(),
      });
    });
    
    return result;
  },
}; 