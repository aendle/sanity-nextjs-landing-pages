export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61857c4b77210012f8e1a811',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-q271iojj',
                  apiId: '4f9ccdbf-5f91-4965-81a5-fa335d7048ee'
                },
                {
                  buildHookId: '61857c4cb56bb01f4a1990d6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xs1uptob',
                  apiId: '22191eef-b95a-42b4-a14f-01ae2877272e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aendle/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xs1uptob.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
