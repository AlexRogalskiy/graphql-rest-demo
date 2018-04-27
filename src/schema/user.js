import yup from 'yup';

export const USER = yup.object().shape({
  name: yup.object().shape({
    first: yup.string().required(),
    last: yup.string().required()
  }),
  email: yup.string().email().required(),
  id: yup.string(),
  location: yup.object().shape({
    city: yup.string().required(),
    state: yup.string().required(),
    address: yup.string().required(),
    zip: yup.string().required()
  })
});
