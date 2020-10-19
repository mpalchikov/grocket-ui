import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#009688",
        secondary: "#4caf50",
        accent: "#cddc39",
        error: "#f44336",
        warning: "#ffc107",
        info: "#00bcd4",
        success: "#795548",
      },
    },
  },
});
