export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '627ced77b738b35ee352160b',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-t2d6juov',
                  apiId: 'a3226e77-12e0-41e4-9b83-850c886f6662'
                },
                {
                  buildHookId: '627ced78ba376f6181822850',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-qqefsyx4',
                  apiId: 'ecd660f6-3fcf-4697-b826-3d8ff944da28'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CapBlighNZ/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-qqefsyx4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
