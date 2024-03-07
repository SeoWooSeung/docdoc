const BTN = document.querySelector('button');
const H1 = document.querySelector('h1');
// 이름지을때 대문자로 쓸수 있음 //
console.log(BTN);// (=)할당한다는뜻 //


const Toggle = () => H1.classList.toggle('on')

BTN.addEventListener('click', Toggle);

const seo_Name = '서우승';
const seo_Age = '25';
const seo_wife = '지연';
//객체에서는 이름이 중요하다 //

const seo = {
    name: '서우승',
    age: 30,
    wife: '지연'
}

console.log(seo.name, seo['name']) //두가지 방법이 있다//

const Ddal = ['이하린', '이은조'];
//배열에서는 순서가 중요 이하린:0 , 이은조:1 //
console.log(Ddal[1]);

const shopData = [
    { name: '서우승', age: 30, id: 1 },
    { name: '김우승', age: 40, id: 2 },
    { name: '박우승', age: 50, id: 3 },
    { name: '최우승', age: 60, id: 4 },
]

const overAge = shopData.filter(it => it.age > 49);
console.log(overAge);


const SHOP = document.querySelector('#N');
const SHOPDATE = shopData.map(it => `<li>${it.name}</li>`).join('');
SHOP.innerHTML = SHOPDATE;
//자료가 여러개면 여러개를 렌더링 시켜서 잘 안씀 //