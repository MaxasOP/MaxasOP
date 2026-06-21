import './App.css'
import { Globe } from './components/ui/globe'

function App() {
  return (
    <div className="banner-wrapper">
      <div className="banner-container">
        {/* Center: Globe */}
        <div className="globe-section">
          <div className="globe-parent">
            <Globe className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
