import { loginUser } from "./loginModel.js";
import { LoginView } from "./loginView.js";
import "../../assets/styles/styles.css";

const LoginPresenter = () => {
  const handleLogin = async () => {
    const { email, password } = LoginView.getFormData();
    LoginView.showLoading();

    try {
      await loginUser(email, password);
      LoginView.showSuccess();
    } catch (error) {
      LoginView.showError(error.message);
    } finally {
      LoginView.hideLoading();
    }
  };

  const init = () => {
    LoginView.bindSubmitHandler(handleLogin);
  };

  return { init };
};

document.addEventListener("DOMContentLoaded", () => {
  LoginPresenter().init();
});
export default LoginPresenter;
