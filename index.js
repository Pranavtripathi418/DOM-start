const mainHeading= document.querySelector('#main-heading');
mainHeading.style.textAlign='right';

const basketHeading =document.querySelector('#basket-heading');
basketHeading.style.color='brown';
basketHeading.style.marginLeft='30px';

const fruits= document.querySelector('.fruits');
fruits.style.backgroundColor='gray';
fruits.style.margin='30px';
fruits.style.padding='30px';
fruits.style.borderRadius='5px';
fruits.style.width='50%';
fruits.style.listStyleType='none';

const fruit= document.querySelectorAll('.fruit');
for(let i=0; i<fruit.length; i++){
    fruit[i].style.backgroundColor='white';
    fruit[i].style.margin='10px';
    fruit[i].style.padding='10px';
    fruit[i].style.borderRadius='5px'
}

const evenChild= document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0; i<evenChild.length; i++){
    evenChild[i].style.color='white';
    evenChild[i].style.backgroundColor='brown';

}
