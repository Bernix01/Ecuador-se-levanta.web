'use strict';
(function() {

  class MainDonarComponent {
    constructor($scope) {
      this.message = 'Hello';
      $scope.data = [{
        img: "assets/images/icn11.png",
        info: "Trabajar en el levantamieto de viviendas e infraestrura en las zonas afectadas, en coordinación conjunta con ONG’s autorizadas y gobierno local. Se desarrollarán estructuras de diferentes usos como polideportivos y centros culturales comunitarios, guarderías, escuelas, centros de emprendimiento y capacitación para el área social. En el ámbito de vivienda 'Desafío Ecuador' está interviniendo principalmente en las áreas donde los damnificados son dueños de su lote, información que corroboramos con los gobiernos locales.Estamos trabajando en 5 modelos sostenibles elaborados con materiales de la zona y fáciles de construir, para realizarlo entre diez personas y levantarla con el apoyo de toda la comunidad. Trabajamos con un grupo de arquitectos especialistas en auto sustentabilidad y compromiso con el medio ambiente.Las viviendas serán activadores económicos, ya que muchos damnificados tenían sus edificaciones organizadas en uso mixto con negocios en la planta baja y vivienda en el segundo. "
      }, {
        img: "assets/images/icn22.png",
        info: "En el área de Salud “Desafío Ecuador”, nos preocupamos por darle una salud digna a quienes no pueden accederla. Nuestro objetivo principal es crear y gestionar programas que resuelvan los problemas en las zonas contaminadas principalmente en agua, desagües e higiene, en los sectores más vulnerables, con un enfoque en gestión colaborativa entre el sector privado y el sector público.\n Generamos un puente donde se encuentran las mejores experiencias y prácticas de ambos sectores para ser aplicadas rápidamente, mejorando así la calidad en la atención. Nuestra meta es crear un modelo de colaboración autónomo en el mundo de la salud, para que médicos especialistas del sector privado se involucren con las necesidades del sector público, capacitando, aprendiendo y trabajando mancomunadamente.\n Construiremos un centro de salud integral con brigadas de médicos que serán desplegadas por todo el cantón y de esta manera mantener un contacto directo con los afectados y poder evaluar su progreso médico.\nPara el área de salud se edificarán centros de salud integral móviles como fijos."
      }, {
        img: "assets/images/icn33.png",
        info: "Impulsar iniciativas productivas que brinden oportunidades, generando plazas de trabajo y a la vez capacitar a la población con una visión a futuro.\nEn \"Desafío Ecuador\"queremos enseñar a pescar y no regalar los pescados, sin embargo, ante casos de emergencias y catástrofes, creemos que es necesario entregar la caña para que las personas se pongan de pie, recuperen su sustento diario, y se hagan responsables por sus sueños.\n Apoyamos a emprendedores que no han tenido oportunidades para que puedan desarrollar su negocio; los encaminamos y ofrecemos varias herramientas como capacitación, consultoría, apoyo, entre otras; con el objetivo de que esa falta de oportunidades no sea determinante en su éxito."
      }, {
        img: "assets/images/icn44.png",
        info: "Promover y difundir la cultura y el deporte, fomentando la rehabilitación de espacios de recreación e impulsando la creación de nuevos, conjuntamente con ONGS y gobierno local.\n\n Nos enfocamos en las etapas tempranas de aprendizaje de los niños, donde sus capacidades cognitivas están mucho más receptivas, y así poder desarrollar todas sus habilidades para crear un futuro mejor con más oportunidades alejándolos de peligros como drogas y delincuencia.\n\n Ofrecer oportunidades a los niños y jóvenes en riesgo, a su más temprana edad, para que exploten sus potenciales. Nos basamos en pilares que sustentan nuestro modelo replicable: \n\t•	Crearemos programas sociales y culturales como, circo, cine y teatro itinerante por las áreas afectadas.\n\t •	Organización de torneos deportivos en varias disciplinas, con asociaciones deportivas de la zona, que estén dispuestas a brindar apoyo. Nuestro sueño es empoderar a la juventud, para que sobrepasen todas las barreras que se puedan presentar en el camino, y ayudarlos a transformar su vida en un futuro mejor."
      }, {
        img: "assets/images/icn55.png",
        info: "Apoyar inciativas que se centren en la formación de albergues que proporcionen ambientes adecuados para el cuidado de animales, generando un bienestar integral.\n\n Canalizar toda la ayuda posible para que cada brigadas tengan un veterinario y se logre implementar programas de comida, esterilización de mascotas, adopción y evaluó integral de animales de granja."
      }]
    }
  }

  angular.module('ecuadorAyudaWebApp')
    .component('donar', {
      templateUrl: 'app/main.donar/main.donar.html',
      controller: MainDonarComponent
    });

})();
