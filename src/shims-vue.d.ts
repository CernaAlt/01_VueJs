
// declaracion de Modulo: todos los archivos .vue van hacer considerados un modulo
declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
  