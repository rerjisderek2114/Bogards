import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://bogards.studio';
  const routes = ['', '/nosotros', '/servicios', '/portafolio', '/casos-de-exito', '/contacto'];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7
  }));
}
