'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { downloadLatestVersion, type Platform } from '@/utils/downloadService';

export default function HomePage() {
  const [faPlatform, setFaPlatform] = useState<Platform>('minecraft_plugin');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: string; delay: string; duration: string; size: string }>>([]);

  useEffect(() => {
    // Generate snowflakes
    const flakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${5 + Math.random() * 10}s`,
      size: `${4 + Math.random() * 8}px`
    }));
    setSnowflakes(flakes);
  }, []);

  useEffect(() => {
    const scrollToPlugins = (e: MouseEvent) => {
      e.preventDefault();
      const target = document.getElementById('plugins');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const scrollLink = document.querySelector('a[href="#plugins"]');
    if (scrollLink) {
      scrollLink.addEventListener('click', scrollToPlugins as EventListener);
      return () => scrollLink.removeEventListener('click', scrollToPlugins as EventListener);
    }
  }, []);

  return (
    <div className="page-wrapper">
      <div className="hero-section">
        <div className="hero-background"></div>
        <div className="snowflakes">
          {snowflakes.map((flake) => (
            <div
              key={flake.id}
              className="snowflake"
              style={{
                left: flake.left,
                animationDelay: flake.delay,
                animationDuration: flake.duration,
                fontSize: flake.size
              }}
            >
              ❄
            </div>
          ))}
        </div>
        <div className="hero-content-wrapper">
          <div className="hero-logo">
            <Image
              src="/common/FancyInnovations.png"
              alt="FancyInnovations Logo"
              width={200}
              height={200}
              priority
            />
          </div>
          <h1 className="hero-title">FancyInnovations</h1>
          <p className="hero-subtitle">✨ Makes everything more <b>fancy</b> ✨</p>
          <div className="hero-features">
            <span className="feature-tag">Simple</span>
            <span className="feature-tag">Lightweight</span>
            <span className="feature-tag">Fast</span>
          </div>
          <a href="#plugins" className="scroll-indicator">
            <span className="scroll-text">Our Products</span>
            <div className="scroll-arrow">↓</div>
          </a>
        </div>
      </div>

      <div className="content-section" id="plugins">
        <div className="plugins-container">
          <h2 className="plugins-title">Our Products</h2>

          <div className="game-section">
            <h3 className="game-title minecraft-title">Minecraft</h3>
            <div className="plugins-grid">
              <div className="plugin-card">
                <div className="card-icon">
                  <Image
                      src="/logos-and-banners/fancynpcs-logo.png"
                      alt="FancyNpcs Logo"
                      width={80}
                      height={80}
                  />
                </div>
                <h3 className="card-title">FancyNpcs</h3>
                <p className="card-description">Create and manage blazingly fast NPCs with the power of packets</p>
                <div className="card-buttons">
                  <a href="https://modrinth.com/plugin/fancynpcs" target="_blank" rel="noopener noreferrer"
                     className="btn-download">Download</a>
                  <Link href="/docs/minecraft-plugins/fancynpcs" className="btn-docs">Documentation</Link>
                </div>
              </div>

              <div className="plugin-card">
                <div className="card-icon">
                  <Image
                      src="/logos-and-banners/fancyholograms-logo.png"
                      alt="FancyHolograms Logo"
                      width={80}
                    height={80}
                  />
                </div>
                <h3 className="card-title">FancyHolograms</h3>
                <p className="card-description">Create and manage ultra modern holograms with display entities</p>
                <div className="card-buttons">
                  <a href="https://modrinth.com/plugin/fancyholograms" target="_blank" rel="noopener noreferrer"
                     className="btn-download">Download</a>
                  <Link href="/docs/minecraft-plugins/fancyholograms" className="btn-docs">Documentation</Link>
                </div>
              </div>

              <div className="plugin-card">
                <div className="card-icon">
                  <Image
                      src="/logos-and-banners/fancydialogs-logo.png"
                      alt="FancyDialogs Logo"
                      width={80}
                      height={80}
                  />
                </div>
                <h3 className="card-title">FancyDialogs</h3>
                <p className="card-description">Create immersive interactive dialogs and modern menus for players</p>
                <div className="card-buttons">
                  <a href="https://modrinth.com/plugin/fancydialogs" target="_blank" rel="noopener noreferrer"
                     className="btn-download">Download</a>
                  <Link href="/docs/minecraft-plugins/fancydialogs" className="btn-docs">Documentation</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="game-section">
            <h3 className="game-title hytale-title">Hytale</h3>
            <div className="plugins-grid">
              <div className="plugin-card">
                <div className="card-icon">
                  <Image
                      src="/logos-and-banners/fancycore-logo.png"
                      alt="FancyCore Logo"
                      width={80}
                      height={80}
                  />
                </div>
                <h3 className="card-title">FancyCore</h3>
                <p className="card-description">A powerful core plugin for Hytale servers</p>
                <div className="card-buttons">
                  <button
                    className="btn-download"
                    onClick={() => downloadLatestVersion('fc', undefined, setAlertMessage)}
                  >
                    Download
                  </button>
                  <Link href="/docs/hytale-plugins/fancycore" className="btn-docs">Documentation</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="game-section">
            <h3 className="game-title hytale-title">Web Services</h3>
            <div className="plugins-grid">
              <div className="plugin-card">
                <div className="card-icon">
                  <Image
                      src="/logos-and-banners/fancyanalytics-logo.png"
                      alt="FancyAnalytics Logo"
                      width={80}
                      height={80}
                  />
                </div>
                <h3 className="card-title">FancyAnalytics</h3>
                <p className="card-description">A powerful analytics service for your servers, plugins and projects</p>
                <div className="platform-selector">
                  <span className="platform-label">Platform:</span>
                  <div className="custom-dropdown">
                    <button
                      className="dropdown-button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
                    >
                      <span className="dropdown-value">
                        {faPlatform === 'minecraft_plugin' ? 'Minecraft' : 'Hytale'}
                      </span>
                      <span className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`}>▼</span>
                    </button>
                    {dropdownOpen && (
                      <div className="dropdown-menu">
                        <button
                          className={`dropdown-item ${faPlatform === 'minecraft_plugin' ? 'active' : ''}`}
                          onClick={() => {
                            setFaPlatform('minecraft_plugin');
                            setDropdownOpen(false);
                          }}
                        >
                          Minecraft
                        </button>
                        <button
                          className={`dropdown-item ${faPlatform === 'hytale_plugin' ? 'active' : ''}`}
                          onClick={() => {
                            setFaPlatform('hytale_plugin');
                            setDropdownOpen(false);
                          }}
                        >
                          Hytale
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="card-buttons">
                  <button
                    className="btn-download"
                    onClick={() => downloadLatestVersion('fa', faPlatform, setAlertMessage)}
                  >
                    Download
                  </button>
                  <Link href="/docs/hytale-plugins/fancycore" className="btn-docs">Documentation</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {alertMessage && (
        <div className="custom-alert-overlay" onClick={() => setAlertMessage(null)}>
          <div className="custom-alert" onClick={(e) => e.stopPropagation()}>
            <div className="alert-content">
              <p className="alert-message">{alertMessage}</p>
              <button className="alert-button" onClick={() => setAlertMessage(null)}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .page-wrapper {
          width: 100%;
          min-height: 100vh;
        }

        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)) 100%);
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(255, 221, 0, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(255, 221, 0, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 50% 20%, rgba(255, 221, 0, 0.08) 0%, transparent 40%);
          filter: blur(60px);
        }

        .snowflakes {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .snowflake {
          position: absolute;
          top: -20px;
          color: rgba(255, 255, 255, 0.8);
          text-shadow: 0 0 10px rgba(255, 221, 0, 0.5);
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes fall {
          0% {
            top: -20px;
            opacity: 1;
          }
          100% {
            top: 100vh;
            opacity: 0.3;
          }
        }

        .hero-content-wrapper {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 2rem;
          max-width: 900px;
        }

        .hero-logo {
          margin-bottom: 3rem;
          animation: fadeInUp 0.8s ease-out;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-logo :global(img) {
          filter: drop-shadow(0 10px 40px rgba(255, 221, 0, 0.3));
          display: block;
        }

        .hero-title {
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          font-size: 5rem;
          font-weight: 700;
          color: hsl(57, 100%, 42%);
          margin-bottom: 1.5rem;
          letter-spacing: -2px;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .hero-subtitle {
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          font-size: 1.5rem;
          color: hsl(var(--muted-foreground));
          margin-bottom: 2.5rem;
          font-weight: 400;
          line-height: 1.6;
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .hero-features {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }

        .feature-tag {
          padding: 0.25rem 2rem;
          background: hsl(var(--primary) / 0.1);
          border: 2px solid hsl(57, 100%, 42%);
          border-radius: 50px;
          color: hsl(57, 100%, 42%);
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .feature-tag:hover {
          background: hsl(var(--primary) / 0.2);
          border-color: hsl(57, 100%, 52%);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scroll-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          margin-top: 4rem;
          animation: fadeInUp 0.8s ease-out 0.8s both;
          text-decoration: none;
          cursor: pointer;
        }

        .scroll-text {
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          font-size: 0.9rem;
          color: hsl(var(--muted-foreground));
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 500;
        }

        .scroll-arrow {
          font-size: 2rem;
          color: hsl(57, 100%, 42%);
          animation: bounce 2s infinite;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .scroll-arrow:hover {
          color: hsl(57, 100%, 52%);
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        .content-section {
          background: hsl(var(--background));
          padding: 6rem 2rem;
        }

        .plugins-container {
          max-width: 1260px;
          margin: 0 auto;
        }

        .plugins-title {
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          font-size: 3.5rem;
          font-weight: 700;
          color: hsl(57, 100%, 42%);
          text-align: center;
          margin-bottom: 4rem;
          letter-spacing: -1px;
        }

        .game-section {
          margin-bottom: 5rem;
        }

        .game-title {
          font-size: 2rem;
          font-weight: 600;
          color: hsl(57, 100%, 42%);
          margin-bottom: 2rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid hsl(var(--primary) / 0.2);
        }

        .minecraft-title {
          font-size: 2rem;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .hytale-title {
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .plugins-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 380px));
          gap: 2rem;
          justify-content: center;
        }

        .plugin-card {
          background: rgba(255, 221, 0, 0.05);
          backdrop-filter: blur(10px);
          border: 2px solid hsl(57, 100%, 42%);
          border-radius: 20px;
          padding: 2.5rem;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        :global(.dark) .plugin-card {
          background: rgba(255, 221, 0, 0.08);
        }

        :global(.light) .plugin-card {
          background: rgba(255, 221, 0, 0.12);
        }

        .plugin-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, hsl(57, 100%, 42%) 0%, hsl(57, 100%, 52%) 100%);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .plugin-card:hover::before {
          transform: scaleX(1);
        }

        .plugin-card:hover {
          transform: translateY(-8px);
          border-color: hsl(57, 100%, 52%);
          box-shadow: 0 20px 60px hsl(var(--primary) / 0.15);
        }

        .card-icon {
          width: 80px;
          height: 80px;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .plugin-card:hover .card-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .card-title {
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          font-size: 1.75rem;
          font-weight: 600;
          color: hsl(57, 100%, 42%);
          margin-bottom: 1rem;
        }

        .card-description {
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          font-size: 1rem;
          color: hsl(var(--muted-foreground));
          line-height: 1.7;
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .platform-selector {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: hsl(var(--background));
          border: 1px solid hsl(57, 100%, 42% / 0.3);
          border-radius: 8px;
        }

        .platform-label {
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          color: hsl(57, 100%, 42%);
          white-space: nowrap;
        }

        .custom-dropdown {
          position: relative;
          flex: 1;
        }

        .dropdown-button {
          width: 100%;
          padding: 0.6rem 1rem;
          background: hsl(var(--background));
          color: hsl(var(--foreground));
          border: 2px solid hsl(57, 100%, 42%);
          border-radius: 6px;
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
        }

        .dropdown-button:hover {
          border-color: hsl(57, 100%, 52%);
          background: hsl(var(--primary) / 0.05);
        }

        .dropdown-button:focus {
          outline: none;
          border-color: hsl(57, 100%, 52%);
          box-shadow: 0 0 0 3px hsl(var(--primary) / 0.1);
        }

        .dropdown-value {
          flex: 1;
          text-align: left;
        }

        .dropdown-arrow {
          font-size: 0.7rem;
          color: hsl(57, 100%, 42%);
          transition: transform 0.3s ease;
        }

        .dropdown-arrow.open {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 0.5rem);
          left: 0;
          right: 0;
          background: #000000;
          border: 2px solid hsl(57, 100%, 42%);
          border-radius: 6px;
          overflow: hidden;
          z-index: 1000;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 221, 0, 0.2);
          animation: dropdownSlide 0.2s ease-out;
        }

        :global(.light) .dropdown-menu {
          background: #ffffff;
        }

        @keyframes dropdownSlide {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-item {
          width: 100%;
          padding: 0.75rem 1rem;
          background: transparent;
          color: hsl(var(--foreground));
          border: none;
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
          display: block;
        }

        .dropdown-item:hover {
          background: hsl(var(--primary) / 0.1);
          color: hsl(57, 100%, 42%);
        }

        .dropdown-item.active {
          background: hsl(var(--primary) / 0.15);
          color: hsl(57, 100%, 42%);
          font-weight: 600;
        }

        .dropdown-item:not(:last-child) {
          border-bottom: 1px solid hsl(57, 100%, 42% / 0.2);
        }

        .card-buttons {
          display: flex;
          gap: 1rem;
          margin-top: auto;
        }

        .btn-download,
        .btn-docs {
          flex: 1;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          text-decoration: none;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          min-height: 44px;
        }

        .btn-download {
          background: hsl(57, 100%, 42%);
          color: #000000;
          border: 2px solid hsl(57, 100%, 42%);
        }

        .btn-download:hover {
          background: hsl(57, 100%, 52%);
          border-color: hsl(57, 100%, 52%);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px hsl(var(--primary) / 0.3);
        }

        .btn-docs {
          background: transparent;
          color: hsl(57, 100%, 42%);
          border: 2px solid hsl(57, 100%, 42%);
          box-sizing: border-box;
        }

        .btn-docs:hover {
          background: hsl(var(--primary) / 0.1);
          border-color: hsl(57, 100%, 52%);
          color: hsl(57, 100%, 52%);
          transform: translateY(-2px);
        }

        .btn-docs > * {
          display: contents;
        }

        .btn-disabled {
          background: hsl(var(--muted)) !important;
          color: hsl(var(--muted-foreground)) !important;
          border: 2px solid hsl(var(--border)) !important;
          cursor: not-allowed !important;
          opacity: 0.6;
        }

        .btn-disabled:hover {
          transform: none !important;
          box-shadow: none !important;
          background: hsl(var(--muted)) !important;
          border-color: hsl(var(--border)) !important;
        }

        .custom-alert-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeIn 0.2s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .custom-alert {
          background: hsl(var(--background));
          border: 3px solid hsl(57, 100%, 42%);
          border-radius: 16px;
          padding: 2rem;
          max-width: 500px;
          width: 90%;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 221, 0, 0.3);
          animation: slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .alert-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .alert-message {
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          font-size: 1.1rem;
          color: hsl(var(--foreground));
          line-height: 1.6;
          margin: 0;
          text-align: center;
        }

        .alert-button {
          background: hsl(57, 100%, 42%);
          color: #000000;
          border: 2px solid hsl(57, 100%, 42%);
          border-radius: 8px;
          padding: 0.75rem 2rem;
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .alert-button:hover {
          background: hsl(57, 100%, 52%);
          border-color: hsl(57, 100%, 52%);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px hsl(var(--primary) / 0.3);
        }

        .alert-button:active {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }

          .hero-subtitle {
            font-size: 1.25rem;
          }

          .hero-logo :global(img) {
            width: 150px;
          }

          .plugins-title {
            font-size: 2.5rem;
          }

          .plugins-grid {
            grid-template-columns: 1fr;
          }

          .content-section {
            padding: 4rem 1.5rem;
          }

          .custom-alert {
            padding: 1.5rem;
          }

          .alert-message {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
