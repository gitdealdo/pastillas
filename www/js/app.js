var vers = [
	{id:1,'versiculo':'Salmo 46:1-3','titulo':'Amparo y fortaleza','contenido':'Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en todos los problemas. Por eso no tenemos ningún temor. Aunque la tierra se estremezca, y los montes se hundan en el fondo del mar; aunque sus aguas bramen y se agiten, y los montes tiemblen ante su furia.'},
	{id:2,'versiculo':'Isaías 41:10','titulo':'No temas ...','contenido':'No tengas miedo, que yo estoy contigo; no te desanimes, que yo soy tu Dios. Yo soy quien te da fuerzas, y siempre te ayudaré; siempre te sostendré con mi justiciera mano derecha.'},
	{id:3,'versiculo':'Juan 14:1','titulo':'No se turbe su corazón','contenido':'No se turbe su corazón. Ustedes creen en Dios; crean también en mí.'},
	{id:4,'versiculo':'1 Pedro 5:6-7','titulo':'Él tiene cuidado de ustedes','contenido':'Por lo tanto, muestren humildad bajo la poderosa mano de Dios, para que él los exalte a su debido tiempo. Descarguen en él todas sus angustias, porque él tiene cuidado de ustedes.'},
	{id:5,'versiculo':'Jeremías 17:7-8','titulo':'Bendito el que confía en mí','contenido':'Pero bendito el hombre que confía en mí, que soy el Señor, y que en mí pone su confianza. Ese hombre es como un árbol plantado junto a los arroyos; echa sus raíces junto a las corrientes, y no se da cuenta de cuándo llega el calor; sus hojas siempre están verdes, y en los años de sequía no se marchita ni deja de dar fruto.'},
	{id:6,'versiculo':'Mateo 11:28-30','titulo':'Yo los haré descansar','contenido':'Vengan a mí todos ustedes, los agotados de tanto trabajar, que yo los haré descansar. Lleven mi yugo sobre ustedes, y aprendan de mí, que soy manso y humilde de corazón, y hallarán descanso para su alma; porque mi yugo es fácil, y mi carga es liviana'},
	{id:7,'versiculo':'Josue 1:9','titulo':'Estaré contigo ...','contenido':'Escucha lo que te mando: Esfuérzate y sé valiente. No temas ni desmayes, que yo soy el Señor tu Dios, y estaré contigo por dondequiera que vayas.'},
	{id:8,'versiculo':'Romanos 8:28','titulo':'Todas las cosas...','contenido':'Ahora bien, sabemos que Dios dispone todas las cosas para el bien de los que lo aman, es decir, de los que él ha llamado de acuerdo a su propósito.'},
	{id:9,'versiculo':'Santiago 1:2-4','titulo':'Produce paciencia...','contenido':'Hermanos míos, considérense muy dichosos cuando estén pasando por diversas pruebas.  Bien saben que, cuando su fe es puesta a prueba, produce paciencia. Pero procuren que la paciencia complete su obra, para que sean perfectos y cabales, sin que les falte nada. Si alguno de ustedes requiere de sabiduría, pídasela a Dios, y él se la dará, pues Dios se la da a todos en abundancia y sin hacer ningún reproche.'},
	{id:10,'versiculo':'Filipenses 4:13','titulo':'Me fortalece!','contenido':'¡todo lo puedo en Cristo que me fortalece!'},
	{id:11,'versiculo':'2 Corintios 4:7-8','titulo':'No desamparados','contenido':'Pero tenemos este tesoro en vasos de barro, para que se vea que la excelencia del poder es de Dios, y no de nosotros, que estamos atribulados en todo, pero no angustiados; en apuros, pero no desesperados; perseguidos, pero no desamparados; derribados, pero no destruidos;'},
	{id:12,'versiculo':'Efesios 6:10','titulo':'Manténganse firmes','contenido':'Por lo demás, hermanos míos, manténganse firmes en el Señor y en el poder de su fuerza.'},
	{id:13,'versiculo':'Nahúm 1:7','titulo':'Es un refugio','contenido':'El Señor es bueno; es un refugio en el día de la angustia. El Señor conoce a los que en él confían,'},
	{id:14,'versiculo':'2 Corintios 5:17','titulo':'Ya es una nueva creación','contenido':'De modo que si alguno está en Cristo, ya es una nueva creación; atrás ha quedado lo viejo: ¡ahora ya todo es nuevo!'},
	{id:15,'versiculo':'Mateo 7:7','titulo':'Llamen y se les abrirá','contenido':'Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá. '},
	{id:16,'versiculo':'Jeremías 33:3','titulo':'Clama a mí','contenido':'Clama a mí, y yo te responderé; te daré a conocer cosas grandes y maravillosas que tú no conoces.'},
	{id:17,'versiculo':'Proverbios 16:3','titulo':'Clamaré a Dios','contenido':'En la tarde, en la mañana, al mediodía, clamaré a Dios, y él oirá mi voz;'},
	{id:18,'versiculo':'Romanos 12:21','titulo':'Vence el mal con el bien.','contenido':'No te dejes vencer por el mal; al contrario, vence el mal con el bien.'},
	{id:19,'versiculo':'1 Juan 5:4','titulo':'Vence al mundo','contenido':'No te dejes vencer por el mal; al contrario, vence el mal con el bien.'},
];
  
var razones = [
  {id:1,titulo:"Después de recibir una visión, Elena de White dijo a Jaime White",contenido:"Tengo un mensaje para ti. Has de comenzar a imprimir un pequeño periódico y enviarlo a la gente. Será pequeño al comienzo; pero a medida que la gente lea, te enviará medios con los cuales imprimir; y será un éxito desde el mismo principio. Se me ha mostrado que desde este pequeño comienzo saldrán rayos de luz que han de circuir el globo",basado:"Life Sketches , pág. 125. Año 1915"},
  {id:2,titulo:"Importancia del Colportage",contenido:"La obra con nuestros libros debe constituir el medio de dar rápidamente la sagrada luz de la verdad presente al mundo.",basado:"Testimonies , tomo 9, págs. 69, 70. Año 1909"},
  {id:3,titulo:'Razones para colportar', contenido:[
    'Presentar en forma clara, sencilla y simple la base espiritual de nuestra fe.',
    'Fortalecer nuestra fe.',
    'Preparar a un Pueblo para ir al encuentro de Dios.',
    'Preparar el camino para la Segunda Venida de Jesús.',
    'Iluminar la tierra con su gloria.',
    'Proclamar el mensaje del tercer ángel.',
    'Llevar el mensaje a lugares que solo pueden ser alcanzados únicamente por nuestras publicaciones.',
  ],basado:"IDEC"},
  {id:4,titulo:"Importancia del Colportage",contenido:"Si hay una obra más importante que otra, es la de presentar al público nuestras publicaciones, induciéndolo así a escudriñar las Escrituras. La obra misionera que consiste en introducir nuestras publicaciones en el seno de las familias, conversar y orar con ellas-, es una obra buena que instruirá a los hombres y mujeres acerca de cómo realizar la labor pastoral",basado:"Testimonies , tomo 4, pág. 390. Año 1880"},
  {id:5,titulo:"Importancia del Colportage",contenido:"Es también, en gran medida, por medio de nuestras Imprentas como debe cumplirse la obra de aquel otro ángel que baja del cielo con gran potencia y alumbra la tierra con su gloria.",basado:"Joyas de los Testimonios , tomo 3, págs. 140, 142. Año 1902"},
  {id:6,titulo:"Importancia del Colportage",contenido:"La importancia de esta obra (colportaje) se equipara plenamente a la del ministerio. El predicador vivo y el mensajero silencioso se necesitan por igual para la realización de la gran tarea que afrontamos.",basado:"Review and Herald , 1-4-1880"},
];

function cargar_datos(){
  localStorage.setItem('vers', JSON.stringify(vers));
  console.log("Datos cargados");
}

var theme = '';
var versiculo;
function buscar(arg) {
  // console.log(arg);
  // vers = JSON.parse(localStorage.getItem("vers"));
  for (var i = 0; i < vers.length; i++) {
    if (vers[i].id===arg) {
      versiculo = vers[i];
    }
  }
  var html = '';
  html += '<h2 class="titulo">'+versiculo.titulo+'</h2>';
  html += '<p class="vers">"'+versiculo.contenido+'"</p>';
  html += '<h3 class="titulo">'+versiculo.versiculo+'</h3>';
  $("#principal").html(html);
  cambiar(theme);
}

function info () {
  var razon;
  var arg = Math.floor((Math.random() * razones.length) + 1);
  for (var i = 0; i < razones.length; i++) {
    if (razones[i].id===arg) {
      razon = razones[i];
    }
  }
  var html = '';
  html += '<h2 class="titulo">'+razon.titulo+'</h1>';
  if (Array.isArray(razon.contenido)) {
    html += '<ol>';
    for (var i = razon.contenido.length - 1; i >= 0; i--) {
      html += '<li>'+razon.contenido[i]+'</li>';
    }
    html += '</ol>';
  }else {
    html += '<p class="vers">"'+razon.contenido+'"</p>';
  }
  html += '<p class="caption">('+razon.basado+')</caption>';
  $("#main").html(html);
}

function refresh() {
  var vers = JSON.parse(localStorage.getItem("vers"));
  var arg = Math.floor((Math.random() * vers.length) + 1); 
  // console.log(arg);
  for (var i = 0; i < vers.length; i++) {
    if (vers[i].id===arg) {
      versiculo = vers[i];
    }
  }
  var html = '';
  html += '<h2 class="titulo">'+versiculo.titulo+'</h2>';
  html += '<p class="vers">"'+versiculo.contenido+'"</p>';
  html += '<h3 class="titulo">'+versiculo.versiculo+'</h3>';
  $("#main").html(html);
}

function limpiar() {
    localStorage.clear();
}
function cambiar(arg) {
  // var theme = $(this).text();
  theme = arg;
  $.mobile.activePage.find('.ui-btn')
                     .removeClass('ui-btn-up-a ui-btn-up-b ui-btn-up-c ui-btn-up-d ui-btn-up-e ui-btn-hover-a ui-btn-hover-b ui-btn-hover-c ui-btn-hover-d ui-btn-hover-e')
                     .addClass('ui-btn-up-' + theme)
                     .attr('data-theme', theme);
  $.mobile.activePage.find('.ui-header, .ui-footer')
                     .removeClass('ui-bar-a ui-bar-b ui-bar-c ui-bar-d ui-bar-e')
                     .addClass('ui-bar-' + theme)
                     .attr('data-theme', theme);
  $.mobile.activePage.removeClass('ui-body-a ui-body-b ui-body-c ui-body-d ui-body-e')
                     .addClass('ui-body-' + theme)
                     .attr('data-theme', theme);
  // $('a').bind('click', function (event) {
  //     event.preventDefault();
  // });
}