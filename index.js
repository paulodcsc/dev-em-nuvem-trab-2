const express = require("express");
const app = express();
const auth = require("./functions/auth");
const task = require("./functions/task");

app.get("/", function (req, res) {
  res.send("<h3> Bem vindo a AMO PETS! 🐶🐱🐹🐾<h3>");
});

app.get("/contato", function (req, res) {
  res.send(
    "<h3> CONTATOS 📞 <h3>" +
      "<p>Loja Aldeota: (85) 3247-6625<p>" +
      "<p>Loja Meireles: (85) 3267-2514<p>" +
      "<p>Loja Edson Queiroz: (85) 3288-9342<p>"
  );
});

app.get("/eventos", function (req, res) {
  res.send(
    "<h3> EVENTOS 🎉 <h3>" +
      "<p>Aniversário da AMO PETS: Dia 27/05<p>" +
      "<p>Palestra educacional: Dia 02/06<p>"
  );
});

app.get("/QuemSomos", function (req, res) {
  res.send(
    "<h3> QUEM SOMOS ❓ <h3>" +
      "<p>A AMO PETS Petshop está no mercado de Petshops em Fortaleza há 19 anos e vem conquistando cada vez mais clientes por ser referência no atendimento e na forma como cuida dos pets, pois conosco todos eles são tratados com muito amor.<p>"
  );
});


app.get("/Peixes", function (req, res) {
  res.send(
    "<h3> PEIXES 🐠 <h3>" +
      "<p>Tetra Neon<p>" +
      "<p>Mato Grosso<p>" +
      "<p>Tanictis<p>" +
      "<p>Acará Bandeira<p>"
  );
});

app.get("/Passaros", function (req, res) {
  res.send(
    "<h3> PÁSSAROS 🦆 <h3>" +
      "<p>Periquito<p>" +
      "<p>Canário<p>" +
      "<p>Calopsita<p>" +
      "<p>Manon<p>"
  );
});

app.get("/Valores", function (req, res) {
  var size = req.query["size"];
  var plan = req.query["plan"];
  var cost = task.bathCost(size, plan);

  res.send("<h3> CUSTO DO BANHO 🧼 <h3>" + cost);
});

app.get("/Delivery", function (req, res) {
  var distance = req.query["distance"];
  var cost = task.calculateDelivery(distance);

  res.send("<h3> CUSTO DO TRANSPORTE 🚚 <h3>" + "R$" + cost);
});

app.get("/SeeDog", function (req, res) {
  var dog = req.query["dog"];
  var image = task.seeDog(dog);

  res.send("<h3> VER CACHORRO 🐕‍🦺 <h3>" + "<img src=" + image + ">");
});

app.get("/Login", function (req, res) {
  var login = req.query["login"];
  var password = req.query["password"];
  var validation = auth.validateLogin(login, password);

  res.send("<h3>" + validation + "<h3>");
});

app.get("/Cupom", function (req, res) {
    var coupon = req.query["coupon"];
    var validation = auth.validateCoupon(coupon);
  
    res.send("<h3>" + validation + "<h3>");
  });

app.listen(3000, function (erro) {
  if (erro) {
    console.log("Erro ao iniciar ❌");
  } else {
    console.log("Servidor Iniciado 🚀");
  }
});

// ROTA 1: Valores - Função 2
// ROTA 2: Contato
// ROTA 3: Eventos
// ROTA 4: Quem somos
// ROTA 5: Validar cupom - Função 1
// ROTA 6: Validar login - Função 1
// ROTA 7: Calcular entrega - Função 2
// ROTA 8: Escolher cachorro - Função 2
// ROTA 9: Peixes
// ROTA 10: Pássaros
