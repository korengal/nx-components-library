import { formatFiles, installPackagesTask, Tree } from '@nrwl/devkit';
import { componentCypressGenerator } from '@nrwl/react/src/generators/component-cypress-spec/component-cypress-spec';
import { componentStoryGenerator } from '@nrwl/react/src/generators/component-story/component-story';
import { componentGenerator as reactComponentGenerator } from '@nrwl/react/src/generators/component/component';
import { ComponentGeneratorSchema } from './schema';
import { names } from '@nrwl/devkit';

export async function componentGenerator(
  tree: Tree,
  { name, project }: ComponentGeneratorSchema
) {
  const { fileName: componentFileName, className: componentName } = names(name);
  const componentPath = `lib/${componentFileName}/${componentFileName}.tsx`;

  await reactComponentGenerator(tree, {
    name: componentName,
    project,
    style: 'styled-components',
  });

  await componentStoryGenerator(tree, { project, componentPath });

  componentCypressGenerator(tree, { project, componentPath });

  await formatFiles(tree);

  return () => {
    installPackagesTask(tree);
  };
}

export default componentGenerator;
