export default {
  widgets: [
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
                  buildHookId: '5fc8f36f56db45528ce33d21',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-7xnrosd7',
                  apiId: '88df9d7f-02e1-44c8-9106-e9586f140c5b'
                },
                {
                  buildHookId: '5fc8f36f8753465c1df97f02',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1yt166fy',
                  apiId: '6d205145-a545-4ce1-a13b-d8f9a2555b9a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gofurtheronline/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1yt166fy.netlify.app', category: 'apps'}
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
