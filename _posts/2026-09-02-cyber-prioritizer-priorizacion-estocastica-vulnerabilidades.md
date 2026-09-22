---
title: "Cyber-Prioritizer: priorización estocástica de vulnerabilidades con Cadenas de Markov (open source)"
titulo_corto: "Cyber-Prioritizer: qué parchear primero cuando el backlog de críticas supera tu capacidad"
date: 2026-09-02 10:00:00 -0400
autor: lukas
categoria: iku-risk
destacado: true
lectura: 7
resumen: "Con el mismo presupuesto de 10 parches, el modelo estocástico redujo 30,4 % del riesgo dinámico frente a 25,7 % del enfoque CVSS. Cómo funciona el motor RBVM open source creado por Lukas Ahubert Lennon en IKUBERT."
description: "Cyber-Prioritizer, motor RBVM open source de Lukas Ahubert Lennon (IKUBERT): cruza EPSS, CISA KEV y NVD con Cadenas de Markov para decidir qué parchear primero. 30,4 % vs 25,7 % de reducción de riesgo."
image: /assets/img/foro/cyber-prioritizer-og.jpg
image_alt: "Test A/B de Cyber-Prioritizer: priorización CVSS estática vs. modelo estocástico de Markov"
schema_tipo: TechArticle
repositorio: "https://github.com/DBlueKing/Cyber-Prioritizer"
software_nombre: "Cyber-Prioritizer"
software_descripcion: "Motor de priorización de vulnerabilidades basado en riesgo que combina Cadenas de Markov con inteligencia de amenazas (NVD, EPSS, CISA KEV) y mapeo MITRE ATT&CK para optimizar la gestión de parches bajo restricciones de presupuesto."
linkedin: ""   # ← pega aquí el enlace a tu publicación de LinkedIn
wa_msg: "Hola IKUBERT, leí el artículo de Cyber-Prioritizer y quiero conversar sobre priorización de vulnerabilidades."
keywords: [Cyber-Prioritizer, Lukas Ahubert Lennon, IKUBERT, RBVM, EPSS, CISA KEV, Cadenas de Markov, gestión de vulnerabilidades, CVSS]
---

Según el [Data Breach Investigations Report (DBIR) 2026 de Verizon](https://www.verizon.com/business/resources/reports/dbir/), la **explotación de vulnerabilidades ya es el vector de acceso inicial número uno: 31 % de las brechas**, superando por primera vez al abuso de credenciales. Al mismo tiempo, la **mediana de tiempo de parcheo subió de 32 a 43 días**, y solo el 26 % de las vulnerabilidades del catálogo KEV de CISA quedó completamente corregido.

Las empresas no sufren brechas por falta de herramientas, sino por **parchear a ciegas**.

## El problema: CVSS mide severidad, no probabilidad

El puntaje CVSS mide la severidad técnica intrínseca de una vulnerabilidad, no la probabilidad de que sea explotada en tu entorno. Si tienes 100 alertas "Críticas" pero tu equipo solo puede aplicar 10 parches esta semana, priorizar solo por CVSS es jugar a la ruleta rusa.

EPSS ayuda, pero entrega una probabilidad estática a 30 días: no modela la dinámica temporal ni los flujos de detección y mitigación bajo una capacidad operativa limitada.

## Qué es Cyber-Prioritizer

Para resolver ese cuello de botella creé **[Cyber-Prioritizer](https://github.com/DBlueKing/Cyber-Prioritizer)**: un motor matemático de gestión de vulnerabilidades basada en riesgo (RBVM) que traduce telemetría aislada en decisiones ejecutivas.

No busca reemplazar a NVD, CVSS o EPSS, sino **orquestarlos**: toma esas métricas técnicas aisladas y las convierte en un orden de parcheo que reduce horas-hombre y evita parchear vulnerabilidades sin probabilidad real de explotación.

- **Integra inteligencia real:** cruza tu inventario con NVD, EPSS (FIRST) y el catálogo de explotación confirmada de CISA (KEV), con mapeo táctico MITRE ATT&CK.
- **Modela el tiempo:** usa Cadenas de Markov para proyectar la probabilidad de compromiso a 30 días.
- **Optimiza el presupuesto:** selecciona el subconjunto de K activos que maximiza la reducción esperada del riesgo dinámico.

## La metodología en 4 pasos

1. **Probabilidad real.** Convierte el puntaje EPSS en una tasa diaria de explotación: `p_e = 1 − (1 − EPSS)^(1/30)`.
2. **Cadena de Markov por activo.** Cada activo se modela con una matriz de transición de 4 estados — *Seguro, Detectado, Explotado, Mitigado* — para proyectar su probabilidad de compromiso en un horizonte de 30 días.
3. **Riesgo dinámico.** Pondera esa probabilidad con la criticidad de negocio del activo y su exposición de red (Internet, DMZ o red interna).
4. **Optimización bajo restricción.** Asigna los K parches disponibles donde más riesgo residual eliminan.

<figure>
  <img src="/assets/img/foro/cyber-prioritizer-evolucion-riesgo-markov-30-dias.webp" alt="Evolución temporal del riesgo en cinco activos según la cadena de Markov, horizonte de 30 días" width="480" height="256" loading="lazy">
  <figcaption>Evolución temporal de P(activo explotado) en cinco activos con CVE en el catálogo KEV. El descenso de algunas curvas refleja el flujo de mitigación de la capacidad operativa, no una caída natural de la amenaza.</figcaption>
</figure>

## Resultados: mismo presupuesto, más riesgo eliminado

En un entorno simulado de 68 activos heterogéneos y una restricción de **10 parches**, ambas estrategias coinciden en 5 activos y difieren en los otros 5. Ahí está toda la diferencia.

<div class="stat-row">
  <div class="stat-tile"><span class="stat-n">30,4 %</span><span class="stat-l">reducción de riesgo dinámico con el modelo estocástico (Markov)</span></div>
  <div class="stat-tile muted"><span class="stat-n">25,7 %</span><span class="stat-l">reducción con el enfoque estático tradicional (CVSS)</span></div>
  <div class="stat-tile"><span class="stat-n">≈18 %</span><span class="stat-l">más eficiencia relativa por parche, con presupuesto idéntico</span></div>
</div>

El criterio CVSS gastó **3 parches en la misma vulnerabilidad (Log4Shell)** en tres instancias distintas y 2 en activos de criticidad Media, solo porque marcaban 10.0. El modelo estocástico redirigió esos 5 parches a vectores de acceso real: **Citrix NetScaler, Fortinet FortiOS, dos Exchange y Apache HTTP**, todos en KEV, de criticidad Alta y expuestos a Internet.

El patrón se repitió en un segundo inventario independiente de otro sector: **60,3 % vs 47,6 %**.

<figure>
  <img src="/assets/img/foro/cyber-prioritizer-test-ab-cvss-vs-markov.webp" alt="Dashboard del test A/B de Cyber-Prioritizer: curva de mitigación acumulada, riesgo residual tras 10 parches, riesgo por pilar NIST CSF y mapa de riesgo de activos" width="480" height="357" loading="lazy">
  <figcaption>Test A/B con K = 10 parches: curva de mitigación acumulada, riesgo residual (17,668 → 13,125 con CVSS; → 12,299 con Markov), riesgo residual por pilar NIST CSF y mapa de riesgo de activos.</figcaption>
</figure>

## Lo que el modelo no resuelve por sí solo

> Sin una línea base de inventario homogénea, cualquier plataforma de RBVM, por costosa que sea, produce ruido.

Por eso el repositorio incluye una plantilla de inventario (`/data/Formulario_Inventario.xlsx`) con parámetros prellenados que mantienen la homogeneidad de la carga y evitan fallas del algoritmo.

Cyber-Prioritizer es un **MVP académico y de código abierto**, diseñado para demostrar la viabilidad metodológica del modelado estocástico. La arquitectura de microservicios y colas asíncronas para escala masiva está en desarrollo para la versión enterprise de IKUBERT.

## Cómo probarlo

1. Entra al [repositorio en GitHub](https://github.com/DBlueKing/Cyber-Prioritizer) y abre `notebooks/Cyber_Prioritizer.ipynb` en Google Colab o Jupyter.
2. Ejecuta las celdas con la matriz simulada, o carga el inventario de tu organización usando la plantilla de `/data`.
3. El notebook genera el test A/B y exporta reportes ejecutivos (Markdown, HTML, DOCX) y grillas operativas en XLSX para SecOps.

## Licenciamiento dual

El código se publica bajo **GNU AGPLv3** para uso académico, personal y proyectos abiertos. Las organizaciones que necesiten integrarlo en plataformas propietarias o servicios gestionados, o que por compliance no puedan cumplir los términos de la AGPLv3, pueden solicitar una **licencia comercial** a través de IKUBERT ([{{ site.contacto.email }}](mailto:{{ site.contacto.email }})).

## La pregunta para tu equipo

¿Cómo priorizan hoy cuando el backlog de críticas supera la capacidad del equipo? ¿CVSS, EPSS o criterio del analista?

Si quieres aplicar este enfoque a tu propio inventario, es exactamente lo que hacemos en la fase de priorización del framework [IKU-Risk™](/servicios/diagnostico-digital).

---

**Fuentes:** [Verizon DBIR 2026](https://www.verizon.com/business/resources/reports/dbir/) · [SecurityWeek: Vulnerability exploitation overtakes credential theft](https://www.securityweek.com/verizon-dbir-2026-vulnerability-exploitation-overtakes-credential-theft-as-top-breach-vector/) · [Tenable: Key findings from the Verizon DBIR 2026](https://connect.tenable.com/discussions/vulnerability-watch/key-findings-from-the-verizon-dbir-2026-slower-vulnerability-remediation-meets-f/111972) · [Industrial Cyber: KEV remediation](https://industrialcyber.co/reports/verizon-dbir-finds-vulnerability-exploitation-overtakes-stolen-credentials-as-top-breach-entry-point-for-critical-infrastructure/)
