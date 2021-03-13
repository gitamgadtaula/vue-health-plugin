import HealthPlugin from "./components/HealthPlugin.vue";

const VueHealthPlugin = {
  install(Vue) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("health-plugin", HealthPlugin);
  },
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(VueHealthPlugin);
}

export default VueHealthPlugin;
