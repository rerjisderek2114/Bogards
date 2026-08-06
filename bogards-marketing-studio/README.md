# Bogards Marketing Studio — Sitio Web Corporativo

Sitio construido con **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** y
**Framer Motion**, siguiendo el PRD y la identidad de marca de Bogards Marketing Studio.
Listo para desplegar en **Vercel**.

## Stack

- Next.js 14 + App Router + TypeScript
- Tailwind CSS (tokens de marca configurados en `tailwind.config.ts`)
- Framer Motion (animaciones y micro-interacciones)
- lucide-react (iconografía outline, como pide el brief)
- next/font (Poppins + Inter, auto-hospedadas — sin layout shift)

## Estructura

```
app/
  layout.tsx          Layout raíz: fuentes, metadata SEO, navbar/footer/whatsapp
  page.tsx             Home (hero, stats, servicios, proceso, portafolio, testimonios, FAQ, CTA)
  nosotros/            Página "Nosotros"
  servicios/           Página de servicios con detalle por sección y anclas
  portafolio/          Grid filtrable de proyectos
  casos-de-exito/      Casos de éxito con métricas
  contacto/            Formulario inteligente + WhatsApp + agenda
  sitemap.ts           Sitemap dinámico
  robots.ts            robots.txt
components/
  Navbar.tsx, Footer.tsx, WhatsAppButton.tsx, ContactForm.tsx
  PixelTrail.tsx        Motivo de marca (el "rastro de píxeles" del logotipo), reutilizado como firma visual
  sections/              Secciones reutilizables de la Home
public/logo/            Logotipo oficial (PNG proporcionado)
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

> Nota: `next/font` descarga Poppins e Inter de Google Fonts durante el build.
> Esto requiere acceso a internet (funciona automáticamente en Vercel).

## Desplegar en Vercel

1. Sube este proyecto a un repositorio de GitHub/GitLab/Bitbucket.
2. En [vercel.com](https://vercel.com) → **Add New Project** → importa el repositorio.
3. Vercel detecta Next.js automáticamente. Deja los valores por defecto:
   - Framework: **Next.js**
   - Build Command: `next build`
   - Output: (automático)
4. Click en **Deploy**. En ~1 minuto tendrás una URL en producción.
5. (Opcional) Conecta tu dominio propio en **Settings → Domains**.

También puedes desplegar desde tu máquina con la CLI de Vercel:

```bash
npm i -g vercel
vercel
```

## Pendientes antes de producción

- Reemplazar el número de WhatsApp de ejemplo (`5215500000000`) en
  `components/WhatsAppButton.tsx` y `app/contacto/page.tsx`.
- Conectar `components/ContactForm.tsx` a tu CRM / proveedor de email
  (Brevo, Mailchimp) o a una API route de Next.js.
- Sustituir el mapa placeholder en `app/contacto/page.tsx` por un embed real
  (Google Maps) una vez definida la dirección física.
- Actualizar `metadataBase` en `app/layout.tsx` con el dominio final.
- Agregar contenido real de blog si se activa la sección `/blog` (fuera del
  alcance de esta primera entrega, según el PRD).
