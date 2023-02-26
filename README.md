Jaime Martínez García¡Importante!Práctica final Angular

Buenas 202209 FSD PT HIB!

Os escribo este mensaje para detallar por escrito todos los requisitos de la entrega de la práctica final de Angular. Aunque ya os lo comenté en clase los dejo por aquí por sí queréis repasarlos.

La entrega de una práctica que supere los requisitos mínimos  es necesaria para superar el bloque de Angular. Los requisitos mínimos son todos los que se incluyen en la parte de "Proyecto" de Notion (tanto la iteración 1 como la 2) exceptuando los "Bonus" que son opcionales y contarán como extras.

La práctica es individual.

La temática de la práctica es totalmente libre, se pone un ejemplo de super-héroes pero no es necesario seguirlo. La idea es que apliquéis todos los conceptos que hemos ido aprendiendo y por lo tanto tendréis que hacer como mínimo:
	
1.- Una arquitectura de proyecto que siga las buenas prácticas explicadas en clase: pages, shared, core, etc.
	
2.- Una página "Home" con información sobre el proyecto que habéis realizado. En el proyecto especifica que tiene que haber 3 componentes hijos pero no es obligatorio. Habrá que crear componentes hijos con cabeza y cuando consideremos que puede ser útil (esto aplica para todas las páginas).
	
3.- Una página "Lista" con un listado de elementos. Esos elementos serán de esa temática que hayáis escogido.
		
3.1.- Los datos a mostrar se deben recuperar con un servicio (es recomendable tener un servicio "api" para los datos brutos y uno "transformado" que mapee con RXJS los datos de la API y deje solo lo que necesitemos.
		
3.2.- Se deberá añadir una Pipe de Angular que aplique algún tipo de transformación sobre los elementos del listado: filtrar, ordenar, etc. (Ponen el ejemplo de paginación y filtrado por nombre pero podéis implementar otros pipes más acordes a vuestra temática).
		
3.3.- El componente que muestra cada elemento deberá ser reutilizable y ir en "shared". Lo reutilizaremos en la página de "Mis creaciones".
	
4.- Una página "detalle" a la que se accederá al pulsar sobre un elemento del listado. Hay que intentar crear varios componentes hijo y mostrar información más ampliada en esta página.
	
5.- Un header y un footer. El primero con enlaces para navegar por la web (siempre con el router de Angular y utilizando lazy loading) y el segundo con enlaces a redes sociales (estos si serán href al ir a páginas web externas).
	
6.- Una vista "Crear elemento" que nos permita con un formulario reactivo crear nuevos elementos de la temática que seleccionemos. Esos elementos creados se mostrarán en otra página "Mis creaciones" que como hemos comentado reutilizará el componente del listado de elementos (Si por vuestra temática creáis elementos distintos a los mostrados en el listado no hay problema en que no cumpláis esto, pero intentad crear algún componente shared).
	
7.- Una página de "About us" con información del creador de la web y del proyecto.
	
8.- En la API habrá que combinar peticiones a dos endpoints diferentes. Para esto podemos concatenar peticiones con switchMap o hacerlas paralelas con forkJoin. (Esto de todos los requisitos es el más complejo, si alguno no lo consigue pero hace una buena práctica podréis superar el bloque).

La API que utilicéis queda totalmente a vuestra elección. Podéis crear una propia con Node, utilizar una fake API como por ejemplo "mockapi" o recurrir a JSON Server.

Los extras que se proponen son tests, cambio de idioma y web responsive pero si os apetece más hacer alguna otra funcionalidad extra distinta sentiros libres.(Ej: Login, JWT, loading, etc).

Fechas:
	
El Jueves 16 de febrero, último día de clase, enseñaréis el estado actual de vuestros proyectos y podréis pedir recomendaciones y preguntar dudas también. (No hace falta que estén terminados pero sí que será necesario que enseñéis al menos lo que hayais avanzado).
	
El martes 28 de Febrero será la fecha límite de entrega para la práctica final. No se aceptarán entregas a partir de esa fecha a menos que haya algún caso excepcional.

Si tenéis cualquier duda podéis contestar a este mensaje y os la resuelvo.

¡Mañana nos vemos! ¡Ánimo con el proyecto!

Un saludo,

Jaime
(3 Me gusta)<https://teams.microsoft.com/l/message/19:lOdzC14Fe1BN0LZ3nRGRBHZ0pXKsRc-_P2vLfL5Y6H01@thread.tacv2/1676018977563?tenantId=8aebddb6-3418-43a1-a255-b964186ecc64&amp;groupId=8b5c2f72-cd30-40e1-be84-1e0fde35c877&amp;parentMessageId=1676018977563&amp;teamName=202209 FSD PT HIB&amp;channelName=General&amp;createdTime=1676018977563&amp;allowXTenantAccess=false>