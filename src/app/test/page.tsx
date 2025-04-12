import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Test Page - Deployment Verification',
  description: 'A test page to verify deployment and styling changes',
}

export default function TestPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Test Page - Deployment Verification</h1>
      <div className="bg-purple-600 text-white p-6 rounded-lg mb-4 w-full max-w-2xl text-center">
        This is a test page to verify that deployment is working correctly
      </div>
      <div className="bg-pink-600 text-white p-6 rounded-lg w-full max-w-2xl text-center">
        If you can see this with proper styling, the deployment is successful!
      </div>
    </div>
  )
} 