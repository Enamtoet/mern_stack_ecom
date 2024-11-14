export const registerFormControls = [
  {
    name: 'userName',
    label: 'User Name',
    placeHolder: 'Enter Your User Name ',
    componentType: 'input',
    type: 'text',
  },
  {
    name: 'email',
    label: 'Email',
    placeHolder: 'Enter Your Email ',
    componentType: 'input',
    type: 'email',
  },
  {
    name: 'password',
    label: 'Password',
    placeHolder: 'Enter Your Password ',
    componentType: 'input',
    type: 'password',
  },
]
export const loginFormControls = [
  {
    name: 'email',
    label: 'Email',
    placeHolder: 'Enter Your Email ',
    componentType: 'input',
    type: 'email',
  },
  {
    name: 'password',
    label: 'Password',
    placeHolder: 'Enter Your Password ',
    componentType: 'input',
    type: 'password',
  },
]

export const addProductFormElements = [
  {
    label: 'Titolo',
    name: 'title',
    componentType: 'input',
    type: 'text',
    placeholder: 'Inserisci il titolo del prodotto',
  },
  {
    label: 'Descrizione',
    name: 'description',
    componentType: 'textarea',
    placeholder: 'Inserisci una breve descrizione del prodotto',
  },
  {
    label: 'Categoria',
    name: 'category',
    componentType: 'select',
    options: [
      { id: 'Frutta', label: 'Frutta' },
      { id: 'Verdura', label: 'Verdura' },
    ],
    placeholder: 'Seleziona categoria',
  },
  {
    label: 'Prezzo',
    name: 'price',
    componentType: 'input',
    type: 'number',
    placeholder: 'Inserisci il prezzo',
  },
]
