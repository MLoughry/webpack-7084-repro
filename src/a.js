export function a() {
    console.log('a loaded');
    console.log('Loading b');
    import(/* webpackChunkName: "b" */ /* webpackPrefetch: true */ './b').then(m => m.b());
}