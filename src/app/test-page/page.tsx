export default function TestPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
      <div style={{ 
        backgroundColor: 'red', 
        color: 'white', 
        padding: '30px', 
        borderRadius: '10px',
        textAlign: 'center',
        maxWidth: '600px',
        border: '3px solid yellow'
      }}>
        <h2 style={{ marginBottom: '15px', color: 'yellow' }}>Test Page in SRC Directory</h2>
        <p>This confirms we have identified the correct directory structure being used by Vercel.</p>
      </div>
      
      <div style={{ 
        backgroundColor: 'blue', 
        color: 'white', 
        padding: '30px', 
        borderRadius: '10px',
        textAlign: 'center',
        maxWidth: '600px',
        border: '3px solid cyan'
      }}>
        <h2 style={{ marginBottom: '15px', color: 'cyan' }}>Next Steps</h2>
        <p>Now we know that we should be modifying files in the src directory, not in the root or nested directories.</p>
      </div>
    </div>
  );
} 