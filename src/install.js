import HealthPlugin from "./components/HealthPlugin.vue";
let someKey = "599u3njfinn_jht748";

const VueHealthPlugin = {
  install(Vue, options = {}) {
    if (options.key == someKey) {
      Vue.component("health-plugin", HealthPlugin);
    } else {
      console.log("%c !! Vue Health plugin !! Authentication failed ", "color: red; font-size: 20px");
      console.warn(
        "Authentication failed for health-plugin, please provide a valid encryption key"
      );
    }
  },
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(VueHealthPlugin);
}

export default VueHealthPlugin;
