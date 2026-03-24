import { useState } from 'react'
import 'aframe'

// We now pass the color into the scene as a prop
function ARScene({ boxColor }) {
  return (
    <a-scene
      xr-mode="ar"
      renderer="colorManagement: true"
      embedded
      style={{ width: '100%', height: '70vh', borderRadius: '15px', border: '2px solid #333' }}
    >
      {/* Upgraded Box: 
        1. Added 'animation' to make it spin continuously
        2. Uses the boxColor prop passed from React
      */}
      <a-box 
        id="box" 
        position="0 0 -1.5" 
        color={boxColor} 
        scale="0.4 0.4 0.4"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 4000; easing: linear"
      ></a-box>

      {/* Added lighting so the box has depth and shadows instead of looking flat */}
      <a-light type="directional" position="1 2 1" intensity="0.8"></a-light>
      <a-light type="ambient" intensity="0.5"></a-light>

      <a-entity camera look-controls></a-entity>
    </a-scene>
  )
}

export default function App() {
  const [clr, setClr] = useState('#4CC3D9')

  const toggle = () => {
    setClr(c => (c === '#4CC3D9' ? '#EF2D5E' : '#4CC3D9'))
  }

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      fontFamily: 'system-ui, sans-serif',
      background: '#121212', // Sleek dark mode background
      color: '#ffffff',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <h2 style={{ letterSpacing: '1px' }}>My WebXR AR App</h2>
      
      <button 
        onClick={toggle} 
        style={{ 
          padding: '12px 24px', 
          fontSize: '1rem', 
          fontWeight: 'bold',
          margin: '10px 0 30px 0', 
          cursor: 'pointer',
          border: 'none',
          borderRadius: '30px',
          background: 'linear-gradient(135deg, #646cff, #a777e3)', // Cool gradient button
          color: 'white',
          boxShadow: '0 4px 15px rgba(100, 108, 255, 0.4)',
        }}
      >
        Toggle Box Color
      </button>
      
      <div style={{ width: '90%', maxWidth: '800px' }}>
        <ARScene boxColor={clr} />
      </div>
    </div>
  )
}