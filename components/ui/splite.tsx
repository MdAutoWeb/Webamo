"use client"

import { Suspense, lazy, useCallback } from "react"
import type { Application } from "@splinetool/runtime"

const Spline = lazy(() => import("@splinetool/react-spline"))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const handleLoad = useCallback((app: Application) => {
    app.setBackgroundColor("rgba(0,0,0,0)")
  }, [])

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader" />
        </div>
      }
    >
      <Spline scene={scene} className={className} onLoad={handleLoad} />
    </Suspense>
  )
}

