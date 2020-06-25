// Types for compiled templates
declare module 'ember-cli-typescript-bug/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}
