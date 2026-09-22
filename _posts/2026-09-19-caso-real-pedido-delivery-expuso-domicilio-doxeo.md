---
title: "Caso real: cómo un pedido a domicilio expuso la dirección de un cliente, y cómo evitar el doxeo"
titulo_corto: "Caso real: un pedido de gas, dos desconocidos y el nombre correcto en la conserjería"
date: 2026-09-19 10:00:00 -0300
autor: equipo
categoria: alertas
destacado: false
lectura: 7
resumen: "Dos desconocidos llegaron a un edificio sabiendo el nombre y el departamento de un residente que no estaba. Reconstruimos el incidente, identificamos la plataforma de origen y la falla que lo permitió. Lecciones para personas, edificios y empresas de reparto."
description: "Análisis de un caso real: datos de un pedido de delivery terminaron en manos de desconocidos que intentaron entrar a un departamento. Modus operandi, causa raíz y cómo evitar el doxeo al pedir a domicilio."
linkedin: ""   # ← pega aquí el enlace a la publicación de LinkedIn
wa_msg: "Hola IKUBERT, leí el caso del pedido a domicilio y quiero revisar los protocolos de seguridad de mi edificio o empresa."
keywords: [doxeo, delivery, datos personales, seguridad residencial, conserjería, ingeniería social, Ley 21.719, IKUBERT]
---

Cuando pedimos algo a domicilio entregamos, casi sin pensarlo, tres datos que juntos valen mucho: **nombre completo, dirección exacta y número de departamento**. En IKUBERT analizamos un caso real que muestra cómo esa información puede terminar en las manos equivocadas, y qué controles faltaron para que ocurriera.

Por respeto a los involucrados, el caso se presenta sin nombres de personas, empresas ni ubicaciones.

## Resumen del incidente

| Aspecto | Detalle |
|---|---|
| **Tipo** | Exposición de datos personales con intento de acceso físico a domicilio |
| **Vector** | Datos de despacho de un pedido con entrega inmediata (cilindro de gas) |
| **Técnica** | Pretexto con datos reales (nombre y departamento), historias cambiantes y una supuesta ubicación compartida en tiempo real |
| **Impacto** | Sin ingreso ni daños: conserjería y el comité del edificio detuvieron el intento |
| **Causa raíz** | El proveedor no identificaba a quienes participaban en la entrega (nombre, RUT ni patente) |

## Cronología

1. **El pedido.** El residente solicita un cilindro de gas y entrega sus datos habituales de despacho: nombre completo, dirección y número de departamento.
2. **Días después, un domingo.** Con el residente fuera de casa, dos desconocidos recorren edificios de la cuadra. La numeración del edificio es poco visible y se confunde con la del vecino, así que primero lo intentan en el edificio equivocado.
3. **El intento.** En el edificio correcto, entran y se dirigen directo al ascensor, sin anunciarse.
4. **La contención.** El conserje los intercepta porque no los reconoce. Los sujetos dicen **el nombre completo del residente y su número de departamento**, y justifican la visita con un supuesto "regalo o paquete".
5. **La insistencia.** Al no poder pasar, cambian la historia varias veces: primero aseguran que el residente los espera en la sala común del edificio y luego, que está en el hall. En ese momento, un miembro del comité de administración del edificio interviene y desmiente la versión: el residente no está ahí.
6. **El último pretexto.** Mientras el conserje llama al departamento para aclarar la situación, los sujetos afirman que el residente **les compartió su ubicación en tiempo real** y muestran, en un chat de WhatsApp, un punto en una cafetería cercana al edificio, para hacer creer que venía en camino. Esa ubicación correspondía, en realidad, a una persona o dispositivo que se encontraba cerca de la cafetería.
7. **La huida.** Sin forma de sostener la historia, se retiran rápidamente. Simulan dirigirse al metro y finalmente abordan un bus del transporte público.

<div class="callout">
<p><strong>El dato clave:</strong> conocer el nombre y el departamento exacto les dio credibilidad frente al conserje. Es la misma lógica de la ingeniería social digital, aplicada a la puerta de tu casa.</p>
<p><strong>La señal más preocupante:</strong> cambiaron de pretexto tres veces sin titubear y hasta tenían preparada una supuesta ubicación compartida. Eso no es improvisación: indica <strong>un guion preparado de antemano</strong> para convencer a quien controla el acceso.</p>
</div>

## La investigación

El residente había hecho varios pedidos en distintas plataformas durante esos meses, así que el primer paso fue **acotar el origen de la filtración**:

- Se cruzaron las fechas y los datos entregados en cada pedido con lo que los sujetos sabían y con la forma en que se equivocaron de edificio.
- Se revisaron las **grabaciones de las cámaras** del edificio y del edificio vecino o conjunto, y se compararon con la información de las entregas recientes, para reconocer a las personas.
- También se intentó identificar a la **persona o dispositivo que estaba cerca de la cafetería**, ya que se trataba de un chat de WhatsApp con ubicación compartida en tiempo real. No fue posible: una de las cámaras tenía un **punto muerto** en parte del recorrido, y en los alrededores del edificio **no había cámaras** que permitieran seguir su trayecto.
- Con eso se **reconstruyó el modus operandi** y se identificó la plataforma de la que provenían los datos.

## Causa raíz: la falla no fue del cliente

El hallazgo más importante estaba del lado del proveedor. En los pedidos de **entrega inmediata**, la empresa **no registraba la patente del vehículo ni el nombre o RUT de las personas** que participaban en el reparto.

Sin ese registro, a estos individuos se les facilita intentar vulnerar a las personas. Además, nada impide que el conductor lleve un acompañante externo que no figura en ningún sistema y cuyo único rol es **recolectar datos de clientes**: quién vive dónde, en qué departamento y en qué horarios.

Como no hubo ingreso forzado ni daños, el hecho no pasó a mayores en lo legal; es decir, no constituye delito. Pero dejó en evidencia una falla de seguridad seria, que afecta a cualquier cliente de ese servicio.

> **Importante:** la gran mayoría de los repartidores trabaja de forma honesta. El problema no son las personas en general, sino los procesos que no permiten saber **quién** tuvo acceso a **qué** datos.

## Recomendaciones

### Si pides a domicilio

- **Usa iniciales o un alias** en las aplicaciones de delivery y compras (comida, gas, marketplaces), siempre que el servicio lo permita. Para recibir un pedido no hace falta tu nombre completo.
- **Entrega lo mínimo indispensable.** Solo los datos necesarios para que el producto llegue. No dejes guardados teléfonos secundarios ni referencias innecesarias. Evita frases como "vivo sola" o "no hay nadie después de las 18:00".
- **Cuida el RUT.** Algunas empresas lo exigen para la entrega. Debería quedar entre la empresa y tú, no en manos del repartidor. Si puedes elegir, prefiere servicios que no lo muestren en la orden de despacho.
- **Cuida tu ubicación y tus rutinas.** Revisa con quién compartes tu ubicación en tiempo real y evita publicar tus rutinas (lugares, horarios, trayectos). Tu rutina también es un dato personal.

### Si administras un edificio o condominio

- **Registra a toda persona externa en una bitácora de ingreso:** nombre, RUT, patente, foto (captura de cámara) y hora de entrada y salida. Incluye a repartidores, técnicos y servicios básicos, y también a familiares o conocidos que no viven ahí.
- **Nadie sube sin ser anunciado.** El residente debe confirmar cada visita o entrega.
- **Verifica solo con el residente, por un canal registrado.** Una pantalla con una "ubicación compartida", un chat o una foto que muestra el visitante **no es una verificación**: se falsifica en segundos. La confirmación debe venir del residente, llamando al número que la administración tiene registrado.
- **Desconfía de las historias que cambian.** Si el visitante modifica su versión ("me espera en la sala", "está en el hall", "viene en camino"), es una señal de ingeniería social: se niega el acceso y se registra el hecho.
- **Anuncia sin revelar datos.** Al llamar al departamento, el conserje no debería decir nombres en voz alta frente al visitante ("Tiene una entrega en recepción" en lugar de "Viene alguien para Juan Pérez del 1204").
- **Cámaras sin puntos ciegos.** Que las cámaras cubran el acceso, el hall y los ascensores **sin puntos muertos** (revisa la cobertura real, no solo la cantidad de cámaras), y que las grabaciones se conserven el tiempo suficiente para revisarlas. Si en los alrededores no hay cámaras, coordina con los edificios vecinos o con la municipalidad.

### Si tu empresa hace entregas o maneja datos de clientes

- **Identifica a todos los que participan en la entrega:** conductor, acompañantes, vehículo y patente, también en los pedidos de entrega inmediata.
- **Minimiza lo que ve el repartidor:** que vea iniciales y la dirección, no el nombre completo ni el RUT. Con la [Ley N° 21.719](https://www.bcn.cl/leychile/navegar?idLey=21719) de protección de datos personales, la minimización y la trazabilidad dejan de ser una buena práctica y pasan a ser una obligación.
- **Deja registro de accesos:** quién consultó qué datos y cuándo. Sin ese registro, una filtración como esta es imposible de investigar.

## Si te pasa algo similar

1. Pide a la conserjería que **registre el hecho** (hora, descripción, lo que dijeron) y que **resguarde las grabaciones**.
2. **Haz la denuncia** en Carabineros o la PDI, aunque no haya delito consumado. Deja constancia y ayuda a detectar patrones.
3. **Avisa a la plataforma** desde la que sospechas que salieron tus datos.
4. **Revisa y reduce los datos** que tienes guardados en tus aplicaciones de compra y delivery.

**El eslabón más débil suele ser la información que entregamos sin pensar. Evitemos el doxeo y cuidemos nuestro hogar.**

*El doxeo es la exposición o el uso de información privada o de identificación de una persona sin su consentimiento, ya sea por una filtración o por un descuido.*

Si quieres revisar los protocolos de acceso de tu edificio, o cómo tu empresa maneja los datos de sus clientes, [conversemos](/#contacto).
