function validateLogin(login, password) {
    if (login == "vitor" && password == "123") {
      return "Logado 👍";
    } else {
      return "Acesso negado 🚫";
    }
  }

  function validateCoupon(coupon) {
    if (coupon == "AMOPETS30") {
      return "Aproveite seu cupom 🎫";
    } else {
      return "Cupom inválido 😞";
    }
  }

  module.exports = {
      validateLogin,
      validateCoupon
  };