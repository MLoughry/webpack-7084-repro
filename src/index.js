function doSomething() {
    console.log('Loading a');
    import(/* webpackChunkName: "a" */ /* webpackPrefetch: true */ './a').then(m => m.a());
}

doSomething();