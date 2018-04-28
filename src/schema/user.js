import yup from 'yup';

export const USER = yup.object().shape({
  name: yup.object().shape({
    first: yup.string().required(),
    last: yup.string().required()
  }),
  email: yup.string().email().required(),
  id: yup.string()
});
