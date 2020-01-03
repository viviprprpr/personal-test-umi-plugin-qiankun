export function render(oldRender) {
  oldRender();
}

export function modifyRouteProps(props) {
  return { ...props };
}

// 值是一个 promise
export const qiankun = fetch('/').then(() => {
  console.log('fetch(/)');
  return {
    // 注册子应用信息
    apps: [
      {
        name: 'knowledgespace', // 唯一 id
        entry: '//localhost:8001/', // html entry
        base: '/knowledgespace', // app1 的路由前缀，通过这个前缀判断是否要启动该应用，通常跟子应用的 base 保持一致
        // history: 'browser', // 子应用的 history 配置，默认为当前主应用 history 配置
        // history: 'hash', // 子应用的 history 配置，默认为当前主应用 history 配置
      },
    ],
    jsSandbox: false, // 是否启用 js 沙箱，默认为 false
    prefetch: false, // 是否启用 prefetch 特性，默认为 true
    // defer: true,
    lifeCycles: {
      afterUnmount: app => {
        console.log('afterUnmount', app);
        app.render({ appContent: '', loading: false });
      }
    },
  }
});

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
