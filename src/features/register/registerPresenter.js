// registerPresenter.js

import { registerUser } from "./registerModel.js";
import { RegisterView } from "./registerView.js";
import "../../assets/styles/styles.css";

const RegisterPresenter = () => {
  const handleRegister = async () => {
    const { email, password } = RegisterView.getFormData();
    RegisterView.showLoading();

    try {
      await registerUser(email, password);
      RegisterView.showSuccess();
    } catch (error) {
      RegisterView.showError(error.message);
    } finally {
      RegisterView.hideLoading();
    }
  };

  const init = () => {
    RegisterView.bindSubmitHandler(handleRegister);
  };

  return { init };
};

RegisterPresenter().init();

export default RegisterPresenter;
