import MdIcon from './components/md-icon/MdIcon.vue';
import MdLayout from './components/md-layout/MdLayout.vue';
import MdLayoutContent from './components/md-layout/md-layout-content/MdLayoutContent.vue';
import MdLayoutDrawer from './components/md-layout/md-layout-drawer/MdLayoutDrawer.vue';
import MdLayoutHeader from './components/md-layout/md-layout-header/MdLayoutHeader.vue';
import MdLayoutSpacer from './components/md-layout/md-layout-spacer/MdLayoutSpacer.vue';
import MdLayoutTitle from './components/md-layout/md-layout-title/MdLayoutTitle.vue';
import MdNavigation from './components/md-navigation/MdNavigation.vue';
import MdNavigationLink from './components/md-navigation/md-navigation-link/MdNavigationLink.vue';

export const components = {
  MdIcon,
  MdLayout,
  MdLayoutContent,
  MdLayoutDrawer,
  MdLayoutHeader,
  MdLayoutSpacer,
  MdLayoutTitle,
  MdNavigation,
  MdNavigationLink
};

export default {
  install (Vue) {
    Object.keys(components).forEach((name) => {
      Vue.component(name, components[name]);
    });
  }
};

export {
  MdIcon,
  MdLayout,
  MdLayoutContent,
  MdLayoutDrawer,
  MdLayoutHeader,
  MdLayoutSpacer,
  MdLayoutTitle,
  MdNavigation,
  MdNavigationLink
};
