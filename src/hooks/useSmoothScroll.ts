import { useEffect } from "react"
import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

/**
 * Wires Lenis smooth scrolling directly into GSAP's ticker + ScrollTrigger
 * so that scroll-driven timelines stay perfectly in sync in BOTH directions.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches
      || "ontouchstart" in window

    // Native touch scrolling is smoother than a JS scroll loop on phones.
    if (isTouchDevice) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
      syncTouch: true,
    })

    // Drive Lenis from GSAP's ticker for frame-perfect sync
    lenis.on("scroll", ScrollTrigger.update)

    const raf = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    // Refresh once fonts / layout settle
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener("load", refresh)
    const t = window.setTimeout(refresh, 600)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
      window.removeEventListener("load", refresh)
      window.clearTimeout(t)
    }
  }, [])
}
