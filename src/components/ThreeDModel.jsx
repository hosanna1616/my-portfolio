"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

function ThreeDModel() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf0f0f0)

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05

    // Create a group for all objects
    const group = new THREE.Group()
    scene.add(group)

    // Create geometric shapes
    const geometry1 = new THREE.TorusKnotGeometry(1, 0.3, 100, 16)
    const material1 = new THREE.MeshNormalMaterial()
    const torusKnot = new THREE.Mesh(geometry1, material1)
    group.add(torusKnot)

    // Add some small spheres orbiting
    const sphereGeometry = new THREE.SphereGeometry(0.2, 32, 32)
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x3b82f6 })

    for (let i = 0; i < 5; i++) {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
      const angle = (i / 5) * Math.PI * 2
      sphere.position.set(Math.cos(angle) * 3, Math.sin(angle) * 3, 0)
      group.add(sphere)
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(10, 10, 10)
    scene.add(pointLight)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate the torus knot
      torusKnot.rotation.x += 0.01
      torusKnot.rotation.y += 0.01

      // Rotate the group
      group.rotation.y += 0.005

      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className="h-80 w-full rounded-lg shadow-md" />
}

export default ThreeDModel

