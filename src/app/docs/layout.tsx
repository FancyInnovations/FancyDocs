import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
        tree={source.pageTree} {...baseOptions()}
        sidebar={{
            tabs: [
                {
                    title: 'General',
                    description: 'Blog, development guidelines, and product direction.',
                    url: '/docs/general',
                },
                {
                    title: 'Minecraft Plugins',
                    description: 'Docs for our Minecraft (paper) plugins.',
                    url: '/docs/minecraft-plugins',
                },
                {
                    title: 'Hytale Plugins',
                    description: 'Docs for our server side Hytale plugins.',
                    url: '/docs/hytale-plugins',
                },
                {
                    title: 'FancyAnalytics',
                    description: 'Docs for our analytics platform FancyAnalytics.',
                    url: '/docs/fancyanalytics',
                },
            ],
        }}
    >
      {children}
    </DocsLayout>
  );
}
