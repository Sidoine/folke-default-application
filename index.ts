import * as identity from 'folke-identity';
import { default as folke, Application } from 'folke-core';
import * as ko from 'knockout';
import * as defaultComponents from 'folke-default-components';
import * as defaultMenu from 'folke-default-menu';
import * as localization from 'folke-ko-localization';

declare function require(name: string): string;

export function register(services: identity.Services) {
    localization.register({ identity: identity.fr });
    defaultMenu.register();
    identity.register(services, "Administrator");
    defaultComponents.register();
    return { folke, defaultMenu, localization };
}
