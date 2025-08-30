import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, Box, ArrowRight, Circle } from "lucide-react";

export default function ModeloERPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950 dark:to-violet-900 py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-purple-600 rounded-full">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground text-balance">
                Modelo Entidad-Relación (E-R)
              </h1>
              <p className="text-muted-foreground mt-2">
                Diseño conceptual con entidades y relaciones
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>¿Qué es el Modelo E-R?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground leading-relaxed text-lg">
                El <strong>Modelo Entidad-Relación</strong> es una herramienta
                de diseño conceptual que representa la estructura lógica de una
                base de datos mediante entidades, atributos y relaciones.
              </p>
              <p className="text-muted-foreground">
                Desarrollado por Peter Chen en 1976, este modelo proporciona una
                representación gráfica que facilita la comprensión y el diseño
                de bases de datos complejas.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Componentes del Modelo E-R</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-16 h-12 bg-blue-100 dark:bg-blue-900 border-2 border-blue-600 rounded flex items-center justify-center">
                      <Box className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-blue-600 mb-2">
                    Entidades
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Objetos del mundo real que tienen existencia independiente
                  </p>
                  <div className="mt-3 text-xs bg-blue-50 dark:bg-blue-950 p-2 rounded">
                    Ejemplos: Persona, Producto, Orden
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-16 h-12 bg-green-100 dark:bg-green-900 border-2 border-green-600 rounded-full flex items-center justify-center">
                      <Circle className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-green-600 mb-2">
                    Atributos
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Propiedades que describen las características de las
                    entidades
                  </p>
                  <div className="mt-3 text-xs bg-green-50 dark:bg-green-950 p-2 rounded">
                    Ejemplos: nombre, edad, precio, fecha
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-16 h-12 bg-purple-100 dark:bg-purple-900 border-2 border-purple-600 transform rotate-45 flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-purple-600 transform -rotate-45" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-purple-600 mb-2">
                    Relaciones
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Asociaciones entre dos o más entidades
                  </p>
                  <div className="mt-3 text-xs bg-purple-50 dark:bg-purple-950 p-2 rounded">
                    Ejemplos: compra, trabaja, pertenece
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tipos de Atributos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-2">
                      Simples
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      No se pueden dividir en componentes más pequeños
                    </p>
                    <div className="text-xs mt-2 bg-blue-50 dark:bg-blue-950 p-2 rounded">
                      Ejemplo: edad, precio
                    </div>
                  </div>

                  <div className="border border-green-200 dark:border-green-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-600 mb-2">
                      Compuestos
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Se pueden dividir en componentes más pequeños
                    </p>
                    <div className="text-xs mt-2 bg-green-50 dark:bg-green-950 p-2 rounded">
                      Ejemplo: dirección (calle, ciudad, código postal)
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border border-purple-200 dark:border-purple-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-600 mb-2">
                      Multivaluados
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Pueden tener múltiples valores para una entidad
                    </p>
                    <div className="text-xs mt-2 bg-purple-50 dark:bg-purple-950 p-2 rounded">
                      Ejemplo: teléfonos, habilidades
                    </div>
                  </div>

                  <div className="border border-orange-200 dark:border-orange-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-600 mb-2">
                      Derivados
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Se calculan a partir de otros atributos
                    </p>
                    <div className="text-xs mt-2 bg-orange-50 dark:bg-orange-950 p-2 rounded">
                      Ejemplo: edad (derivada de fecha de nacimiento)
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cardinalidad de Relaciones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <h4 className="font-semibold mb-2">Uno a Uno (1:1)</h4>
                    <p className="text-sm text-muted-foreground">
                      Una entidad se relaciona con exactamente una entidad
                    </p>
                    <div className="text-xs mt-2 bg-background p-2 rounded">
                      Persona ↔ Pasaporte
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg text-center">
                    <h4 className="font-semibold mb-2">Uno a Muchos (1:N)</h4>
                    <p className="text-sm text-muted-foreground">
                      Una entidad se relaciona con múltiples entidades
                    </p>
                    <div className="text-xs mt-2 bg-background p-2 rounded">
                      Cliente → Órdenes
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg text-center">
                    <h4 className="font-semibold mb-2">
                      Muchos a Muchos (N:M)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Múltiples entidades se relacionan con múltiples entidades
                    </p>
                    <div className="text-xs mt-2 bg-background p-2 rounded">
                      Estudiantes ↔ Cursos
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ejemplo Práctico: Sistema Universitario</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-purple-50 dark:bg-purple-950 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                <h4 className="font-semibold mb-4 text-purple-700 dark:text-purple-300">
                  Diagrama E-R Simplificado
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-4 flex-wrap">
                    <div className="bg-blue-100 dark:bg-blue-900 border-2 border-blue-600 px-4 py-2 rounded">
                      <strong>ESTUDIANTE</strong>
                      <div className="text-xs mt-1">ID, Nombre, Email</div>
                    </div>
                    <div className="bg-purple-100 dark:bg-purple-900 border-2 border-purple-600 px-3 py-1 rounded transform rotate-45">
                      <span className="text-xs transform -rotate-45 block">
                        inscribe
                      </span>
                    </div>
                    <div className="bg-green-100 dark:bg-green-900 border-2 border-green-600 px-4 py-2 rounded">
                      <strong>CURSO</strong>
                      <div className="text-xs mt-1">
                        Código, Nombre, Créditos
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-sm text-purple-600 dark:text-purple-400">
                    Relación N:M - Un estudiante puede inscribirse en múltiples
                    cursos, y un curso puede tener múltiples estudiantes
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
