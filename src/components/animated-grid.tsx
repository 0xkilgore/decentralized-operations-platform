"use client"

import { useEffect, useRef } from "react"

export function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
      return { width, height }
    }

    let { width, height } = setCanvasDimensions()

    // Grid properties
    const gridSize = 30
    const dotSize = 1.2 // Slightly larger dots
    const lineWidth = 0.6 // Slightly thicker lines

    // Animation properties
    let animationFrameId: number
    let time = 0

    // Draw the grid
    const drawGrid = () => {
      ctx.clearRect(0, 0, width, height)

      // Calculate grid dimensions
      const cols = Math.floor(width / gridSize) + 2
      const rows = Math.floor(height / gridSize) + 2

      // Draw grid
      ctx.strokeStyle = "rgba(52, 235, 79, 0.2)" // Brighter grid lines
      ctx.lineWidth = lineWidth

      // Draw horizontal lines
      for (let i = 0; i < rows; i++) {
        const y = i * gridSize
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // Draw vertical lines
      for (let i = 0; i < cols; i++) {
        const x = i * gridSize
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }

      // Draw dots at intersections with subtle pulsing
      // Calculate a global pulse effect (very subtle)
      const globalPulse = Math.sin(time * 0.5) * 0.2 + 0.9 // Value between 0.7 and 1.1

      ctx.fillStyle = `rgba(52, 235, 79, ${0.7 * globalPulse})` // Brighter dots

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize
          const y = j * gridSize

          // Add some movement to the dots
          const offsetX = Math.sin(time + i * 0.5) * 4 // Slightly less movement
          const offsetY = Math.cos(time + j * 0.5) * 4

          // Ensure the size is always positive
          const sineValue = Math.sin(time + i * j * 0.05) * 1.5
          const size = Math.max(0.8, dotSize + sineValue) // Larger minimum size

          ctx.beginPath()
          ctx.arc(x + offsetX, y + offsetY, size, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Draw some connecting lines between random dots
      ctx.strokeStyle = `rgba(52, 235, 79, ${0.3 * globalPulse})` // Brighter connecting lines
      ctx.lineWidth = 0.6

      for (let i = 0; i < cols; i += 3) {
        for (let j = 0; j < rows; j += 3) {
          if (Math.random() > 0.65) { // Slightly more connections
            const x1 = i * gridSize + Math.sin(time + i * 0.5) * 4
            const y1 = j * gridSize + Math.cos(time + j * 0.5) * 4

            const x2 = (i + Math.floor(Math.random() * 3)) * gridSize + Math.sin(time + (i + 1) * 0.5) * 4
            const y2 = (j + Math.floor(Math.random() * 3)) * gridSize + Math.cos(time + (j + 1) * 0.5) * 4

            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.stroke()
          }
        }
      }

      // Update time
      time += 0.005
    }

    // Animation loop
    const animate = () => {
      drawGrid()
      animationFrameId = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Handle resize
    const handleResize = () => {
      const dimensions = setCanvasDimensions()
      width = dimensions.width
      height = dimensions.height
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full bg-black opacity-80" aria-hidden="true" />
}
