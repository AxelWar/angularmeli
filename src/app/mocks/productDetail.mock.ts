import { ProductDetailItem } from '../interfaces/product-detail.iterface';

export const PRODUCT_DETAIL_MOCK: ProductDetailItem = {
  author: {
    name: 'MT-ELECTRO',
    lastname: ''
  },
  categories: [
    {
      id: 'MLA1051',
      name: 'Celulares y Teléfonos'
    },
    {
      id: 'MLA1055',
      name: 'Celulares y Smartphones'
    }
  ],
  item: {
    id: 'MLA915289303',
    seller_id: '26941396',
    title: 'iPhone 11 64 Gb Negro',
    price: {
      currency: '$',
      amount: '134.999',
      decimals: '00'
    },
    thumbnail: 'http://http2.mlstatic.com/D_916062-MLA43654417337_102020-O.jpg',
    condition: 'new',
    free_shipping: true,
    sold_quantity: 2,
    description:
      'Fotos amplias y perfectas de día y de noche\nSu cámara ultra gran angular abarca un campo visual hasta cuatro veces más grande para que nada ni nadie se quede afuera de la toma. Y con el modo Noche la poca luz no es problema. Ya sea de fiesta con amigos o en un cumpleaños familiar, guardá los mejores momentos sin necesidad de usar flash. ¡La función se activa automáticamente!\n\nRetratos más reales\nEl modo HDR Inteligente de última generación reconoce a las personas de la imagen, mejora la iluminación del rostro y da un aspecto natural a los tonos de piel. Pero eso no es todo: brinda más detalle a las sombras y conserva la calidad de imagen del fondo. ¿Qué más se puede pedir de una foto?\n\nGrabá y editá videos a nivel profesional\nTodas las cámaras del iPhone 11 graban videos en 4K con una nitidez increíble. Su cámara ultra gran angular permite capturar paisajes imperdibles y escenas en movimiento, como a un amigo andando en bicicleta en el parque. ¿Un recital de música? Hacé zoom en la imagen y el sonido también se acercará.\n\nUn iPhone que te ofrece todo\nLa pantalla LCD Liquid Retina hace que todo se vea más real y su tecnología True Tone ajusta el balance de blancos a la luz del entorno de manera automática. El sistema de autentificación Face ID reconoce tu rostro para brindarte mayor seguridad que la tecnología Touch ID. Como si esto fuera poco, con su chip A13 Bionic y la batería de carga rápida, navegá a máxima velocidad y sin interrupciones.',
    permalink:
      'https://articulo.mercadolibre.com.ar/MLA-915289303-iphone-11-64-gb-negro-_JM'
  }
};
