import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Settings,
  Shield,
  Database,
  Users,
  RefreshCw,
  FileText,
} from "lucide-react";

export default function SGBDPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950 dark:to-amber-900 py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-orange-600 rounded-full">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground text-balance">
                Sistema de Gestión de Base de Datos
              </h1>
              <p className="text-muted-foreground mt-2">
                Software para crear y manipular bases de datos
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
              <CardTitle>¿Qué es un SGBD?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground leading-relaxed text-lg">
                Un <strong>Sistema de Gestión de Base de Datos (SGBD)</strong>{" "}
                es un software que permite crear, mantener y manipular bases de
                datos, proporcionando una interfaz entre los usuarios y los
                datos almacenados.
              </p>
              <p className="text-muted-foreground">
                El SGBD actúa como intermediario entre las aplicaciones y los
                datos físicos, ofreciendo servicios de almacenamiento,
                recuperación, seguridad y administración de datos.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Funciones Principales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FileText className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-600">
                        Definición de Datos (DDL)
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Permite crear, modificar y eliminar estructuras de datos
                        como tablas, índices y vistas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Database className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-600">
                        Manipulación de Datos (DML)
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Facilita la inserción, actualización, eliminación y
                        consulta de datos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-600">
                        Control de Acceso
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Gestiona permisos y autenticación para proteger la
                        información sensible
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <RefreshCw className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-orange-600">
                        Gestión de Transacciones
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Asegura la consistencia y atomicidad de las operaciones
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-600">
                        Acceso Concurrente
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Permite que múltiples usuarios accedan simultáneamente
                        sin conflictos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900 rounded flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-indigo-600 text-xs font-bold">
                        R
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-indigo-600">
                        Recuperación ante Fallos
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Proporciona mecanismos de backup y restauración de datos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tipos de SGBD</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                      Relacionales (RDBMS)
                    </h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                      Basados en el modelo relacional con tablas y SQL
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">MySQL</Badge>
                      <Badge variant="secondary">PostgreSQL</Badge>
                      <Badge variant="secondary">Oracle</Badge>
                      <Badge variant="secondary">SQL Server</Badge>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                      NoSQL
                    </h4>
                    <p className="text-sm text-green-600 dark:text-green-400 mb-3">
                      Diseñados para datos no estructurados y escalabilidad
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">MongoDB</Badge>
                      <Badge variant="secondary">Cassandra</Badge>
                      <Badge variant="secondary">Redis</Badge>
                      <Badge variant="secondary">Neo4j</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">
                      En Memoria
                    </h4>
                    <p className="text-sm text-purple-600 dark:text-purple-400 mb-3">
                      Almacenan datos en RAM para acceso ultra-rápido
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Redis</Badge>
                      <Badge variant="secondary">Memcached</Badge>
                      <Badge variant="secondary">SAP HANA</Badge>
                    </div>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                    <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">
                      Distribuidos
                    </h4>
                    <p className="text-sm text-orange-600 dark:text-orange-400 mb-3">
                      Datos distribuidos en múltiples servidores
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Apache Spark</Badge>
                      <Badge variant="secondary">CockroachDB</Badge>
                      <Badge variant="secondary">Amazon DynamoDB</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ventajas de Usar un SGBD</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-600">
                    Independencia de Datos
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Las aplicaciones no dependen de la estructura física de
                    almacenamiento
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-600">
                    Reducción de Redundancia
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Minimiza la duplicación de datos y mejora la eficiencia
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-purple-600">
                    Integridad de Datos
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Mantiene la precisión y consistencia mediante restricciones
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-orange-600">
                    Seguridad
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Controla el acceso y protege información confidencial
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-red-600">
                    Backup y Recuperación
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Facilita la creación de copias de seguridad y restauración
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-indigo-600">
                    Acceso Compartido
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Permite que múltiples usuarios trabajen con los mismos datos
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
