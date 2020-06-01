(function () {
  const firstDayBreakfasts = document.getElementsByName('breakfasts');
  const firstDayDinners = document.getElementsByName('dinner');
  const firstDaySuppers = document.getElementsByName('supper');
  const openPdf = document.getElementById('dieta-download');
  const dietaAccept = document.getElementById('dieta-accept');
  let breakfast;
  let dinner;
  let supper;
  let docInfo;


  /**
   *  Объект с завтраками
   */
  const breakfasts = [{
      name: 'Творожные оладьи',
      variant: 'ВАРИАНТ 1',
      type: 'ЗАВТРАК',
      ingridients: ['Творог 2% жирности', 'Яйцо', 'Мука рисовая', 'Банан'],
      quantaty: ['120 гр', '1 шт', '40 гр', '100 гр'],
      recipe: 'Творог, яйцо и банан смешать в блендере до однородной текстуры (либо размять вилкой). Добавить муку, перемешать. Выпекать как обычные оладьи с двух сторон на антипригарной сковороде.',
      image: 'Картинка',
      kbzhu: '405/31/7/57'
    },
    {
      name: 'Овсяноблин с творогом и бананом',
      variant: 'ВАРИАНТ 2',
      type: 'ЗАВТРАК',
      ingridients: ['Овсяные хлопья', 'Яйцо', 'Творог 5% жирности', 'Банан'],
      quantaty: ['40 гр', '1 шт', '100 гр', '80 гр'],
      recipe: 'Овсяные хлопья измельчить в блендере (можно не измельчать, если у вас мелкие хлопья). Смешать хлопья с яйцом. Получившуюся смесь вылить на сковороду. Обжарить блинчик с двух сторон. Снять со сковороды, помазать творогом, сверху выложить банан, нарезанный кружочками. Сложить блин пополам. ',
      image: 'Картинка',
      kbzhu: '400/27/12/47'
    }
  ];

  const dinners = [{
      name: 'Блюдо на обед №1',
      variant: 'ВАРИАНТ 1',
      type: 'ОБЕД',
      ingridients: ['Ингридиент 1', 'Ингридиент 2', 'Ингридиент 2', 'Ингридиент 3'],
      quantaty: ['180 гр', '2 шт', '70 гр', '120 гр'],
      recipe: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      image: 'Картинка',
      kbzhu: '300/20/5/40'
    },
    {
      name: 'Блюдо на обед №2',
      variant: 'ВАРИАНТ 2',
      type: 'ОБЕД',
      ingridients: ['Ингридиент 1', 'Ингридиент 2', 'Ингридиент 2', 'Ингридиент 3'],
      quantaty: ['200 гр', '3 шт', '140 гр', '150 гр'],
      recipe: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      image: 'Картинка',
      kbzhu: '200/10/15/60'
    },
  ];

  const suppers = [{
      name: 'Блюдо на ужин №1',
      variant: 'ВАРИАНТ 1',
      type: 'УЖИН',
      ingridients: ['Ингридиент 1', 'Ингридиент 2', 'Ингридиент 2', 'Ингридиент 3'],
      quantaty: ['115 гр', '2 шт', '170 гр', '20 гр'],
      recipe: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      image: 'Картинка',
      kbzhu: '290/10/11/30'
    },
    {
      name: 'Блюдо на ужин №2',
      variant: 'ВАРИАНТ 2',
      type: 'УЖИН',
      ingridients: ['Ингридиент 1', 'Ингридиент 2', 'Ингридиент 2', 'Ингридиент 3'],
      quantaty: ['220 гр', '7 шт', '30 гр', '90 гр'],
      recipe: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      image: 'Картинка',
      kbzhu: '210/12/8/40'
    },
  ];


  function radioCheck() {
    for (let i = 0; i < firstDayBreakfasts.length; i++) {
      if (firstDayBreakfasts[i].checked) {
        if (firstDayBreakfasts[i].value == 'breakfasts_1') {
          breakfast = 0;
        } else if (firstDayBreakfasts[i].value == 'breakfasts_2') {
          breakfast = 1;
        }
      }
    }

    for (let i = 0; i < firstDayDinners.length; i++) {
      if (firstDayDinners[i].checked) {
        if (firstDayDinners[i].value == 'dinner_1') {
          dinner = 0;
        } else if (firstDayDinners[i].value == 'dinner_2') {
          dinner = 1;
        }
      }
    }

    for (let i = 0; i < firstDaySuppers.length; i++) {
      if (firstDaySuppers[i].checked) {
        if (firstDaySuppers[i].value == 'supper_1') {
          supper = 0;
        } else if (firstDaySuppers[i].value == 'supper_2') {
          supper = 1;
        }
      }
    }

    docInfo = {
      info: {
        title: 'Гибкая диета',
        author: 'BeInShape',
        subject: 'Прорамма индивидуального питания',
        keywords: 'диета, фитнес, питание',
      },
      pageSize: 'A4',
      pageOrientation: 'landscape',
      pageMargins: [55, 55, 55, 60],

      header: function (currentPage, pageCount) {
        return {
          text: currentPage.toString() + 'из' + pageCount,
          alignment: 'right',
          margin: [0, 30, 10, 50],
        };
      },

      footer: [{
        // text: 'Нижний колонтитул',
        // alignment: 'center',
      }, ],

      content: [{
          style: 'header',
          type: 'none',
          ul: ['Гибкая программа', '1500 калорий', 'День 1'],
        },
        {
          table: {
            widths: [100, 150, 100, 200, '*'],
            body: [
              ['Блюдо', 'Ингредиенты', 'Количество', 'Приготовление', 'Фото']
            ],
          },
        },
        {
          table: { // Завтраки
            widths: ['*'],
            body: [
              [{
                text: breakfasts[breakfast].type,
                alignment: 'center',
              }, ],
            ],
          },
        },
        {
          table: {
            widths: ['*'],
            body: [
              [{
                text: breakfasts[breakfast].variant,
              }, ],
            ],
          },
        },
        {
          table: {
            widths: [100, 150, 100, 200, '*'],
            body: [
              [
                breakfasts[breakfast].name,
                breakfasts[breakfast].ingridients[0] + ' \n ' + breakfasts[breakfast].ingridients[1] + ' \n ' + breakfasts[breakfast].ingridients[2] + ' \n ' + breakfasts[breakfast].ingridients[3],
                breakfasts[breakfast].quantaty[0] +
                ' \n ' +
                breakfasts[breakfast].quantaty[1] +
                ' \n ' +
                breakfasts[breakfast].quantaty[2] +
                ' \n ' +
                breakfasts[breakfast].quantaty[3],
                breakfasts[breakfast].recipe,
                breakfasts[breakfast].image,
              ],
            ],
          },
        },
        {
          table: {
            widths: [100, '*'],
            body: [
              [{
                  text: 'КБЖУ',
                },
                {
                  text: breakfasts[breakfast].kbzhu,
                  alignment: 'right',
                },
              ],
            ],
          },
        },
        {
          table: { // Обеды
            widths: ['*'],
            body: [
              [{
                text: dinners[dinner].type,
                alignment: 'center',
              }, ],
            ],
          },
        },
        {
          table: {
            widths: ['*'],
            body: [
              [{
                text: dinners[dinner].variant,
              }, ],
            ],
          },
        },
        {
          table: {
            widths: [100, 150, 100, 200, '*'],
            body: [
              [
                dinners[dinner].name,
                dinners[dinner].ingridients[0] + ' \n ' + dinners[dinner].ingridients[1] + ' \n ' + dinners[dinner].ingridients[2] + ' \n ' + dinners[dinner].ingridients[3],
                dinners[dinner].quantaty[0] +
                ' \n ' +
                dinners[dinner].quantaty[1] +
                ' \n ' +
                dinners[dinner].quantaty[2] +
                ' \n ' +
                dinners[dinner].quantaty[3],
                dinners[dinner].recipe,
                dinners[dinner].image,
              ],
            ],
          },
        },
        {
          table: {
            widths: [100, '*'],
            body: [
              [{
                  text: 'КБЖУ',
                },
                {
                  text: dinners[dinner].kbzhu,
                  alignment: 'right',
                },
              ],
            ],
          },
        },
        {
          table: { // Ужины
            widths: ['*'],
            body: [
              [{
                text: suppers[supper].type,
                alignment: 'center',
              }, ],
            ],
          },
        },
        {
          table: {
            widths: ['*'],
            body: [
              [{
                text: suppers[supper].variant,
              }, ],
            ],
          },
        },
        {
          table: {
            widths: [100, 150, 100, 200, '*'],
            body: [
              [
                suppers[supper].name,
                suppers[supper].ingridients[0] + ' \n ' + suppers[supper].ingridients[1] + ' \n ' + suppers[supper].ingridients[2] + ' \n ' + suppers[supper].ingridients[3],
                suppers[supper].quantaty[0] +
                ' \n ' +
                suppers[supper].quantaty[1] +
                ' \n ' +
                suppers[supper].quantaty[2] +
                ' \n ' +
                suppers[supper].quantaty[3],
                suppers[supper].recipe,
                suppers[supper].image,
              ],
            ],
          },
        },
        {
          table: {
            widths: [100, '*'],
            body: [
              [{
                  text: 'КБЖУ',
                },
                {
                  text: suppers[supper].kbzhu,
                  alignment: 'right',
                },
              ],
            ],
          },
        },
      ],
      styles: {
        header: {
          fontSize: 12,
          margin: [30, 0, 0, 10],
          listStyle: 'none',
        },
      },
    };
  }
  dietaAccept.addEventListener('click', radioCheck);




  openPdf.addEventListener('click', () => {
    // pdfMake.createPdf(docInfo).open();
    pdfMake.createPdf(docInfo).download('диета.pdf');
  });
})();