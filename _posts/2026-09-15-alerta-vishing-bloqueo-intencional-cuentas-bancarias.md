---
title: "Alerta: vishing con bloqueo intencional de cuentas bancarias"
titulo_corto: "Alerta: te bloquean la cuenta del banco a propósito y luego te llaman"
date: 2026-09-15 10:00:00 -0300
autor: equipo
categoria: alertas
lectura: 3
resumen: "Los delincuentes bloquean tu cuenta bancaria a propósito con tu RUT, luego llaman haciéndose pasar por el banco y usan ese bloqueo real para ganar credibilidad y robarte el código de recuperación."
description: "Nueva modalidad de vishing en Chile: bloquean tu cuenta bancaria a propósito con tu RUT y luego llaman fingiendo ser el banco para robar tus códigos. Cómo opera y cómo protegerte."
linkedin: ""   # ← pega aquí el enlace a la publicación de LinkedIn
wa_msg: "Hola IKUBERT, leí la alerta de vishing y quiero capacitar a mi equipo."
keywords: [vishing, fraude bancario, bloqueo de cuenta, ingeniería social, token, código de verificación, IKUBERT]
---

**Ref.: Campaña de vishing y bloqueo intencional de cuentas financieras.**

Estimados colaboradores y clientes: detectamos un incremento en una sofisticada modalidad de fraude que combina la **exfiltración de datos públicos** con **ingeniería social telefónica** (*vishing*).

## ¿Cómo opera este vector de ataque?

1. **Obtención de datos:** los delincuentes consiguen información básica del usuario: RUT, nombre y teléfono.
2. **Bloqueo provocado:** ingresan a propósito contraseñas erróneas en los portales oficiales para forzar el bloqueo automático, y legítimo, de la cuenta.
3. **Suplantación telefónica:** contactan a la víctima haciéndose pasar por el área de seguridad del banco. Cuando la persona comprueba que su cuenta **sí está bloqueada**, el atacante gana total credibilidad.
4. **Extracción del token:** solicitan los códigos de recuperación (SMS o notificación push) "para restablecer la clave" y toman control de los fondos.

<div class="callout">
<p><strong>La clave del engaño:</strong> el bloqueo es real, pero lo provocó el atacante. Que tu cuenta esté bloqueada no prueba que quien te llama sea del banco.</p>
</div>

## Medidas de mitigación obligatorias

- **Ninguna institución legítima solicitará** códigos de verificación, tokens o contraseñas por llamada telefónica.
- **Si tu cuenta se bloquea repentinamente,** cuelga cualquier llamada entrante y comunícate tú mismo con los canales oficiales: el número impreso en tu tarjeta o la app oficial del banco.
- **Reporta de inmediato** cualquier actividad sospechosa a tu banco y al equipo de TI o ciberseguridad de tu empresa.

Esta técnica suele combinarse con el [fraude de desvío de llamadas (MMI)](/foro/alerta-fraude-mmi-desvio-llamadas-secuestro-cuentas/), que permite al atacante recibir tus códigos por llamada de voz.

**La seguridad digital es un compromiso de todos.**
