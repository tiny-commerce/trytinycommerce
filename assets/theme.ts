import { definePreset } from "@primevue/themes";
import Aura from "@primevue/themes/aura";
import { palette } from "@primevue/themes";

export const tinyCommerceTheme = definePreset(Aura, {
  semantic: {
    primary: palette("#1B9C85"),
    secondary: palette("#F27A17"),
    colorScheme: {
      light: {
        surface: palette("#32527B"),
      },
    },
  },
  components: {},
});
