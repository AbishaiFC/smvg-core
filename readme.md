# SMVG - System Core

![GitHub Tag](https://img.shields.io/github/v/tag/AbishaiFC/smvg-core?style=for-the-badge&label=version&color=green)

## ¿Qué es SMVG?

**SMVG** (Sistema de Modelado de Vida Gamificado) es un core experimental que transforma el uso del tiempo en evidencia cuantificable de identidad conductual.

Permite registrar ejecuciones (Execution), acumularlas y derivar métricas que reflejan consistencia y frecuencia conductual.

## Problema que resuelve

Actualmente no existe un modelo simple que permita representar identidad funcional basada en ejecución real y medible en el tiempo.
SMVG propone un núcleo mínimo para estructurar esa representación sin introducir juicio ni sistemas de recompensa artificiales.

## Modelo Conceptual

**Execution** → Evento mínimo conductual medible  
**Registro** → Persistencia temporal  
**Acumulación** → Agregación por unidad temporal  
**Métrica** → Indicador derivado  
**Identidad** → Patrón emergente de frecuencias

## Estado del Proyecto

🟢 v1.2.1 – Core encapsulado + CLI + Storage desacoplado
⚠️ Experimental – Arquitectura en evolución

## Evolución del Sistema

```mermaid
graph TD
    A[v1.0.0 - Registro en memoria] --> B
    B[v1.1.0 - Persistencia de datos] --> C
    C[v1.2.0 - Core encapsulado + CLI + Storage desacoplado]
```

### Características

- Registro de Execution
- Timestamp automático
- Acumulación en memoria
- Metrica de frecuencia diaria

## Principios de Diseño

- Determinismo sobre gamificación superficial
- Persistencia antes que visualización
- Arquitectura evolutiva incremental
- Separación clara entre lógica e interfaz

## Arquitectura Interna (v1.2.0)

SMVG se divide en tres capas:

- **Core** → Lógica de registro, acumulación y métricas
- **Storage** → Persistencia de datos
- **CLI** → Interfaz de interacción por consola

Esto permite desacoplar la lógica del sistema de su forma de uso.

## Arquitectura

```text
[CLI Input]
      ↓
[System Core] <--> [Storage]
  ├── registerExecution()
  ├── accumulate()
  └── frequencyMetric()
      ↓
[Output]
```

## Métrica implementada

- Frecuencia acumulativa pr unidad temporal (día)

## Próxima Iteración

- Encapsulamiento del core
- Parametrización de unidad temporal

## Filosofía

SMVG no mide tareas. Mide consistencia.
Y la consistencia construye identidad.

## Instalación

1. Clonar el repositorio

```bash
git clone https://github.com/AbishaiFC/smvg-core.git
cd smvg-core
```

## Uso (CLI)

Ejecutar:

```bash
smvg
```
