import ReactDOM from 'react-dom';

export function render(oldRender) {
  oldRender();
}

export function modifyRouteProps(props) {
  return { ...props };
}

export const qiankun = {
  // 应用加载之前
  async bootstrap(props) {
    console.log('app1 bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props) {
    console.log('app1 mount', props, window.location);
  },
  // 应用卸载之后触发
  async unmount(props) {
    console.log('app1 unmount', props);
    ReactDOM.unmountComponentAtNode(document.getElementById('knowledgespace'));
  },
};

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
