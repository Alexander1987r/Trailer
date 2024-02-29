const trailes=document.querySelector('.trailes');
const listButton=trailes.querySelectorAll('.list__button ');
const listSrc=[];

//функция создания списка с трейлерами
const createListTrails=(listSrc)=>{
  const itemsWrapper=[];
  const iframesWrapper=[];
 //создаем ul
 const trailesVideoList=document.createElement('ul');
 trailesVideoList.classList.add('trailes__video-list');
 trailes.appendChild(trailesVideoList);

 //перебираем массив значении дата атрибутов  и на каждой итерации создадим li,iframe
 listSrc.forEach((elem)=>{
  //создадим li
  const trailesVideoItem=document.createElement('li');
  trailesVideoItem.classList.add('trailes__video-item');
  trailesVideoList.appendChild(trailesVideoItem);
  itemsWrapper.push(trailesVideoItem);

  //создадим iframe
  const trailesVideo=document.createElement('iframe');
  trailesVideo.classList.add('trailes__video');
  trailesVideoItem.appendChild(trailesVideo);
  trailesVideo.src=elem;
  iframesWrapper.push(trailesVideo);
 });
  return {itemsWrapper,iframesWrapper};
}

//функкция контроля вывода трелеров
const controlTrailer=(itemsWrapper,iframesWrapper,i=0,number=0)=>{
  if(i !== number) {
    itemsWrapper[i].style.display='none';
  } else {
    itemsWrapper[i].style.display='block';
    }
}
const init=()=>{
//вешаем прослушиватель на родителя наших тоглов и ловим клик на всплытии
trailes.addEventListener('click',(evt)=>{
    const target=evt.target;
    const number= Number(target.dataset.number);
    //если клик содержит тег button и не содержит активный класс
    if( (target.tagName === 'BUTTON') && (!target.classList.contains('list__button_active'))){
      //найдем активный класс
      const listButtonActive=trailes.querySelector('.list__button_active');
      //удалим его
      listButtonActive.classList.remove('list__button_active');
      //добавим активный класс клику
      target.classList.add('list__button_active');

      listButton.forEach((elem,i)=>{
         controlTrailer(itemsWrapper,iframesWrapper,i,number);
      });

    }
});

//переберем массив тоглов и спишем с каждого значения дата атрибута
listButton.forEach((elem)=>{
 listSrc.push(elem.dataset.src);
});
//вызов + деструктуризация
const {itemsWrapper,iframesWrapper}=createListTrails(listSrc);

//первоначальный вызов функции которая выведет первый трейлер

controlTrailer(itemsWrapper,iframesWrapper);
}
init();


