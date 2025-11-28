import {Card, Cards} from "fumadocs-ui/components/card";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
        <h1 className="text-8xl font-bold mb-4 text-fd-primary">FancyInnovations</h1>
        <p className="text-2xl mb-32">Innovative Plugins for Minecraft and Hytale</p>

        <div className="w-1/2 max-w-1/2 mx-auto">
            <Cards className="px-8">
                <Card
                    title="Minecraft Plugins"
                    description="Explore our collection of innovative Minecraft plugins like FancyNpcs or FancyHolograms."
                    href="/docs/minecraft-plugins"
                />
                <Card
                    title="Hytale Plugins"
                    description="Discover our first Hytale plugins, including FancyCore."
                    href="/docs/hytale-plugins"
                />
            </Cards>

            <Card
                className="mx-8 mt-8"
                title="FancyAnalytics"
                description="Dive into FancyAnalytics, our powerful analytics tool."
                href="/docs/fancyanalytics"
            />
        </div>
    </div>
  );
}
