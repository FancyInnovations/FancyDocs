'use client';

import { useState } from 'react';
import { downloadLatestVersion, type SpaceId, type Platform } from '@/utils/downloadService';

interface DownloadButtonProps {
  spaceId: SpaceId;
  platform?: Platform;
  label?: string;
}

export function DownloadButton({ spaceId, platform, label = 'Download' }: DownloadButtonProps) {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  return (
    <>
      <button
        className="download-button"
        onClick={() => downloadLatestVersion(spaceId, platform, setAlertMessage)}
      >
        {label}
      </button>

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

      <style jsx>{`
        .download-button {
          background: hsl(57, 100%, 42%);
          color: #000000;
          border: 2px solid hsl(57, 100%, 42%);
          border-radius: 8px;
          padding: 0.75rem 1.5rem;
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }

        .download-button:hover {
          background: hsl(57, 100%, 52%);
          border-color: hsl(57, 100%, 52%);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px hsl(57, 100%, 42% / 0.3);
        }

        .download-button:active {
          transform: translateY(0);
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
          box-shadow: 0 5px 15px hsl(57, 100%, 42% / 0.3);
        }

        .alert-button:active {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .custom-alert {
            padding: 1.5rem;
          }

          .alert-message {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}
