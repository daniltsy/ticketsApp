import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export function useLoginForm() {
  const store = useStore();
  const router = useRouter();
  const { handleSubmit, isSubmitting } = useForm();
  const {
    value: email,
    errorMessage: eError,
    handleBlur: eBlur,
  } = useField(
    'email',
    yup
      .string()
      .trim()
      .required('Пожалуйста, введите email')
      .email('Необходимо ввести корректный email')
  );
  const {
    value: password,
    errorMessage: pError,
    handleBlur: pBlur,
  } = useField(
    'password',
    yup
      .string()
      .trim()
      .required('Введите пароль')
      .min(6, 'Пароль не может быть меньше 6 символов')
  );

  const onSubmit = handleSubmit(async (values) => {
    try {
      await store.dispatch('auth/login', values);
      router.push('/');
    } catch (e) {}
  });
  return {
    email,
    password,
    eError,
    pError,
    eBlur,
    pBlur,
    onSubmit,
    isSubmitting,
  };
}
