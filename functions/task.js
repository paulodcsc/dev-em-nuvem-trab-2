function seeDog(dog) {
    if (dog == "yorkshire") {
      return "https://www.petlove.com.br/images/breeds/192471/profile/original/yorkshire-p.jpg?1532539683";
    } else if (dog = "pitbull") {
      return "https://www.petlove.com.br/images/breeds/193221/profile/original/pitbull-p.jpg?1532539293";
    }
  }

function calculateDelivery(distance) {
    return  20 + distance * 0.5;
}

function bathCost(size, plan) {
    if (size == "pequeno" && plan == "normal") {
      return "R$ 30,00";
    } else if (size == "pequeno" && plan == "prime") {
      return "R$ 50,00";
    } else if (size == "grande" && plan == "normal") {
      return "R$ 40,00"
    } else if (size == "grande" && plan == "prime") {
      return "R$ 60,00"
    } else {
      return "Insira dados válidos!"
    }
}

module.exports = {
  seeDog,
  calculateDelivery,
  bathCost
}