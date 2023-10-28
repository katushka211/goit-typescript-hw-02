/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type T = "name" | "color";
type U = "position" | "weight";

function compare(top: Pick<AllType, T>, bottom: Pick<AllType, U>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

export {};

const topObj = { name: "Top", color: "Red" };
const bottomObj = { position: 1, weight: 100 };
const result = compare(topObj, bottomObj);
console.log(result);
