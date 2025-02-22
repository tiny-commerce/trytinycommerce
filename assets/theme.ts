import {definePreset, palette} from "@primevue/themes";
import Aura from "@primevue/themes/aura";

export const tinyCommerceTheme = definePreset(Aura, {
  semantic:   {
    primary:     palette("#1B9C85"),
    secondary:   palette("#F27A17"),
    colorScheme: {
      light: {
        surface:   palette("#798ea8"),
        formField: {
          placeholderColor: "{surface.300}",
        },
      },
    },
  },
  components: {},
});
