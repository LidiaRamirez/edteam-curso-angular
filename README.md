# Angular

## Angular CLI

Para trabajar con angular se requiere instalar angular
~~~
npm install -g @angular/cli
~~~

Abarca:
- Scaffold: Generar una estructura inicial de archivos para proyecto, configuraciones.
- Preview: Vista previa
- Local Build: Proceso para construir el JS, los scripts necesarios.
- Local Testing, Unit Test, E2E test: Pruebas para verificar código, clases, servicios
- Best Practices: Reglas, combinar las mejores practicas

## Crear aplicación / proyecto forma básica en angular
~~~
ng new nombre-proyecto
~~~

Y consultará si se desea agregar angular routing, formato de estilos (css, sass)

### Crear proyecto/aplicacion con más opciones
~~~
ng new nombre-proyecto --routing
                       --prefix letras-prefix
                       --style css
                       --skip-install
~~~ 
Opciones de personalización:
- --routing: Módulo de manejo de rutas
- --prefix: Prefijo para componentes, directivas, servicios
- --skip-install: Permite generar la estructura sin dependencias
- --style: Para definir con que vamos a trabajar css, preprocesadores ej. Sass

Al finalizar, se debe ejecutar el `npm install` para instalar las dependencias

## Para ejecutar proyecto
~~~
ng serve
ng serve --port numeroPuerto
~~~

El puerto por defecto es 4200

## Para ejecutar los test
~~~
ng test
~~~

test end to end

~~~
ng e2e
~~~

## Para verificar si se esta utilizando buenas practicas
~~~
ng lint
~~~

## Generación de código con angular CLI

~~~
ng generate <contenido> [opciones]
~~~

### Clases
~~~
ng generate class <nombre> [opciones]
Ej: ng generate class curso
~~~

Lo que genera dos archivos *nombre.ts* (lógica) y *nombre.spect.ts*

### Interfaces
~~~
ng generate interface <nombre> [opciones]
Ej: ng generate interface escuela
~~~
Lo que genera un archivo *nombre.ts*

### Enumerados
~~~
ng generate enum <nombre> [opciones]
Ej: ng generate enum dia
~~~
Lo que genera un archivo *nombre.enum.ts*

### Componentes
~~~
ng generate component <nombre> [opciones]
Ej: ng generate component escuela-digital
~~~
Lo que genera archivos *nombre.component.html*, *nombre.component.css*, *nombre.component.ts* y *nombre.component.spect.ts*

### Módulos
~~~
ng generate component <nombre> [opciones]
Ej: ng generate component escuela-digital
~~~

Lo que genera un archivo *nombre.module.ts*

### Servicios
~~~
ng generate service <nombre> [opciones]
Ej: ng generate service escuela-digital
~~~

### Directivas
~~~
ng generate directive <nombre> [opciones]
Ej: ng generate directive escuela-digital
~~~

### Pipes
~~~
ng generate pipe <nombre> [opciones]
Ej: ng generate pipe filtro
~~~

## Desplegando localmente el build
Es decir lo que el usuario va a ver

~~~
ng build
~~~

### Generación del Build de producción
Archivos más optimos
~~~
ng build --prod
~~~
y si quieremos corroborar con algun servidor 

~~~
npm install -g http-server
http-server dist/nombre-proyecto
~~~

## Componentes en angular

Se basa en archivos de template y component que se enlazan con property binding o se comunican con event binding.
Los componentes se conforman de plantilla (template, HTML), estilos, clases (propiedades, métodos), metadatos (decorador, función, propiedades)

## Creación de componentes

### Forma manual

- Crear archivo con extensión .ts
- Usar un sufijo por convención `.component.ts`
- Definir una clase TypeScript
- Decorar la clase con @Component (metadatos)
- Importar de @angular/core
- Usar opcioees de configuración (decorador)

~~~
import { Component } from '@angular/core';

// Decorador + metadatos
@Component({
  selector: 'nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css']
})

export class NombreComponent {
  // Propiedades, métodos, consumo de servicios
}
~~~

Angular tiene paquetes que tienen clases, modulos de donde importar, lo más utilizados son:
- @angular/core
- @angular/common/http
- @angular/animate
- @angular/router

Otros: [https://angular.io/api?type=package](https://angular.io/api?type=package)

### Forma con comandos

~~~
ng generate component <nombre> [opciones]
~~~

Genera 04 archivos html, typescript, estilos y spec.ts

## Interpolación

Se puede asignar un valor de la clase a la plantilla a través de un template expression (expresión de plantilla) {{ }}. Ej:

~~~
<p> {{ title }} </p>
<img src="{{imageURL}}">
~~~

## Binding
### Property Binding
Las propiedades pueden ser definidas desde la clase y se identifica con los [ ]. Ej:

~~~
<img [src]="imageURL">
<button [disabled] = "deshabilitado">Boton deshabilitado</button>
~~~

### Event Binding
Permite comunicar cambios desde la plantilla a la clase con ( ), el evento objetivo va con () y lo que sigue es método de clase.

~~~
<button (click)="onSave()"> Save </button>
~~~

### Atribute, Class and Style Binding
Podemos lograr dinamismo con el binding en atributo, en clase y en estilo

~~~
<button [attr.aria-label]="help"> ayuda </button>
<div [class.special]="esEspecial"> especial </div>
<button [style.color]="esEspecial ? 'red' : 'green'"> boton </button>
~~~

## Pipes

- Toma un dato como entrada y lo transforma
- Se establece un "formato" para la salida
- Soporta parámetros

Ej:

~~~
<p> {{ fecha | date | lowercase }} </p>
~~~

## Instalar boostrap y font-awesome
~~~
npm install bootstrap font-awesome --save
~~~
y en el archivo styles.css se debe agregar `@import "~bootstrap/dist/css/bootstrap.min.css` y `@import "~font-awesome/css/font-awesome.min.css`

## Directivas

### Directivas Personalizada
Elemento HTML personalizado
Ej:
~~~
selector: 'ed-root'
Uso:
<ed-root></ed-root>
~~~

### Directivas Estructurales

Manipulan la estructura del DOM, como agregar, eliminar, actualizar elementos. las más conocidas son **ngIf* y **ngFor*

#### Directiva ngIf
~~~
<div *ngIf="expresion-booleana" > algo </div>
~~~

#### Directiva ngIf
~~~
<li *ngFor="let item of objeto" > item.id </li>
~~~

#### Directiva ngSwitch
Ej:
~~~
<div [ngSwitch]=dia>
  <p *ngSwitchCase="'lunes'">Iniciando la semana</p>
  <p *ngSwitchCase="'viernes'">LLega el fin de semana</p>
  <p *ngSwitchDefault>Un día radiante</p>
</div>
~~~

## Propiedad @input

Permite pasar propiedades de un componente padre a componente hijo. Ej:

~~~
<parent-component>
  <child-component [prop]="value"></child-component>
</parent-component>
~~~

## Propiedad @output y EventEmiter

Permite pasar propiedades de un componente hijo a componente padre. El EventEmiter debe ser importado de '@angular/core' Ej:

~~~
<parent-component>
  <child-component (event)="method()"></child-component>
</parent-component>
~~~

## @ViewChild

Acceder a elementos html desde componentes, aunque no es una buena practica. Para ello se debe agregar al elemento una variable referencia de plantilla (#)

~~~
<input #filtro type="text" />
~~~
~~~
@ViewChild('filtro', {static: false})
filtro: ElementRef;

ngAfterViewInit() {
  this.filtro.nativeElement.value = 'Angular';
}
~~~

## Módulos

- Configura el inyector y el compilador para organizar contenido relacionado.
- Es una clase TypeScript marcada con @NgModule
- Consolidan componentes, directivas y pipes en bloques de funcionalidad
- Se suelen enfocar en: Features de la aplicación, un dominio de la lógica de   negocio, colección común o utilitarios

~~~
@NgModules({ // decorador
  declarations: [
    // declaración de componentes, directivas y pipes que forman parte del módulo
  ],
  imports: [
    // Otros módulos que vayan a necesitar los componentes del módulo actual
  ],
  providers: [// provee servicios que los componentes vayan a usar]
})
~~~

## Inyección de Dependencias

- Permite el paso de objetos como dependecias
- Es un patrón de diseño Orientado a Objetos 
- Los objetos se pueden pasar a componentes
- Pueden estar disponibles en toda la aplicación
- El patrón permite la creación de instancias

## Servicios
- Servicio es una categoría amplia que abarca cualquier valor, función o característica para la aplicación
- Típicamente es un clase con un propósito bien definido
- Debe ser específico, que permite resolver el problema lo más eficiente y hacerlo bien y que sea lo más pequeño posible.
