import yup from 'yup';

export const POST = yup.object().shape({
  title: yup.string().required(),
  author: yup.string().required(),
  id: yup.string(),
  published: yup.date().required(),
  body: yup.string().required()
});
