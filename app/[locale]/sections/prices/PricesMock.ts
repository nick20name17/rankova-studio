import Vokal from '@/app/img/vokal.svg';
import Guitar from '@/app/img/guitar.svg';
import Piano from '@/app/img/piano.svg';
import Sax from '@/app/img/sax.svg';
import Sopilka from '@/app/img/sopilka.svg';
import Kids from '@/app/img/kids.svg';
import Group from '@/app/img/group.svg';
import Additional from '@/app/img/additional.svg';

interface IItem {
  item: string;
  time?: number;
  price: number;
}

interface ISection {
  title?: string;
  list: boolean;
  gap?: boolean;
  time?: number;
  price?: number;
  caption?: string;
  items?: IItem[];
}

export interface ICard {
  title: string;
  icon: string;
  sections: ISection[];
}

export type TCards = ICard[];
export const prices: TCards = [
  {
    title: 'Вокал',
    icon: Vokal.src,
    sections: [
      {
        title: 'Топ-викладачі:',
        list: true,
        items: [
          {
            item: 'Разове заняття',
            time: 50,
            price: 700,
          },
        ],
      },
      {
        title: 'Абонементи:',
        list: false,
        items: [
          {
            item: '4 заняття',
            price: 2700,
          },
          {
            item: '8 занять',
            price: 5300,
          },
          {
            item: '12 занять',
            price: 7800,
          },
        ],
      },
      {
        title: 'Викладачі:',
        list: true,
        gap: true,
        items: [
          {
            item: 'Разове заняття',
            time: 50,
            price: 450,
          },
          {
            item: 'Пробне заняття',
            time: 30,
            price: 250,
          },
        ],
      },
      {
        title: 'Абонементи:',
        list: false,
        items: [
          {
            item: '4 заняття',
            price: 1700,
          },
          {
            item: '8 занять',
            price: 3200,
          },
          {
            item: '12 занять',
            price: 4700,
          },
        ],
      },
    ],
  },
  {
    title: 'Гітара/бас',
    icon: Guitar.src,
    sections: [
      {
        list: true,
        items: [
          {
            item: 'Разове заняття',
            time: 50,
            price: 450,
          },
          {
            item: 'Пробне заняття',
            time: 30,
            price: 250,
          },
        ],
      },
      {
        title: 'Абонементи:',
        list: false,
        items: [
          {
            item: '4 заняття',
            price: 1700,
          },
          {
            item: '8 занять',
            price: 3200,
          },
          {
            item: '12 занять',
            price: 4700,
          },
        ],
      },
      {
        title: 'DUO ( для двох )',
        list: true,
        gap: true,
        items: [
          {
            item: 'Разове заняття',
            time: 50,
            price: 700,
          },
        ],
      },
      {
        title: 'Абонементи:',
        list: false,
        items: [
          {
            item: '4 заняття',
            price: 2600,
          },
          {
            item: '8 занять',
            price: 5000,
          },
          {
            item: '12 занять',
            price: 7400,
          },
        ],
      },
    ],
  },
  {
    title: 'Фортепіано',
    icon: Piano.src,
    sections: [
      {
        list: true,
        items: [
          {
            item: 'Разове заняття',
            time: 50,
            price: 450,
          },
          {
            item: 'Пробне заняття',
            time: 30,
            price: 250,
          },
        ],
      },
      {
        title: 'Абонементи:',
        list: false,
        items: [
          {
            item: '4 заняття',
            price: 1700,
          },
          {
            item: '8 занять',
            price: 3200,
          },
          {
            item: '12 занять',
            price: 4700,
          },
        ],
      },
      {
        title: 'DUO ( для двох )',
        list: true,
        gap: true,
        items: [
          {
            item: 'Разове заняття',
            time: 50,
            price: 700,
          },
        ],
      },
      {
        title: 'Абонементи:',
        list: false,
        items: [
          {
            item: '4 заняття',
            price: 2600,
          },
          {
            item: '8 занять',
            price: 5000,
          },
          {
            item: '12 занять',
            price: 7400,
          },
        ],
      },
    ],
  },
  {
    title: 'Саксофон',
    icon: Sax.src,
    sections: [
      {
        list: true,
        items: [
          {
            item: 'Разове заняття',
            time: 50,
            price: 450,
          },
          {
            item: 'Пробне заняття',
            time: 30,
            price: 250,
          },
        ],
      },
      {
        title: 'Абонементи:',
        list: false,
        items: [
          {
            item: '4 заняття',
            price: 1700,
          },
          {
            item: '8 занять',
            price: 3200,
          },
          {
            item: '12 занять',
            price: 4700,
          },
        ],
      },
      {
        title: 'DUO ( для двох )',
        list: true,
        gap: true,
        items: [
          {
            item: 'Разове заняття',
            time: 50,
            price: 700,
          },
        ],
      },
      {
        title: 'Абонементи:',
        list: false,
        items: [
          {
            item: '4 заняття',
            price: 2600,
          },
          {
            item: '8 занять',
            price: 5000,
          },
          {
            item: '12 занять',
            price: 7400,
          },
        ],
      },
    ],
  },
  {
    title: 'Сопілка',
    icon: Sopilka.src,
    sections: [
      {
        list: true,
        items: [
          {
            item: 'Разове заняття',
            time: 50,
            price: 450,
          },
          {
            item: 'Пробне заняття',
            time: 30,
            price: 250,
          },
        ],
      },
      {
        title: 'Абонементи:',
        list: false,
        items: [
          {
            item: '4 заняття',
            price: 1700,
          },
          {
            item: '8 занять',
            price: 3200,
          },
          {
            item: '12 занять',
            price: 4700,
          },
        ],
      },
      {
        title: 'DUO ( для двох )',
        list: true,
        gap: true,
        items: [
          {
            item: 'Разове заняття',
            time: 50,
            price: 700,
          },
        ],
      },
      {
        title: 'Абонементи:',
        list: false,
        items: [
          {
            item: '4 заняття',
            price: 2600,
          },
          {
            item: '8 занять',
            price: 5000,
          },
          {
            item: '12 занять',
            price: 7400,
          },
        ],
      },
    ],
  },
  {
    title: 'Дитячі',
    icon: Kids.src,
    sections: [
      {
        title: 'Індивідуальні:',
        caption: 'вокал/фортепіано ( діти 3-7 років)',
        list: true,
        items: [
          {
            item: 'Разове заняття',
            time: 30,
            price: 250,
          },
        ],
      },
      {
        title: 'Абонементи:',
        list: false,
        items: [
          {
            item: '4 заняття',
            price: 950,
          },
          {
            item: '8 занять',
            price: 1800,
          },
          {
            item: '12 занять',
            price: 2600,
          },
        ],
      },
      {
        title: 'Групові музичні зайняття',
        caption: '( 1-2 роки, 3-4 роки, 5-6 років)',
        list: true,
        gap: true,
        items: [
          {
            item: 'Разове заняття',
            time: 30,
            price: 250,
          },
        ],
      },
      {
        title: 'Абонементи:',
        list: false,
        items: [
          {
            item: '4 заняття',
            price: 900,
          },
          {
            item: '8 занять',
            price: 1600,
          },
        ],
      },
    ],
  },
  {
    title: 'Групові',
    icon: Group.src,
    sections: [
      {
        title: 'Хобі-спів UA',
        list: false,
        time: 60,
        price: 200,
      },
      {
        title: 'Етно-спів',
        list: false,
        gap: true,
        time: 60,
        price: 200,
      },
    ],
  },
  {
    title: 'Додатково',
    icon: Additional.src,
    sections: [
      {
        title: 'Оренда кімнати для самостійних занять',
        list: false,
        time: 60,
        price: 250, 
      },
      {
        title: 'Запис пісні',
        list: false,
        gap: true,
      },
      {
        title: 'Відеозапис',
        list: false,
        caption: '(індивідуально під запит ) ',
      },
    ],
  },
];
