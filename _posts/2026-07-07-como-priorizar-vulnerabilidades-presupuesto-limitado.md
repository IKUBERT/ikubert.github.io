---
title: "Cómo priorizar vulnerabilidades cuando el presupuesto de remediación es limitado"
titulo_corto: "Cómo priorizar vulnerabilidades con presupuesto limitado"
date: 2026-07-07 10:00:00 -0400
autor: equipo
categoria: iku-risk
lectura: 6
resumen: "Tener 200 hallazgos no sirve si solo puedes corregir 20 este mes. Cómo combinar severidad técnica (CVSS), probabilidad real de explotación (EPSS y CISA KEV) e impacto en el negocio para decidir qué parchear primero."
description: "Método práctico para priorizar vulnerabilidades con recursos limitados: CVSS, EPSS, CISA KEV, exposición y criticidad de negocio. Cómo ordena IKUBERT los hallazgos en sus informes IKU-Risk™."
linkedin: ""
wa_msg: "Hola IKUBERT, leí el artículo sobre priorización de vulnerabilidades y quiero ordenar el backlog de mi empresa."
keywords: [priorización de vulnerabilidades, CVSS, EPSS, CISA KEV, gestión de vulnerabilidades, RBVM, IKU-Risk, IKUBERT]
---

Todo escaneo de vulnerabilidades termina igual: una lista larga, con decenas o cientos de hallazgos marcados como "Críticos" o "Altos". El problema es que el equipo de TI tiene horas contadas, ventanas de mantención limitadas y un presupuesto finito. **No se puede parchear todo a la vez**, y fingir que sí lleva a corregir lo más fácil en lugar de lo más importante.

La pregunta correcta no es "¿qué es más grave?", sino **"¿qué corrijo primero para reducir más riesgo con lo que tengo?"**.

## Por qué ordenar solo por CVSS no alcanza

El puntaje **CVSS** mide la severidad técnica de una vulnerabilidad en abstracto: qué tan grave sería si alguien la explotara. Es un buen punto de partida, pero no responde tres preguntas clave:

- **¿Se está explotando realmente?** Muchas vulnerabilidades con puntaje alto nunca llegan a ser atacadas en la práctica.
- **¿Está expuesto el activo?** Una falla crítica en un servidor aislado de la red interna no pesa lo mismo que en un equipo publicado a Internet.
- **¿Qué pasa si cae ese activo?** No es lo mismo el servidor de facturación que un computador de pruebas.

Si ordenas solo por CVSS, terminas con decenas de "10.0" empatados y sin criterio para decidir.

## Las cuatro variables que usamos

En los informes del framework [IKU-Risk™](/servicios/diagnostico-digital) combinamos cuatro dimensiones:

| Variable | Qué responde | Fuente |
|---|---|---|
| **Severidad técnica** | ¿Qué tan grave es la falla? | CVSS |
| **Probabilidad de explotación** | ¿Qué tan probable es que la ataquen en los próximos 30 días? | EPSS (FIRST) |
| **Explotación confirmada** | ¿Ya se está usando en ataques reales? | Catálogo KEV de CISA |
| **Contexto del negocio** | ¿Está expuesto? ¿Qué impacto tiene si cae? | Inventario de activos y entrevista con la empresa |

Una vulnerabilidad con CVSS medio, pero incluida en el catálogo KEV y presente en un equipo expuesto a Internet, casi siempre va antes que un "Crítico" teórico en un servidor interno sin acceso externo.

## Un método simple en 5 pasos

1. **Arma o actualiza el inventario.** Sin saber qué activos tienes, dónde están y qué hacen, cualquier priorización es una suposición.
2. **Filtra lo que ya se está explotando.** Todo lo que aparece en el catálogo KEV y afecta a activos expuestos va primero, sin discusión.
3. **Ordena el resto por probabilidad × impacto.** Usa EPSS como probabilidad y la criticidad del activo para el negocio como impacto.
4. **Agrupa por esfuerzo.** Un solo parche o cambio de configuración puede cerrar muchos hallazgos a la vez. Esos "paquetes" rinden más por hora invertida.
5. **Define la capacidad real del ciclo.** Si el equipo puede aplicar 15 correcciones este mes, el plan debe decir cuáles 15, no "todo lo crítico".

## De la teoría al modelo: Cyber-Prioritizer

Este razonamiento es la base de [Cyber-Prioritizer](/foro/cyber-prioritizer-priorizacion-estocastica-vulnerabilidades/), el motor de código abierto desarrollado en IKUBERT. Agrega un paso más: modela con **Cadenas de Markov** cómo evoluciona el riesgo de cada activo en el tiempo y elige el conjunto de parches que más riesgo elimina con el presupuesto disponible. En un inventario simulado, con el mismo presupuesto de 10 parches, redujo el riesgo dinámico en 30,4 % frente al 25,7 % del orden basado solo en CVSS.

## Lo que debe tener un buen informe de vulnerabilidades

- Un **orden de ejecución**, no solo una lista de hallazgos.
- La **razón** de cada prioridad, en lenguaje que entienda la gerencia.
- Lo que **no** se va a corregir este ciclo, con el riesgo que eso implica y quién lo acepta.
- Una **fecha de revisión**: la priorización caduca, porque la amenaza cambia cada semana.

Si tu equipo tiene más hallazgos que horas disponibles, el problema no es técnico, es de priorización. [Conversemos](/#contacto) y te ayudamos a ordenar el backlog.
