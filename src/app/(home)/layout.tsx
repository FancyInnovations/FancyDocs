import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/'>) {
  return <HomeLayout
      {...baseOptions()}
      links={[
          { text: 'Documentation', url: '/docs/' },
          { text: 'Download', url: 'https://modrinth.com/user/oliver' },
          { text: 'GitHub', url: 'https://github.com/fancyinnovations' },
          { text: 'Discord', url: 'https://discord.gg/ZUgYCEJUEx' },
          { text: 'Blog', url: '/docs/blog/' },
      ]}
      githubUrl={"https://github.com/fancyinnovations"}

  >{children}</HomeLayout>;
}
