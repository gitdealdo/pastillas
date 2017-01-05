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

function cargar_datos(){
  localStorage.setItem('vers', JSON.stringify(vers));
  console.log("Datos cargados");
}

var versiculo;
function buscar(arg) {
  // console.log(arg);
  var vers = JSON.parse(localStorage.getItem("vers"));
  for (var i = 0; i < vers.length; i++) {
    if (vers[i].id===arg) {
      versiculo = vers[i];
    }
  }
  var html = '';
  html += '<h1 class="titulo">'+versiculo.titulo+'</h1>';
  html += '<p class="vers">"'+versiculo.contenido+'"</p>';
  html += '<h2 class="titulo">'+versiculo.versiculo+'</h2>';
  $("#principal").html(html);
}
// function leer_archivo() {
// 	var vers = JSON.parse(localStorage.getItem("vers"));
// 	for (var i = 0; i < vers.length; i++) {
		
// 		console.log('<li><a onclick="buscar('+vers[i].id+')" href="#vers" data-transition="turn">'+vers[i].titulo+'</a></li>');
// 	}
// }

function guardar() {
  // console.log(lecc);
  for (var i = 0; i < lecc.preguntas.length; i++) {
    // console.log($("#textinput-"+i).val());
    lecc.preguntas[i].rpta = $("#textinput-"+i).val();
  }
  for (var i = 0; i < lecc.compromisos.length; i++) {
    // if ($('#checkbox-'+i+'').is(':checked')) {};
    lecc.compromisos[i].acepta = $('#checkbox-'+i).is(':checked');
  }
  var lafe = JSON.parse(localStorage.getItem("lafe"));
  for (var i = 0; i < lafe.length; i++) {
    if (lafe[i].id==lecc.id) {
      lafe[i]=lecc;
    }
  }
  localStorage.setItem('lafe', JSON.stringify(lafe));
}

function limpiar() {
    localStorage.clear();
}
