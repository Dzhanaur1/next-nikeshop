import { API_URL } from ".";

export const postFeedack = (data) => {
  fetch(`${API_URL}/feedback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      event.target.reset();
      console.log("Успешно отправлено:", data);
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
};
