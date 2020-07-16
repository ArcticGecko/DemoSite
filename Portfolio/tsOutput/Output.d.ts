export * from '@babel/polyfill';
export * from './Header/index';
export * from './Footer/index';
export * from './Pages/index';
import { Variables } from './Variables';
declare global {
    interface Window {
        $: any;
        React: any;
        ReactDom: any;
        variables: Variables;
    }
}
