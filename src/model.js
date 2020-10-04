import image from "./assets/image.png";
import {TitleBlock, ImageBlock, ColumnsBlock, TextBlock} from "./classes/blocks";

export const model = [
    new TitleBlock('Конструктор сайта', {
        tag: '<h2>',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240);',
            color: '#fff;',
            'text-align': 'center',
            padding: '1.5rem'
        }
    }),
    new ColumnsBlock( [
        'Приложение на чистом JavaScript без использования библиотек',
        'В веб-приложении использовались SOLID и ООП',
        'JavaScript - это просто, и интересно'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),
    new TextBlock( 'Это веб-приложение я создал за 2 дня. Использовал я чистый JavaScript, где применил SOLID, а так же ООП. С помощью Parcel я сделал проект удобным, а так же написал читаемый и красивый код.', {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })
];