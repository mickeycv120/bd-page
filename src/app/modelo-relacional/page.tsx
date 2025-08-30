import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, Table, Key } from "lucide-react";

export default function ModeloRelacionalPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-green-600 rounded-full">
              <Network className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground text-balance">
                Modelo Relacional
              </h1>
              <p className="text-muted-foreground mt-2">
                Organización de datos en tablas y relaciones
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
              <CardTitle>Definición y Origen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground leading-relaxed text-lg">
                El <strong>Modelo Relacional</strong> organiza los datos en
                tablas (relaciones) compuestas por filas (tuplas) y columnas
                (atributos). Fue propuesto por Edgar F. Codd en 1970.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Edgar F. Codd</strong> revolucionó el mundo de las
                  bases de datos con su artículo &quot;A Relational Model of
                  Data for Large Shared Data Banks&quot;, estableciendo las
                  bases teóricas que siguen siendo fundamentales hoy en día.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Componentes Principales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Table className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-600">
                        Tablas (Relaciones)
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Estructura bidimensional que organiza los datos en filas
                        y columnas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-green-600 text-xs font-bold">
                        R
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">
                        Filas (Tuplas)
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Cada fila representa un registro individual o instancia
                        de datos
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-purple-600 text-xs font-bold">
                        C
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-600">
                        Columnas (Atributos)
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Cada columna representa una propiedad o característica
                        específica
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Key className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-orange-600">Claves</h4>
                      <p className="text-sm text-muted-foreground">
                        Identificadores únicos que permiten referenciar
                        registros específicos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ejemplo de Tabla</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Tabla: ESTUDIANTES</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2 bg-blue-100 dark:bg-blue-900">
                          ID (PK)
                        </th>
                        <th className="text-left p-2 bg-blue-100 dark:bg-blue-900">
                          Nombre
                        </th>
                        <th className="text-left p-2 bg-blue-100 dark:bg-blue-900">
                          Apellido
                        </th>
                        <th className="text-left p-2 bg-blue-100 dark:bg-blue-900">
                          Email
                        </th>
                        <th className="text-left p-2 bg-blue-100 dark:bg-blue-900">
                          Carrera
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">001</td>
                        <td className="p-2">Juan</td>
                        <td className="p-2">Pérez</td>
                        <td className="p-2">juan.perez@uni.edu</td>
                        <td className="p-2">Ingeniería</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">002</td>
                        <td className="p-2">María</td>
                        <td className="p-2">García</td>
                        <td className="p-2">maria.garcia@uni.edu</td>
                        <td className="p-2">Medicina</td>
                      </tr>
                      <tr>
                        <td className="p-2">003</td>
                        <td className="p-2">Carlos</td>
                        <td className="p-2">López</td>
                        <td className="p-2">carlos.lopez@uni.edu</td>
                        <td className="p-2">Derecho</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  PK = Primary Key (Clave Primaria)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ventajas del Modelo Relacional</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="bg-green-50 dark:bg-green-950 p-3 rounded border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-700 dark:text-green-300">
                      Simplicidad Conceptual
                    </h4>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Fácil de entender y visualizar para usuarios y
                      desarrolladores
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300">
                      Flexibilidad en Consultas
                    </h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      Permite consultas complejas usando SQL de manera intuitiva
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-purple-50 dark:bg-purple-950 p-3 rounded border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold text-purple-700 dark:text-purple-300">
                      Integridad Referencial
                    </h4>
                    <p className="text-sm text-purple-600 dark:text-purple-400">
                      Mantiene la consistencia entre tablas relacionadas
                    </p>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-950 p-3 rounded border border-orange-200 dark:border-orange-800">
                    <h4 className="font-semibold text-orange-700 dark:text-orange-300">
                      Normalización
                    </h4>
                    <p className="text-sm text-orange-600 dark:text-orange-400">
                      Elimina redundancia y mejora la eficiencia del
                      almacenamiento
                    </p>
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
