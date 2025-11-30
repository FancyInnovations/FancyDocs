import {Card, Cards} from "fumadocs-ui/components/card";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
        <h1 className="text-8xl font-bold mb-4 text-fd-primary">FancyInnovations</h1>
        <p className="text-2xl mb-32">Innovative Plugins for Minecraft and Hytale</p>

        <div className="w-2/5 max-w-1/2 mx-auto">
            <Cards className="px-8">
                <Card
                    title="General"
                    description="Blog posts, development guidelines, and product direction."
                    href="/docs/general"
                />
                <Card
                    title="Minecraft Plugins"
                    description="Explore our collection of innovative Minecraft plugins like FancyNpcs or FancyHolograms."
                    href="/docs/minecraft-plugins"
                />
            </Cards>

            <Cards className="px-8 mt-8">
                <Card
                    title="Hytale Plugins"
                    description="Discover our first Hytale plugins, including FancyCore and more to come."
                    href="/docs/hytale-plugins"
                />
                <Card
                    title="FancyAnalytics"
                    description="Dive into FancyAnalytics, our powerful analytics tool."
                    href="/docs/fancyanalytics"
                />
            </Cards>
        </div>
    </div>
  );
}
