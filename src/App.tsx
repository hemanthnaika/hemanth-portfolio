import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import "lenis/dist/lenis.css";
import { ReactLenis, type LenisRef } from "lenis/react";
import { useEffect, useRef, useState } from "react";
import Loader from "./components/Loader";
import { createBrowserRouter, RouterProvider } from "react-router";
import AllProjects from "./components/AllProjects";
import Home from "./components/home";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const App = () => {
  const lenisRef = useRef<LenisRef | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/projects",
      element: <AllProjects />,
    },
  ]);

  return (
    <main>
      {loading && <Loader />}
      {!loading && (
        <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
          <RouterProvider router={router} />
        </ReactLenis>
      )}
    </main>
  );
};

export default App;
