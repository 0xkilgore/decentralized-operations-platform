export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-6">TEST DEPLOYMENT PAGE</h1>
      <div className="p-8 bg-red-500 text-white text-2xl font-bold rounded-lg mb-6">
        This is a test page to verify deployment
      </div>
      <div className="p-6 bg-purple-700 text-white text-xl rounded-lg">
        If you can see this, the deployment is working correctly
      </div>
    </div>
  );
}
