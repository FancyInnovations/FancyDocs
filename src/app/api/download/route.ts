import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const spaceId = searchParams.get('space_id');
  const platform = searchParams.get('platform');

  if (!spaceId) {
    return NextResponse.json(
      { error: 'Missing space_id parameter' },
      { status: 400 }
    );
  }

  try {
    let apiUrl = `https://fancyspaces.net/api/v1/spaces/${spaceId}/versions/latest`;

    if (platform) {
      apiUrl += `?platform=${platform}`;
    }

    const response = await fetch(apiUrl);

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch version: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();

    if (!data.files || data.files.length === 0) {
      return NextResponse.json(
        { error: 'No download files available' },
        { status: 404 }
      );
    }

    // Return the download URL
    return NextResponse.json({ downloadUrl: data.files[0].url });
  } catch (error) {
    console.error('Download API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch download information' },
      { status: 500 }
    );
  }
}