import { DynamicComponentType } from '@/enum';
import PropTypes from 'prop-types';
import { lazy, Suspense, useMemo } from 'react';

/***************************  DYNAMIC - IMPORT  ***************************/

const imageModules = import.meta.glob('../images/**/*.jsx');
const iconModules = import.meta.glob('../icons/**/*.jsx');

function resolveModule(modules, component, basePath) {
  const trimmed = component.replace(/^\/+/, '');
  const withExt = trimmed.endsWith('.jsx') ? trimmed : `${trimmed}.jsx`;
  const modulePath = `${basePath}/${withExt}`;
  const importer = modules[modulePath];

  if (!importer) {
    return Promise.reject(new Error(`Dynamic component not found: ${modulePath}`));
  }

  return importer();
}

function loadComponent(component, type) {
  switch (type) {
    case DynamicComponentType.IMAGE:
      return resolveModule(imageModules, component, '../images');
    case DynamicComponentType.ICON:
      return resolveModule(iconModules, component, '../icons');
    default:
      return import('../components/logo');
  }
}

/***************************  DYNAMIC COMPONENT  ***************************/

/**
 *
 * @param component: string = Used for rendering manually modified SVG components, such as images, icons
 * @param type: DynamicComponentType = Used to choose the path of the rendering component.
 * @param props: any = Used to set dynamic props, such as sx, size, and color.
 * @returns = Import the component dynamically and pass the rendering component.
 */

// eslint-disable-next-line
function DynamicComponent({ component, type, props }) {
  const ImportedComponent = useMemo(
    () => lazy(() => loadComponent(component, type)),
    [component, type]
  );

  return (
    <Suspense fallback={null}>
      <ImportedComponent {...props} />
    </Suspense>
  );
}

export default DynamicComponent;

DynamicComponent.propTypes = { component: PropTypes.string, type: PropTypes.any, props: PropTypes.any };
