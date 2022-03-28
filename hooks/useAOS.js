import AOS from 'aos'
import { useEffect } from 'react'

export default function useAOS() {
  const importAOSCSS = async () => {
    await import('aos/dist/aos.css')
  }
  useEffect(() => {
    importAOSCSS()
    AOS.init({
      duration: 800,
      once: true,
      disable: 'mobile'
    })
  }, [])
}
