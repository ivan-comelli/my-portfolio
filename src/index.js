import { Fancybox } from "@fancyapps/ui";
import { inject } from "@vercel/analytics"

import "@fancyapps/ui/dist/fancybox/fancybox.css";


Fancybox.bind('[data-fancybox="sheet"]', {
    Thumbs: {
      type: false,
    },
  });