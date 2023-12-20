// @refresh reload
import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense, createRenderEffect, onCleanup } from "solid-js";
import { createScriptLoader } from "@solid-primitives/script-loader";
import "./app.css";
import { isServer } from "solid-js/web";

export default function App() {
  createScriptLoader({
    src: "https://umami.delvis.org/script.js",
    "data-website-id": "ba170e55-8926-4fc2-a36f-a4bbcd2ebd83",
    async: true,
  });

  //NOTE Below works, if createScriptLoader is commented:

  // if (!isServer) {
  //   const script = document.createElement("script");
  //   script.src = "https://umami.delvis.org/script.js";
  //   script.async = true;
  //   script.setAttribute(
  //     "data-website-id",
  //     "ba170e55-8926-4fc2-a36f-a4bbcd2ebd83"
  //   );
  //   createRenderEffect(() => {
  //     document.head.appendChild(script);
  //   });
  //   onCleanup(
  //     () => document.head.contains(script) && document.head.removeChild(script)
  //   );
  // }

  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>SolidStart - Basic</Title>
          <a href="/">Index</a>
          <a href="/about">About</a>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
