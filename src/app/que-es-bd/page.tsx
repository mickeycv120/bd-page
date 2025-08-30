import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, BookOpen, CheckCircle } from "lucide-react";

export default function QueEsBDPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-600 rounded-full">
              <Database className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground text-balance">
                ¿Qué es una Base de Datos?
              </h1>
              <p className="text-muted-foreground mt-2">
                Conceptos fundamentales y características principales
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
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                Definición
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground leading-relaxed text-lg">
                Una <strong>Base de Datos (BD)</strong> es una colección
                organizada y estructurada de datos relacionados que se almacenan
                de manera sistemática para facilitar su acceso, gestión y
                actualización.
              </p>
              <p className="text-muted-foreground">
                Las bases de datos son el corazón de la mayoría de aplicaciones
                modernas, desde sitios web simples hasta sistemas empresariales
                complejos.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Características Principales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Datos Organizados</h4>
                      <p className="text-sm text-muted-foreground">
                        Los datos se estructuran de manera lógica y coherente
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">
                        Eliminación de Redundancia
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Se evita la duplicación innecesaria de información
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Integridad de Datos</h4>
                      <p className="text-sm text-muted-foreground">
                        Se mantiene la precisión y consistencia de los datos
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Acceso Concurrente</h4>
                      <p className="text-sm text-muted-foreground">
                        Múltiples usuarios pueden acceder simultáneamente
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Seguridad</h4>
                      <p className="text-sm text-muted-foreground">
                        Control de acceso y protección de información sensible
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Recuperación</h4>
                      <p className="text-sm text-muted-foreground">
                        Capacidad de restaurar datos en caso de fallos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ejemplo Práctico</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">
                  Sistema de Biblioteca Universitaria
                </h4>
                <p className="text-blue-600 dark:text-blue-400 mb-4">
                  Una biblioteca universitaria utiliza una base de datos para
                  gestionar toda su información:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium mb-2">Datos almacenados:</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Información de libros (título, autor, ISBN)</li>
                      <li>• Datos de usuarios (estudiantes, profesores)</li>
                      <li>• Registros de préstamos y devoluciones</li>
                      <li>• Historial de multas y pagos</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Beneficios obtenidos:</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Búsqueda rápida de libros disponibles</li>
                      <li>• Control automático de fechas de devolución</li>
                      <li>• Generación de reportes estadísticos</li>
                      <li>• Gestión eficiente del inventario</li>
                    </ul>
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
