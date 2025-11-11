import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Code, GraduationCap, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div>
      <div className="space-y-12 px-4 md:px-8">
        {/* Team Introduction */}
        <div className="text-center pb-6 mt-8">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
            <Users className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Equipo de Desarrollo
          </h2>
          <p className="text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
            Tres estudiantes apasionados por las bases de datos y la educación
            tecnológica, trabajando juntos para crear recursos educativos de
            calidad.
          </p>
        </div>

        {/* Team Members Section */}
        <div className="grid md:grid-cols-3 gap-8 px-2">
          <Card className="border-2 border-gray-100 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">A</span>
              </div>
              <CardTitle className="text-xl">
                Francisco Efrain Coutiño Villegas
              </CardTitle>
              <CardDescription className="text-base">
                Estudiante | Programador front-end
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 px-6 pb-6">
              <div className="flex items-center gap-3 text-sm">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <span>Ingeniería en Sistemas</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Code className="w-5 h-5 text-blue-600" />
                <span>React y Next.js</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">B</span>
              </div>
              <CardTitle className="text-xl">
                Edouard Alighieri Nuñez Razón
              </CardTitle>
              <CardDescription className="text-base">
                Estudiante de Ingeniería en Sistemas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 px-6 pb-6">
              <div className="flex items-center gap-3 text-sm">
                <GraduationCap className="w-5 h-5 text-green-600" />
                <span>Ingeniería en Sistemas</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Code className="w-5 h-5 text-green-600" />
                <span>HTML y CSS</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">C</span>
              </div>
              <CardTitle className="text-xl">
                Daniela Gutierrez Barrera
              </CardTitle>
              <CardDescription className="text-base">
                Estudiante de Ingeniería en Sistemas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 px-6 pb-6">
              <div className="flex items-center gap-3 text-sm">
                <GraduationCap className="w-5 h-5 text-orange-600" />
                <span>Ingeniería en Sistemas</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Code className="w-5 h-5 text-orange-600" />
                <span>HTML y CSS</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">D</span>
              </div>
              <CardTitle className="text-xl">
                Daniel Eduardo Sanchez Montes
              </CardTitle>
              <CardDescription className="text-base">
                Estudiante de Ingeniería en Sistemas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 px-6 pb-6">
              <div className="flex items-center gap-3 text-sm">
                <GraduationCap className="w-5 h-5 text-cyan-600" />
                <span>Ingeniería en Sistemas</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Skills Section */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Code className="w-6 h-6 text-blue-600" />
            Habilidades usadas
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Next.js",
              "Tailwind CSS",
              "Investigación",
              "UX | UI",
            ].map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="bg-blue-100 text-blue-800 px-3 py-1 text-sm"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Project Info */}
        <div className="bg-white border-l-4 border-orange-500 pl-8 py-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Sobre el Proyecto
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-700">
              <MapPin className="w-5 h-5 text-orange-600" />
              <span className="text-lg">
                Instituto Tecnológico de Querétaro - México
              </span>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <Calendar className="w-5 h-5 text-orange-600" />
              <span className="text-lg">Proyecto Académico 2025</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <GraduationCap className="w-5 h-5 text-orange-600" />
              <span className="text-lg">
                Materia: Fundamentos de Bases de Datos
              </span>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 mb-5">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Nuestra Misión
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Como equipo de estudiantes, creemos que el aprendizaje colaborativo
            es fundamental. Este sitio web es nuestro proyecto conjunto para
            hacer que los conceptos de bases de datos sean más accesibles y
            comprensibles para otros estudiantes. Combinamos nuestras diferentes
            fortalezas en modelado, arquitectura y desarrollo para crear una
            experiencia educativa integral y práctica.
          </p>
        </div>
      </div>
    </div>
  );
}
