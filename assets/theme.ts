import { definePreset } from "@primevue/themes";
import Aura from "@primevue/themes/aura";
import { palette } from "@primevue/themes";

export const MakerBizTheme = definePreset(Aura, {
  semantic: {
    primary: palette("#e36c14"),
    colorScheme: {
      light: {
        surface: palette("#32527B"),
      },
    },
  },
  components: {},
});
