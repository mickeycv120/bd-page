import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Eye, Brain, HardDrive, ArrowDown } from "lucide-react";

export default function ArquitecturaPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-950 dark:to-rose-900 py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-red-600 rounded-full">
              <Building className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground text-balance">
                Arquitectura del SGBD
              </h1>
              <p className="text-muted-foreground mt-2">
                Estructura y organización de componentes
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
              <CardTitle>¿Qué es la Arquitectura del SGBD?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground leading-relaxed text-lg">
                La <strong>arquitectura de un SGBD</strong> define cómo se
                organizan y estructuran los componentes del sistema para
                proporcionar eficiencia, seguridad y abstracción de datos.
              </p>
              <p className="text-muted-foreground">
                La arquitectura más ampliamente aceptada es el modelo de tres
                niveles propuesto por ANSI/SPARC, que separa la vista del
                usuario de la implementación física.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Arquitectura de Tres Niveles (ANSI/SPARC)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Nivel Externo */}
                <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
                        Nivel Externo
                      </h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400">
                        Vista del Usuario Individual
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Características:</h4>
                      <ul className="text-sm space-y-1">
                        <li>
                          • Vista personalizada para cada usuario o aplicación
                        </li>
                        <li>• Oculta la complejidad del sistema</li>
                        <li>• Proporciona seguridad y privacidad</li>
                        <li>• Múltiples vistas externas posibles</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Ejemplos:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Vista de estudiantes (solo sus datos)</li>
                        <li>
                          • Vista de profesores (sus cursos y estudiantes)
                        </li>
                        <li>• Vista de administrador (datos completos)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowDown className="w-6 h-6 text-muted-foreground" />
                </div>

                {/* Nivel Conceptual */}
                <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="w-8 h-8 text-green-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-green-700 dark:text-green-300">
                        Nivel Conceptual
                      </h3>
                      <p className="text-sm text-green-600 dark:text-green-400">
                        Vista Lógica Global
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Características:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Representa toda la base de datos</li>
                        <li>• Define entidades, atributos y relaciones</li>
                        <li>• Independiente de la implementación física</li>
                        <li>• Una sola vista conceptual por BD</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Incluye:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Esquema de la base de datos</li>
                        <li>• Restricciones de integridad</li>
                        <li>• Reglas de negocio</li>
                        <li>• Relaciones entre entidades</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowDown className="w-6 h-6 text-muted-foreground" />
                </div>

                {/* Nivel Interno */}
                <div className="bg-red-50 dark:bg-red-950 p-6 rounded-lg border border-red-200 dark:border-red-800">
                  <div className="flex items-center gap-3 mb-4">
                    <HardDrive className="w-8 h-8 text-red-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-red-700 dark:text-red-300">
                        Nivel Interno
                      </h3>
                      <p className="text-sm text-red-600 dark:text-red-400">
                        Vista Física de Almacenamiento
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Características:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Describe cómo se almacenan los datos</li>
                        <li>• Gestiona estructuras de acceso</li>
                        <li>• Optimiza el rendimiento</li>
                        <li>• Maneja el almacenamiento físico</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Incluye:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Índices y estructuras de datos</li>
                        <li>• Organización de archivos</li>
                        <li>• Métodos de acceso</li>
                        <li>• Compresión y encriptación</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Independencia de Datos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">
                    Independencia Lógica
                  </h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                    Los cambios en el nivel conceptual no afectan las vistas
                    externas
                  </p>
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded text-xs">
                    <strong>Ejemplo:</strong> Agregar una nueva tabla no
                    requiere modificar las aplicaciones existentes
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">
                    Independencia Física
                  </h4>
                  <p className="text-sm text-green-600 dark:text-green-400 mb-3">
                    Los cambios en el almacenamiento físico no afectan el nivel
                    conceptual
                  </p>
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded text-xs">
                    <strong>Ejemplo:</strong> Cambiar de disco duro a SSD no
                    requiere modificar la lógica de la aplicación
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Componentes del SGBD</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-600">
                    Motor de Base de Datos
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Núcleo que procesa consultas y gestiona transacciones
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-600">
                    Gestor de Almacenamiento
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Controla el acceso a datos en el almacenamiento físico
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-purple-600">
                    Procesador de Consultas
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Interpreta y optimiza las consultas SQL
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-orange-600">
                    Gestor de Transacciones
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Asegura propiedades ACID de las transacciones
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-red-600">
                    Gestor de Memoria
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Optimiza el uso de memoria y cache
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-indigo-600">
                    Sistema de Recuperación
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Maneja backup, restore y recuperación ante fallos
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
