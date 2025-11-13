export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Welcome to Test Vercel Project</h1>
      <p>This is a test project for connecting with Vercel.</p>
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h2>Project Status</h2>
        <p>✅ Next.js application running</p>
        <p>✅ Ready for Vercel deployment</p>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <h2>Test API</h2>
        <p>
          API endpoint available at: <code style={{ backgroundColor: '#f0f0f0', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>/api/hello</code>
        </p>
        <p style={{ fontSize: '0.9rem', color: '#666' }}>
          (Test it by visiting the endpoint directly in your browser or using curl)
        </p>
      </div>
    </main>
  );
}
