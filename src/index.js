import { Fancybox } from "@fancyapps/ui";
import { Analytics } from "@vercel/analytics/react"

import "@fancyapps/ui/dist/fancybox/fancybox.css";


Fancybox.bind('[data-fancybox="sheet"]', {
    Thumbs: {
      type: false,
    },
  });