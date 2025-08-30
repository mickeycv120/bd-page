import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Building2,
  Heart,
  GraduationCap,
  Smartphone,
  Gamepad2,
  ShoppingCart,
} from "lucide-react";

export default function AplicacionesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-950 dark:to-blue-900 py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-indigo-600 rounded-full">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground text-balance">
                Áreas de Aplicación
              </h1>
              <p className="text-muted-foreground mt-2">
                Usos prácticos en diferentes sectores
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
              <CardTitle>Importancia de las Bases de Datos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground leading-relaxed text-lg">
                Las bases de datos son fundamentales en prácticamente todos los
                sectores de la economía y la sociedad moderna, desde pequeños
                negocios hasta grandes corporaciones multinacionales.
              </p>
              <p className="text-muted-foreground">
                Su versatilidad y capacidad de gestionar información de manera
                eficiente las convierte en una herramienta indispensable para la
                toma de decisiones y la operación diaria de organizaciones.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Sector Empresarial */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-blue-600">
                    Sector Empresarial
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold mb-2">ERP y CRM</h4>
                    <p className="text-sm text-muted-foreground">
                      Sistemas de planificación empresarial y gestión de
                      relaciones con clientes
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold mb-2">
                      Contabilidad y Finanzas
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Registro de transacciones, estados financieros y análisis
                      económico
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold mb-2">Recursos Humanos</h4>
                    <p className="text-sm text-muted-foreground">
                      Gestión de empleados, nóminas, evaluaciones y capacitación
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold mb-2">
                      Control de Inventarios
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Seguimiento de productos, stock, proveedores y cadena de
                      suministro
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sector Servicios */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-6 h-6 text-green-600" />
                  <CardTitle className="text-green-600">
                    Sector Servicios
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-950 p-3 rounded border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold mb-2">Banca y Finanzas</h4>
                    <p className="text-sm text-muted-foreground">
                      Cuentas, transacciones, préstamos, inversiones y análisis
                      de riesgo
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950 p-3 rounded border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold mb-2">Telecomunicaciones</h4>
                    <p className="text-sm text-muted-foreground">
                      Gestión de clientes, facturación, redes y servicios de
                      comunicación
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950 p-3 rounded border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold mb-2">E-commerce</h4>
                    <p className="text-sm text-muted-foreground">
                      Catálogos de productos, carritos de compra, pagos y
                      logística
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950 p-3 rounded border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold mb-2">Reservas y Booking</h4>
                    <p className="text-sm text-muted-foreground">
                      Hoteles, vuelos, restaurantes, eventos y gestión de
                      disponibilidad
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sector Salud */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-red-600" />
                  <CardTitle className="text-red-600">Sector Salud</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-red-50 dark:bg-red-950 p-3 rounded border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold mb-2">Historiales Médicos</h4>
                    <p className="text-sm text-muted-foreground">
                      Registros de pacientes, diagnósticos, tratamientos y
                      medicamentos
                    </p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-950 p-3 rounded border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold mb-2">Gestión Hospitalaria</h4>
                    <p className="text-sm text-muted-foreground">
                      Citas, quirófanos, personal médico, equipos y recursos
                    </p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-950 p-3 rounded border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold mb-2">Investigación Médica</h4>
                    <p className="text-sm text-muted-foreground">
                      Estudios clínicos, análisis epidemiológicos y desarrollo
                      farmacéutico
                    </p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-950 p-3 rounded border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold mb-2">Seguros de Salud</h4>
                    <p className="text-sm text-muted-foreground">
                      Pólizas, reclamaciones, coberturas y análisis actuarial
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sector Educación */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-purple-600" />
                  <CardTitle className="text-purple-600">
                    Sector Educación
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-purple-50 dark:bg-purple-950 p-3 rounded border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold mb-2">Gestión Académica</h4>
                    <p className="text-sm text-muted-foreground">
                      Estudiantes, profesores, cursos, calificaciones y horarios
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-950 p-3 rounded border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold mb-2">
                      Bibliotecas Digitales
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Catálogos, préstamos, recursos digitales y sistemas de
                      búsqueda
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-950 p-3 rounded border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold mb-2">E-Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Plataformas educativas, contenido multimedia y seguimiento
                      de progreso
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-950 p-3 rounded border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold mb-2">
                      Investigación Académica
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Proyectos, publicaciones, colaboraciones y análisis de
                      datos
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tecnología */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Smartphone className="w-6 h-6 text-orange-600" />
                  <CardTitle className="text-orange-600">Tecnología</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-orange-50 dark:bg-orange-950 p-3 rounded border border-orange-200 dark:border-orange-800">
                    <h4 className="font-semibold mb-2">Redes Sociales</h4>
                    <p className="text-sm text-muted-foreground">
                      Perfiles de usuarios, publicaciones, conexiones y análisis
                      de comportamiento
                    </p>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-950 p-3 rounded border border-orange-200 dark:border-orange-800">
                    <h4 className="font-semibold mb-2">Big Data y Analytics</h4>
                    <p className="text-sm text-muted-foreground">
                      Procesamiento masivo de datos, machine learning y business
                      intelligence
                    </p>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-950 p-3 rounded border border-orange-200 dark:border-orange-800">
                    <h4 className="font-semibold mb-2">
                      Internet of Things (IoT)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Sensores, dispositivos conectados y análisis de datos en
                      tiempo real
                    </p>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-950 p-3 rounded border border-orange-200 dark:border-orange-800">
                    <h4 className="font-semibold mb-2">
                      Inteligencia Artificial
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Datasets de entrenamiento, modelos ML y sistemas de
                      recomendación
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Entretenimiento */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Gamepad2 className="w-6 h-6 text-indigo-600" />
                  <CardTitle className="text-indigo-600">
                    Entretenimiento
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-indigo-50 dark:bg-indigo-950 p-3 rounded border border-indigo-200 dark:border-indigo-800">
                    <h4 className="font-semibold mb-2">Streaming</h4>
                    <p className="text-sm text-muted-foreground">
                      Catálogos de contenido, perfiles de usuario y sistemas de
                      recomendación
                    </p>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-950 p-3 rounded border border-indigo-200 dark:border-indigo-800">
                    <h4 className="font-semibold mb-2">Gaming</h4>
                    <p className="text-sm text-muted-foreground">
                      Perfiles de jugadores, estadísticas, logros y economías
                      virtuales
                    </p>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-950 p-3 rounded border border-indigo-200 dark:border-indigo-800">
                    <h4 className="font-semibold mb-2">Medios Digitales</h4>
                    <p className="text-sm text-muted-foreground">
                      Gestión de contenido, metadatos, derechos de autor y
                      distribución
                    </p>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-950 p-3 rounded border border-indigo-200 dark:border-indigo-800">
                    <h4 className="font-semibold mb-2">Deportes</h4>
                    <p className="text-sm text-muted-foreground">
                      Estadísticas de jugadores, resultados, análisis y gestión
                      de equipos
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Tendencias Futuras</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-600">
                    Bases de Datos en la Nube
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Mayor adopción de servicios cloud para escalabilidad y
                    reducción de costos
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-600">
                    Automatización con IA
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Optimización automática, detección de anomalías y
                    mantenimiento predictivo
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-purple-600">
                    Bases de Datos Multimodelo
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Sistemas que soportan múltiples modelos de datos en una sola
                    plataforma
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
