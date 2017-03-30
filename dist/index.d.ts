import * as identity from 'folke-identity';
import { Application } from 'folke-core';
import * as defaultMenu from 'folke-default-menu';
import * as localization from 'folke-ko-localization';
export declare function register<TKey>(services: identity.Services<TKey>): {
    folke: Application;
    defaultMenu: typeof defaultMenu;
    localization: typeof localization;
};
