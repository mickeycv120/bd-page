import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Database,
  Network,
  Settings,
  Building,
  Layers,
  BookOpen,
  GraduationCap,
} from "lucide-react";

export default function DatabaseEducationPage() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 py-16 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-600 rounded-full">
                <Database className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6 text-balance">
              Fundamentos de Bases de Datos
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Domina los conceptos esenciales de bases de datos, desde los
              fundamentos teóricos hasta las aplicaciones prácticas en el mundo
              real
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="secondary" className="px-4 py-2">
                <BookOpen className="w-4 h-4 mr-2" />6 Conceptos Clave
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <GraduationCap className="w-4 h-4 mr-2" />
                Guía Educativa
              </Badge>
            </div>
          </div>
        </section>

        {/* Content with Tabs */}
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="que-es-bd" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
                <TabsTrigger value="que-es-bd" className="text-xs">
                  ¿Qué es BD?
                </TabsTrigger>
                <TabsTrigger value="modelo-relacional" className="text-xs">
                  M. Relacional
                </TabsTrigger>
                <TabsTrigger value="modelo-er" className="text-xs">
                  M. E-R
                </TabsTrigger>
                <TabsTrigger value="sgbd" className="text-xs">
                  SGBD
                </TabsTrigger>
                <TabsTrigger value="arquitectura" className="text-xs">
                  Arquitectura
                </TabsTrigger>
                <TabsTrigger value="aplicaciones" className="text-xs">
                  Aplicaciones
                </TabsTrigger>
              </TabsList>

              {/* Tab 1: Qué es una BD */}
              <TabsContent value="que-es-bd">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Database className="w-6 h-6 text-blue-600" />
                      <CardTitle>¿Qué es una Base de Datos?</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground leading-relaxed">
                      Una <strong>Base de Datos (BD)</strong> es una colección
                      organizada y estructurada de datos relacionados que se
                      almacenan de manera sistemática para facilitar su acceso,
                      gestión y actualización.
                    </p>
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">
                        Características principales:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Datos organizados y estructurados</li>
                        <li>Eliminación de redundancia</li>
                        <li>Integridad y consistencia de datos</li>
                        <li>Acceso concurrente y seguro</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">
                        Ejemplo práctico:
                      </h4>
                      <p className="text-sm text-blue-600 dark:text-blue-400">
                        Una biblioteca universitaria utiliza una base de datos
                        para gestionar libros, usuarios, préstamos y
                        devoluciones, permitiendo consultas rápidas y
                        mantenimiento eficiente de la información.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Tab 2: Modelo Relacional */}
              <TabsContent value="modelo-relacional">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Network className="w-6 h-6 text-green-600" />
                      <CardTitle>Modelo Relacional</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground leading-relaxed">
                      El <strong>Modelo Relacional</strong> organiza los datos
                      en tablas (relaciones) compuestas por filas (tuplas) y
                      columnas (atributos). Fue propuesto por Edgar F. Codd en
                      1970.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Componentes:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>
                            <strong>Tablas:</strong> Estructura de datos
                          </li>
                          <li>
                            <strong>Filas:</strong> Registros individuales
                          </li>
                          <li>
                            <strong>Columnas:</strong> Atributos de datos
                          </li>
                          <li>
                            <strong>Claves:</strong> Identificadores únicos
                          </li>
                        </ul>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Ventajas:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Simplicidad conceptual</li>
                          <li>Flexibilidad en consultas</li>
                          <li>Integridad referencial</li>
                          <li>Normalización de datos</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Tab 3: Modelo E-R */}
              <TabsContent value="modelo-er">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Layers className="w-6 h-6 text-purple-600" />
                      <CardTitle>Modelo Entidad-Relación (E-R)</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground leading-relaxed">
                      El <strong>Modelo Entidad-Relación</strong> es una
                      herramienta de diseño conceptual que representa la
                      estructura lógica de una base de datos mediante entidades,
                      atributos y relaciones.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-blue-600">
                          Entidades
                        </h4>
                        <p className="text-sm">
                          Objetos del mundo real que tienen existencia
                          independiente (Persona, Producto, Orden)
                        </p>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-green-600">
                          Atributos
                        </h4>
                        <p className="text-sm">
                          Propiedades que describen las entidades (nombre, edad,
                          precio, fecha)
                        </p>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-purple-600">
                          Relaciones
                        </h4>
                        <p className="text-sm">
                          Asociaciones entre entidades (compra, trabaja,
                          pertenece)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Tab 4: SGBD */}
              <TabsContent value="sgbd">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Settings className="w-6 h-6 text-orange-600" />
                      <CardTitle>
                        Sistema de Gestión de Base de Datos (SGBD)
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground leading-relaxed">
                      Un <strong>SGBD</strong> es un software que permite crear,
                      mantener y manipular bases de datos, proporcionando una
                      interfaz entre los usuarios y los datos almacenados.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">
                          Funciones principales:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Definición de datos (DDL)</li>
                          <li>Manipulación de datos (DML)</li>
                          <li>Control de acceso y seguridad</li>
                          <li>Gestión de transacciones</li>
                          <li>Recuperación ante fallos</li>
                        </ul>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">
                          Ejemplos populares:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">MySQL</Badge>
                          <Badge variant="secondary">PostgreSQL</Badge>
                          <Badge variant="secondary">Oracle</Badge>
                          <Badge variant="secondary">SQL Server</Badge>
                          <Badge variant="secondary">MongoDB</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Tab 5: Arquitectura */}
              <TabsContent value="arquitectura">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Layers className="w-6 h-6 text-red-600" />
                      <CardTitle>Arquitectura del SGBD</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground leading-relaxed">
                      La <strong>arquitectura de un SGBD</strong> define cómo se
                      organizan y estructuran los componentes del sistema para
                      proporcionar eficiencia, seguridad y abstracción de datos.
                    </p>
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-600">
                        Arquitectura de Tres Niveles (ANSI/SPARC):
                      </h4>
                      <div className="grid md:grid-cols-3 gap-4 mt-3">
                        <div className="bg-background p-3 rounded border">
                          <h5 className="font-medium text-blue-600">
                            Nivel Externo
                          </h5>
                          <p className="text-sm mt-1">
                            Vista del usuario individual
                          </p>
                        </div>
                        <div className="bg-background p-3 rounded border">
                          <h5 className="font-medium text-green-600">
                            Nivel Conceptual
                          </h5>
                          <p className="text-sm mt-1">Vista lógica global</p>
                        </div>
                        <div className="bg-background p-3 rounded border">
                          <h5 className="font-medium text-red-600">
                            Nivel Interno
                          </h5>
                          <p className="text-sm mt-1">
                            Vista física de almacenamiento
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Tab 6: Aplicaciones */}
              <TabsContent value="aplicaciones">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Building className="w-6 h-6 text-indigo-600" />
                      <CardTitle>
                        Áreas de Aplicación de las Bases de Datos
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground leading-relaxed">
                      Las bases de datos son fundamentales en prácticamente
                      todos los sectores de la economía y la sociedad moderna.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-blue-600">
                          Empresarial
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>ERP y CRM</li>
                          <li>Contabilidad</li>
                          <li>Recursos humanos</li>
                          <li>Inventarios</li>
                        </ul>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-green-600">
                          Servicios
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Banca y finanzas</li>
                          <li>Telecomunicaciones</li>
                          <li>E-commerce</li>
                          <li>Reservas y booking</li>
                        </ul>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-purple-600">
                          Sectores Públicos
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Salud y hospitales</li>
                          <li>Educación</li>
                          <li>Gobierno</li>
                          <li>Investigación</li>
                        </ul>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-orange-600">
                          Tecnología
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Redes sociales</li>
                          <li>Big Data</li>
                          <li>IoT</li>
                          <li>Inteligencia artificial</li>
                        </ul>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-red-600">
                          Entretenimiento
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Streaming</li>
                          <li>Gaming</li>
                          <li>Medios digitales</li>
                          <li>Deportes</li>
                        </ul>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-indigo-600">
                          Manufactura
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Control de producción</li>
                          <li>Calidad</li>
                          <li>Logística</li>
                          <li>Mantenimiento</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-muted/50 border-t py-8 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600 rounded">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Fundamentos de BD
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Guía educativa completa
                  </p>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-sm text-muted-foreground">
                  Material educativo para estudiantes y profesionales
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  © 2025 - Conceptos fundamentales de bases de datos
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
