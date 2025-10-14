import React, { useEffect, useRef } from 'react'

// 🌟 STAR CURSOR EFFECT - Interactive particle system that follows cursor
// Creates glowing star particles that trail behind the mouse cursor
const StarCursorEffect = () => {
  const canvasRef = useRef(null)
  const particles = useRef([])
  const mouse = useRef({ x: 0, y: 0 })
  const animationId = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouse.current = {
        x: e.clientX,
        y: e.clientY
      }
      
      // Create new particles
      if (particles.current.length < 50) {
        particles.current.push(new Particle(e.clientX, e.clientY))
      }
    }

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.vx = (Math.random() - 0.5) * 2
        this.vy = (Math.random() - 0.5) * 2
        this.life = 1
        this.decay = Math.random() * 0.02 + 0.01
        this.size = Math.random() * 3 + 2
        this.hue = Math.random() * 60 + 200 // Blue to purple range
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.life -= this.decay
        this.vx *= 0.98
        this.vy *= 0.98
      }

      draw(ctx) {
        ctx.save()
        
        // Create gradient for glow effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 2
        )
        gradient.addColorStop(0, `hsla(${this.hue}, 70%, 60%, ${this.life})`)
        gradient.addColorStop(0.5, `hsla(${this.hue}, 70%, 50%, ${this.life * 0.5})`)
        gradient.addColorStop(1, `hsla(${this.hue}, 70%, 40%, 0)`)
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        
        // Add bright center
        ctx.fillStyle = `hsla(${this.hue}, 80%, 80%, ${this.life})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 0.3, 0, Math.PI * 2)
        ctx.fill()
        
        ctx.restore()
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw particles
      particles.current = particles.current.filter(particle => {
        particle.update()
        particle.draw(ctx)
        return particle.life > 0
      })
      
      animationId.current = requestAnimationFrame(animate)
    }

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove)
    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationId.current) {
        cancelAnimationFrame(animationId.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}

export default StarCursorEffect