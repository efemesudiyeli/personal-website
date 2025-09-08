import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import { getProfile, fileUrl } from '../lib/sanity'

export default async function CvPage() {
  const profile = await getProfile()
  const cvUrl = profile?.cv ? fileUrl(profile.cv) : null

  return (
    <>
    <Navigation />
<div className='h-24'></div>
    <div className="min-h-screen pt-16 md:pt-20 flex items-center justify-center px-4">
        {cvUrl ? (
            <iframe src={cvUrl} className="min-h-screen w-full" />
        ) : (
            <p className="text-gray-600">CV bulunamadı.</p>
        )}
    </div>
    <div className='h-24'></div>
    <Footer />
    </>
  )
}


