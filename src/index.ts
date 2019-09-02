import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the jupyterentension extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterentension',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterentension is activated!');
  }
};

export default extension;
