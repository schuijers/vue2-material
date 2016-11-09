// import components here

export const components = {
  // then put them in here
};

export default {
  install (Vue) {
    Object.keys(components).forEach((name) => {
      Vue.component(name, components[name]);
    });
  }
};

export {
  // and export them here
};
