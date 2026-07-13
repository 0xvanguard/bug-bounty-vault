# Guía — Primeros $500 a $1000 USD con Bug Bounty

## Objetivo

Llegar a los primeros pagos no depende de saber "todo", sino de encontrar vulnerabilidades repetibles en programas donde el ruido sea manejable y el scope sea claro.

## Estrategia simple

1. Elegir 3 a 5 programas públicos o VDP con superficie web clara.
2. Hacer recon ligero pero constante.
3. Buscar primero bugs comunes y probables.
4. Documentar cada endpoint, parámetro y comportamiento raro.
5. Reportar rápido, claro y con PoC reproducible.

## Bugs prioritarios para empezar

- XSS reflejado / almacenado
- IDOR
- Broken access control
- Sensitive information disclosure
- Misconfiguraciones simples
- Fallos de lógica de negocio

## Meta operativa

- 20–30 horas enfocadas en un mismo tipo de bug
- 1 plantilla de recon
- 1 plantilla de reporte
- 1 stack fijo de herramientas
- 1 libreta de patrones repetibles

## Lo que no hacer

- Saltar entre 20 programas
- Probar 50 herramientas sin método
- Enamorarse del recon sin explotar
- Buscar solo RCE/SSRF al inicio
- Hacer reportes débiles o ambiguos

## Ruta sugerida

### Semana 1
- Preparar entorno
- Configurar Burp, navegador y extensiones
- Elegir programas

### Semana 2
- Recon + mapeo de superficie
- Recolectar endpoints, parámetros y funcionalidades

### Semana 3
- Testing manual de acceso, roles, IDs, flujos y validaciones

### Semana 4
- Enviar primeros reportes bien escritos
- Revisar duplicados, NA y señales del triage

## Indicadores de avance

- Primer reporte enviado
- Primer informe útil aunque sea NA
- Primer hallazgo válido
- Primer bounty pagado
- Primeros $500 acumulados
- Primeros $1000 acumulados
