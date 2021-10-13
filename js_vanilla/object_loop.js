const menuItems = [
  {
    name: 'Dashboard',
    link: '/',
  },
  {
    name: 'Cadastros',
    link: '/',
    submenus: {
      0: {
        name: 'Usuários',
        link: '/usuarios',
      },
      1: {
        name: 'Professore',
        link: '/professores',
      },
      2: {
        name: 'Disciplinas',
        link: '/disciplinas',
      },
      3: {
        name: 'Turmas',
        link: '/turmas',
      },
    },
  },
]

console.log(menuItems)

menuItems.forEach((item, index) => {
  console.log(item.name)
  if (item.submenus) {
    console.log('Submenus')
    for (const key in item.submenus) {
      console.log(item.submenus[key].name)
    }
  }
})

menuItems.map((item, index) => {
  console.log(item.name)
  if (item.submenus) {
    console.log('Submenus')
    for (const key in item.submenus) {
      console.log(item.submenus[key].name)
    }
  }
})
