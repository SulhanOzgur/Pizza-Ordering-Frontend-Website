import terminalPizzaImg from '../../images/iteration-2-images/pictures/food-1.png';
import positionAbsolutePizzaImg from '../../images/iteration-2-images/pictures/food-2.png';
import useEffectBurgerImg from '../../images/iteration-2-images/pictures/food-3.png';

const FoodsDataList = [
  {
    id: 1,
    name: 'Position Absolute Acı Pizza',
    price: '85₺',
    score: '4.9',
    comment: '(928)',
    description:
      'Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.',
    image: positionAbsolutePizzaImg,
  },
  {
    id: 2,
    name: 'Terminal Pizza',
    price: '60₺',
    score: '4.9',
    comment: '(200)',
    description: 'terminalPizzaImg',
    image: terminalPizzaImg,
  },
  {
    id: 3,
    name: 'useEffect Tavuklu Burger',
    price: '75₺',
    score: '4.9',
    comment: '(462)',
    description: '',
    image: useEffectBurgerImg,
  },
];

export default FoodsDataList;
