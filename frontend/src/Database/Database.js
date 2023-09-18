import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';

export function getData(){
  return [
 { title: "Angel", price: "$7/15min", image: image1, id: 1},
 { title: "Melinda", price: "$10/10min", image: image2, id: 2},
 { title: "Rara", price: "$10/30min", image: image3, id: 3},
 { title: "Jia", price: "$10/Permanent", image: image4, id: 4},
 ];
}