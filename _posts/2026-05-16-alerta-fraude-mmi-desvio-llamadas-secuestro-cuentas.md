---
title: "Alerta de seguridad: el fraude de red (MMI) que secuestra tus cuentas en segundos"
seo_title: "Fraude MMI: el desvío de llamadas que secuestra cuentas"
titulo_corto: "Alerta: el fraude MMI que desvía tus llamadas y secuestra tu WhatsApp"
date: 2026-05-16 10:00:00 -0400
autor: equipo
categoria: alertas
lectura: 4
resumen: "Un atacante te llama, te pide marcar un código como *21* o *61* y desvía tus llamadas para robar los códigos de verificación de WhatsApp y del banco. Cómo funciona y cómo limpiarlo con ##002#."
description: "Fraude MMI/USSD en Chile: cómo los códigos *21*, *61* y *67* desvían tus llamadas para secuestrar WhatsApp y cuentas bancarias, y cómo anularlo con ##002#. Alerta de IKUBERT."
linkedin: ""   # ← pega aquí el enlace a la publicación de LinkedIn
wa_msg: "Hola IKUBERT, leí la alerta sobre el fraude MMI y quiero proteger a mi equipo."
keywords: [fraude MMI, códigos USSD, desvío de llamadas, "##002#", secuestro de WhatsApp, ingeniería social, IKUBERT]
---

En IKUBERT hemos detectado un aumento crítico en una técnica de ingeniería social extremadamente efectiva y peligrosa: la **manipulación de comandos de red (códigos MMI / USSD)**.

A diferencia del clásico enlace de phishing que llega por correo, este ataque ocurre en tiempo real y por teléfono. Es, hoy por hoy, el paso previo más utilizado para el secuestro de cuentas de alta sensibilidad, incluyendo WhatsApp y validaciones de transacciones bancarias.

## ¿Cómo sucede el engaño?

La mecánica es rápida y juega con el sentido de urgencia de la víctima:

1. **El contacto:** un atacante se comunica contigo mediante una llamada regular. Finge ser un ejecutivo de tu banco, soporte técnico de tu compañía telefónica o incluso alguien del Ministerio de Salud.
2. **La trampa:** para "validar tu identidad" o "cancelar un fraude", te pide que abras tu aplicación de llamadas (como si fueras a marcar un número telefónico cualquiera) y que ingreses un código técnico. Típicamente usan secuencias como `*21*`, `*61*` o `*67*`, seguidas de un número desconocido y la tecla `#`.
3. **El robo:** al pulsar la tecla «Llamar», no estás validando nada. Estás programando a tu compañía telefónica para que desvíe tus llamadas hacia el atacante. A partir de ese segundo, el ciberdelincuente puede solicitar códigos de recuperación por llamada de voz de tu WhatsApp o de tus bancos, validarlos él mismo y suplantar tu identidad por completo.

## La solución inmediata: el código de emergencia

Si sospechas que tú o alguien de tu equipo cayó en esta trampa, o simplemente quieres asegurarte de que tu línea está limpia, debes anular los desvíos activados en la red.

<div class="callout">
<p><strong>1.</strong> Abre la aplicación de Teléfono (el teclado de marcación).<br>
<strong>2.</strong> Digita el código maestro: <code>##002#</code><br>
<strong>3.</strong> Pulsa Llamar.</p>
</div>

Este comando es universal. Se comunica directo con la antena de tu operador y elimina de inmediato los desvíos incondicionales, por línea ocupada, sin respuesta o sin señal, restaurando la configuración de fábrica de tu plan.

## Auditoría MMI: revisa el estado de tu línea

Si quieres hacer una revisión más profunda del estado de tu terminal GSM, marca los siguientes códigos en tu teclado y pulsa «Llamar» (la respuesta puede variar ligeramente según tu operador y el modelo del equipo):

| Código | Función |
|---|---|
| `##002#` | **Limpieza total.** Borra todos los desvíos (el más crítico y recomendado). |
| `*#21#` | **Verificar general.** Muestra si tienes un desvío incondicional activo en este momento. |
| `*#61#` | **No responde.** Verifica el estado del desvío cuando no contestas el teléfono. |
| `*#62#` | **Sin señal / apagado.** Revisa a dónde se desvían tus llamadas si el móvil no tiene cobertura. |
| `*#67#` | **Ocupado.** Verifica el desvío cuando rechazas una llamada o estás hablando. |

## La recomendación de IKUBERT

La tecnología de las telecomunicaciones tiene comandos heredados que los atacantes están usando como armas. La regla de oro es simple: **nunca ingreses códigos solicitados por terceros en tu teclado telefónico.**

La ciberseguridad personal de tus colaboradores y directivos es la primera capa de defensa de tu infraestructura corporativa y patrimonial. Un teléfono intervenido es la puerta de entrada a tu organización.

**Comparte esta alerta con tu equipo y familia.**
