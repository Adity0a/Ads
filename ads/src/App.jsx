import './App.css'

function App() {
  const handleCopyAds = async () => {
    try {
      const response = await fetch('/ads.txt')
      const text = await response.text()
      await navigator.clipboard.writeText(text)
    } catch (err) {
      console.error('Failed to copy ads.txt content:', err)
    }
  }

  return (
    <span
      className="ad-corner"
      onClick={handleCopyAds}
      role="button"
      tabIndex={0}
    >
      ad
    </span>
  )
}

export default App
