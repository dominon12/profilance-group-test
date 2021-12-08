import { TEST_USER } from "./CredentialsService";
import { articles } from "./StoreService";

/**
 * Simulates request to the backend
 * to login the user.
 *
 * @export
 * @param {*} user - user data
 * @return {*} {Promise}
 */
export async function performLogin(user) {
  let response = {
    success: true,
    data: user,
  };

  if (user.email !== TEST_USER.email) {
    response = {
      success: false,
      error: "Пользователя с таким мейлом не существует",
    };
  } else if (user.password !== TEST_USER.password) {
    response = {
      success: false,
      error: "Вы ввели неверный пароль",
    };
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(response), 1500);
  });
}

/**
 * Simulates GET request to a backend.
 *
 * @export
 * @return {*} {Promise}
 */
export async function getArticles() {
  const response = {
    success: true,
    data: articles,
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(response), 1500);
  });
}
