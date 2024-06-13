import { h, template, useInject, useProvide } from 'essor';

export function MDXProvider({ children, components }) {
  useProvide('$mdxComponents', components);
  return h(template(''), {
    0: {
      children: [[() => children]],
    },
  });
}
export function useMDXComponents() {
  return useInject('$mdxComponents', {});
}
