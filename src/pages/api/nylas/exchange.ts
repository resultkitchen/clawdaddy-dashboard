import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { code, state } = await request.json();

    if (!code) {
      return new Response(JSON.stringify({ error: 'No code provided' }), { status: 400 });
    }

    // 1. Exchange code for token (Grant ID in Nylas v3)
    // Using environment variables from process.env (Astro handles .env)
    const clientId = process.env.NYLAS_CLIENT_ID;
    const apiKey = process.env.NYLAS_API_KEY;
    const redirectUri = 'http://localhost:4321/auth/nylas/callback'; // This should ideally be dynamic or from env

    const nylasResponse = await fetch('https://api.us.nylas.com/v3/connect/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: apiKey, // In Nylas v3, API Key is often used as secret
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
      })
    });

    const data = await nylasResponse.json();

    if (!nylasResponse.ok) {
      console.error('Nylas exchange error:', data);
      return new Response(JSON.stringify({ error: 'Nylas exchange failed', details: data }), { status: 500 });
    }

    const grantId = data.grant_id;

    // 2. Save grant_id to PocketBase
    // Logic to identify the user/lead would go here (using 'state' or session)
    // For now, we'll log it and assume we'll update the most recent lead or a specific ID
    console.log(`Successfully exchanged code for Grant ID: ${grantId}`);

    // If we have a state that contains leadId, we use it
    const leadId = state; 

    if (leadId) {
        const pbUrl = process.env.POCKETBASE_URL || 'http://localhost:8090';
        const pbResponse = await fetch(`${pbUrl}/api/collections/members/records/${leadId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nylasGrantId: grantId,
                status: 'active'
            })
        });

        if (!pbResponse.ok) {
            const pbErr = await pbResponse.text();
            console.error('PocketBase update error:', pbErr);
        }
    }

    return new Response(JSON.stringify({ 
      success: true, 
      grant_id: grantId 
    }), { status: 200 });

  } catch (error) {
    console.error('Error in nylas exchange:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
};
