# **¡CONOCE TU POKEMON! 👾**

## **Índice**

* [¿Qué es Pokemon Go?]
* [Mecánica del juego]
* [Definición del proyecto]
* [Proceso de diseño]
* [Planificación de proyecto])
* [Historia de usuario]
* [-](#parte-opcional-hacker-edition)
* [Checklist](#checklist)

***

## **¿Qué es Pokemon Go?**

Pokémon GO es una aplicación gratuita para smartphones iOS (incluído Apple Watch) y Android desarrollada por *Niantic* en colaboración con *Nintendo* y *The Pokémon Company*. Esta hace uso de la realidad aumentada (por medio de la cámara del dispositivo) y la geolocalización (por medio del GPS) para que los jugadores encuentren Pokémon en el mapa del mundo real y los puedan capturar en sus dispositivos. De igual manera permite la crianza de Pokémon y combates por el control de gimnasios. El fenómeno social que ha causado esta aplicación es increíble y ha sobrepasado muchos límites que nunca creímos ver sobre la reacción de las personas ante una app o un pequeño monstruo saltando frente a nosotros… **¡En nuestro mundo!** Una dinámica poco convencional.

![GIF DE USO POKEMON GO](https://media.giphy.com/media/iNZMFznWPRiKc/giphy.gif)

## **Mecánica de Juego 👉🏿📱**

En el juego se pueden capturar Pokémon salvajes mientras el jugador se mueve por el mundo real. Para capturarlos se necesitan Poké Balls que se pueden conseguir en Poképaradas. Los Pokémon se pueden usar en gimnasios para defenderlos (si es un gimnasio de nuestro equipo), o para combatir contra los Pokémon de otros gimnasios o enfrentarse al jefe de una incursión. Todas estas actividades proporcionan puntos de experiencia de entrenador que permiten subir de nivel y desbloquear objetos más potentes (nuevos tipos de Poké Ball, etc) y aumentar los puntos de combate máximos que pueden alcanzar nuestros Pokémon. Se puede evolucionar y potenciar las capacidades de los Pokémon del jugador para poder mejorar en los combates. El juego dispone de una tienda donde comprar con monedas virtuales diferentes mejoras. Estas monedas se pueden conseguir comprándolas con dinero real o al mantener a alguno de los Pokémon del jugador en los gimnasios durante un tiempo.


## **Definición de *Conoce tu pokemon* 🎮**
**Conoce tu Pokemon** es una solución digital dirigida a los jugadores novatos de *Pokemon GO*, muy similar a un catálogo, donde hallarán a los 151 pokemon. En esta página podrán acceder facilmente a las características principales *-peso, altura, debilidades, tiempos-* de cada uno, a través de su nombre, número identificador, o simplemente buscando su tarjeta entre todas, con ayuda de nuestros últiles filtros de tipo. Esto le permitirá  al usuario agilizar la toma de decisiones y mejorar su estrategia dentro del juego.  

## **Proceso de diseño 💡**
Para el proceso de diseño, se tuvo en consideración directa las necesidades del usuario objetivo, que fue identificado previa encuesta y entrevista. Las preguntas fueron las siguientes;
* ¿Es usted usuario actualmente de la aplicación móvil pókemon go?.
* Podría definir su nivel de experiencia y conocimiento respecto a este juego como: (básico, intermedio avanzado o experto)
* ¿Qué información cree usted que le serviría para mejorar su estrategia dentro de este juego?

[Ver encuesta 📊](https://docs.google.com/forms/d/e/1FAIpQLSfrfAju7lY7yyWafQmdtuOol5PEt3oRUHefXkrTeUJ4jiYVxQ/viewform)
Y los resultados fueron los siguientes:

![Resultados](https://i.ibb.co/n8PQWJJ/encuestas.png)
Con esto, logramos concluirlo siguiente, y responder las **vitales** preguntas para el desarrollo de la plataforma:

**Nuestros usuarios objetivo serán las personas con conocimientos básicos del juego. Cuyo principal interés es poder consultar de manera ágil, eficiente  y rápida la información sobre los pokémon que podrían encontrar en el juego, siendo de estos los datos más relevantes -en orden de prioridades- las debilidades, su tipo o elemento, y el nombre. *Conoce tu Pokemon* es una aplicación sencilla, y fácil de comprender, que responde a las diferentes pantallas desde las cuales el usuario podría acceder, mostrándole información precisa y oportuna respecto a tus pokemon, que puede ser usada antes o durante una partida.**

## **Planificación de proyecto📌**
la planificación cronológica de nuestro proyecto se encuentra registrada en **Trello**, que podemos [ver aquí](https://trello.com/b/k4vnWwLU/datalover). 
###Historias de Usuario 👨🏻‍💻
#### Historia de usuario 1: Mostrar todos los pokemon.

**Como** jugador novato de pokémon go✔
**Quiero** ver todos los pokémon que existen✔
**Para** poder escoger el de mi preferencia✔

##### Criterios de aceptación 

➡La plataforma debe tener un contenedor con todos los pokemon para que el usuario pueda reconocerlos a través de su foto.
➡A través de la imagen, el usuario podrá seleccionarlo y acceder a toda la información adicional.
[Ver video (Test 1)](https://www.youtube.com/watch?v=gK8AMQBLb2A)

#### Historia de usuario 2: Ordenar los pokemon por alfabeto.

**Como** jugador novato de pokemon go✔
**Quiero** ordenar alfabeticamente los Pokemon✔
**Para** hallar rápido el pokemon que busco para usar esa información en el juego✔
[Ver Video (Test 2)](https://www.youtube.com/watch?v=ezNjLOtwv60)
#####Criterios de aceptación 
➡La plataforma debe tener un ordenador que permita ordenar los pokemon alfabéticamente.
➡El contenedor me muestra los pokemon ordenados.
➡Selecciono el pokemon que necesito y accedo a su información.

#### Historia de usuario 3: Filtro por tipo.

**Como** jugador novato de pokemon go✔
**Quiero** poder filtrar la búsqueda de mi pokemon por tipo✔
**Para** hallarlo más rapidamente y poder usar esa información en el juego✔
[Ver video (Test 3)](https://www.youtube.com/watch?v=-MzRzAsMubw)

##### Criterios de aceptación
➡La plataforma debe tener un filtro que permita separar los pokemon por su tipo.
➡El contenedor me muestra sólo los pokemon del tipo que busco.
➡Selecciono el pokemon que necesito y accedo a su información.

#### Historia de usuario 4: Filtro por huevos.

**Como** jugador novato de pokemon go✔
**Quiero** poder filtrar la búsqueda de mi pokemon por km de huevos✔
**Para** hallarlo más rapidamente y poder usar esa información en el juego✔
[Ver video (Test 4)](https://www.youtube.com/watch?v=rlZCmmG-11Q)

#####Criterios de aceptación
➡La plataforma debe tener un filtro que permita separar los pokemon por los km para obtener huevos.
➡El contenedor me muestra sólo los pokemon de los km que busco.
➡Selecciono el pokemon que necesito y accedo a su información.

#### Historia de usuario 5: Búsuqeda por nombre.

**Como** jugador novato de pokemon go✔
**Quiero** poder hallar rápidamente el pokemon que necesito por su nombre✔
**Para**  acceder a la información  y usarla en el juego✔
[Ver video (Test 5)](https://www.youtube.com/watch?v=llKaKRzIDpI) 
##### Criterios de aceptación
➡La plataforma debe tener un filtro que permita ordenar los pokemon alfabéticamente.
➡El contenedor me muestra los pokemon ordenados.
➡Selecciono el pokemon que necesito y accedo a su información.