---
title: "Las 3 vulnerabilidades que más se repiten en una evaluación de infraestructura"
seo_title: "Las 3 vulnerabilidades más comunes en infraestructura"
titulo_corto: "3 vulnerabilidades que se repiten en casi toda infraestructura"
date: 2026-04-14 10:00:00 -0400
autor: equipo
categoria: hacking-etico
lectura: 6
resumen: "Credenciales por defecto, servicios expuestos a Internet sin necesidad y respaldos sin cifrar ni probar. No requieren ataques sofisticados, y por eso son tan peligrosas. Por qué aparecen y cómo cerrarlas."
description: "Las 3 vulnerabilidades más comunes en evaluaciones de infraestructura: credenciales por defecto, servicios expuestos innecesariamente y respaldos sin cifrar. Cómo detectarlas y remediarlas."
linkedin: ""
wa_msg: "Hola IKUBERT, leí el artículo de las 3 vulnerabilidades comunes y quiero evaluar la infraestructura de mi empresa."
keywords: [vulnerabilidades comunes, hacking ético, credenciales por defecto, RDP expuesto, respaldos, ransomware, pentest, IKUBERT]
---

Cuando se habla de ciberataques, la imagen típica es la de un atacante sofisticado explotando una falla desconocida. En la práctica, muchos incidentes empiezan por algo mucho más simple: **una puerta que quedó abierta**.

En las evaluaciones de infraestructura hay tres hallazgos que se repiten con mucha frecuencia, en empresas de distintos tamaños y rubros. Ninguno requiere habilidades avanzadas para ser explotado, y justamente por eso son tan peligrosos.

## 1. Credenciales por defecto o débiles

**Qué es:** equipos que siguen con el usuario y la contraseña de fábrica (`admin/admin`), o con claves fáciles de adivinar. Aparece en routers, switches, impresoras, cámaras IP, sistemas de control de acceso y paneles de administración.

**Por qué ocurre:** el equipo se instala con prisa "para que funcione" y nadie vuelve a cambiar la clave. Las credenciales de fábrica de la mayoría de los fabricantes están publicadas en Internet.

**Cómo se cierra:**
- Inventariar **todos** los dispositivos conectados, no solo computadores y servidores.
- Cambiar las credenciales de fábrica como paso obligatorio de cualquier instalación.
- Usar un gestor de contraseñas corporativo y activar la verificación en dos pasos donde se pueda.

## 2. Servicios expuestos a Internet sin necesidad

**Qué es:** escritorio remoto (RDP), paneles de administración, bases de datos o cámaras accesibles directamente desde Internet, sin VPN ni restricción de acceso.

**Por qué ocurre:** se abrió "temporalmente" para dar soporte o trabajar desde casa, y nunca se cerró. O un proveedor lo configuró así y nadie lo revisó.

**Por qué importa:** existen buscadores que indexan continuamente los servicios expuestos en Internet. Un servicio abierto no pasa desapercibido: recibe intentos automáticos de acceso a diario.

**Cómo se cierra:**
- Revisar qué se ve de la empresa **desde afuera** (puertos, servicios y versiones publicadas).
- Cerrar todo lo que no necesita estar publicado y dejar el acceso remoto detrás de una VPN con verificación en dos pasos.
- Repetir la revisión periódicamente: la superficie expuesta cambia cada vez que se instala algo nuevo.

## 3. Respaldos sin cifrar, sin aislar o sin probar

**Qué es:** copias de seguridad guardadas en la misma red que los sistemas que protegen, sin cifrado, o que nunca se han restaurado para comprobar que funcionan.

**Por qué importa:** en un ataque de *ransomware*, lo primero que se busca y se cifra son los respaldos accesibles desde la red. Un respaldo que se puede borrar desde el servidor comprometido no es un respaldo. Y uno sin cifrar es, además, una copia completa de la información de la empresa esperando a ser robada.

**Cómo se cierra:**
- Aplicar la regla **3-2-1**: tres copias, en dos medios distintos y una fuera de línea o fuera del sitio.
- Cifrar los respaldos y restringir quién puede acceder a ellos o borrarlos.
- **Probar la restauración** periódicamente. Un respaldo que no se ha probado es una suposición.

## El denominador común

Ninguna de estas tres fallas se resuelve comprando una herramienta más. Se resuelven con **inventario, configuración y disciplina**. Por eso una evaluación con revisión manual, y no solo un escaneo automático, marca la diferencia: permite confirmar qué es explotable en la práctica y ordenar la corrección por impacto real.

En el framework [IKU-Risk™](/servicios/diagnostico-digital) revisamos estos y otros vectores sobre la infraestructura real de la empresa, de forma coordinada y sin interrumpir la operación. Si quieres saber qué puertas tiene abiertas tu empresa, [conversemos](/#contacto).
