import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

import lottie from "astro-integration-lottie";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image(), lottie()],
});
