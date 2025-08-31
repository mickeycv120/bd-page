import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Database,
  Network,
  Settings,
  Users,
  Building,
  Layers,
  BookOpen,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const topics = [
  {
    title: "¿Qué es una Base de Datos?",
    description: "Conceptos fundamentales y características principales",
    icon: Database,
    href: "/que-es-bd",
    color: "text-blue-600",
  },
  {
    title: "Modelo Relacional",
    description: "Organización de datos en tablas y relaciones",
    icon: Network,
    href: "/modelo-relacional",
    color: "text-green-600",
  },
  {
    title: "Modelo Entidad-Relación",
    description: "Diseño conceptual con entidades y relaciones",
    icon: Layers,
    href: "/modelo-er",
    color: "text-purple-600",
  },
  {
    title: "Sistema de Gestión (SGBD)",
    description: "Software para crear y manipular bases de datos",
    icon: Settings,
    href: "/sgbd",
    color: "text-orange-600",
  },
  {
    title: "Arquitectura del SGBD",
    description: "Estructura y organización de componentes",
    icon: Building,
    href: "/arquitectura",
    color: "text-red-600",
  },
  {
    title: "Áreas de Aplicación",
    description: "Usos prácticos en diferentes sectores",
    icon: Users,
    href: "/aplicaciones",
    color: "text-indigo-600",
  },
];

export default function HomePage() {
  return (
    <div>
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

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Explora los Conceptos
            </h2>
            <p className="text-muted-foreground">
              Haz clic en cualquier tarjeta para comenzar tu aprendizaje.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => {
              const Icon = topic.icon;
              return (
                <Link key={topic.href} href={topic.href}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className={`w-6 h-6 ${topic.color}`} />
                        <CardTitle className="text-lg">{topic.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">
                        {topic.description}
                      </p>
                      <div className="flex items-center text-sm text-blue-600 group-hover:text-blue-700">
                        Aprender más
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
