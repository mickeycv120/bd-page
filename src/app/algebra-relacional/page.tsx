"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AlgebraRelacionalPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3">Álgebra Relacional</h1>
        <p className="text-muted-foreground">
          Conjunto de operaciones para consultar y combinar relaciones en el modelo relacional. A continuación se presentan las operaciones principales con definición y ejemplos.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge variant="outline">Unión</Badge>
          <Badge variant="outline">Intersección</Badge>
          <Badge variant="outline">Diferencia</Badge>
          <Badge variant="outline">Selección</Badge>
          <Badge variant="outline">Proyección</Badge>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Unión */}
        <Card>
          <CardHeader>
            <CardTitle className="text-teal-600">Unión (R ∪ S)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Devuelve las tuplas que aparecen en <strong>R</strong> o en <strong>S</strong> (o en ambas). Requiere que las relaciones tengan el mismo esquema (mismos atributos y tipos).
            </p>
            <div className="space-y-2 mb-4">
              <ul className="text-sm list-disc pl-5 space-y-1">
                <li><span className="font-medium">Notación:</span> R ∪ S</li>
                <li><span className="font-medium">Requisito:</span> R y S deben ser union‑compatible.</li>
                <li><span className="font-medium">Elimina duplicados:</span> Sí (el resultado es un conjunto).</li>
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Relaciones de ejemplo</h4>
                <div className="text-xs text-muted-foreground mb-1">R(A, B)</div>
                <table className="w-full text-sm border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="p-2 border">A</th>
                      <th className="p-2 border">B</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border">1</td>
                      <td className="p-2 border">2</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">2</td>
                      <td className="p-2 border">3</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-xs text-muted-foreground mt-3 mb-1">S(A, B)</div>
                <table className="w-full text-sm border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="p-2 border">A</th>
                      <th className="p-2 border">B</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border">2</td>
                      <td className="p-2 border">3</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">3</td>
                      <td className="p-2 border">4</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Resultado: R ∪ S</h4>
                <table className="w-full text-sm border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="p-2 border">A</th>
                      <th className="p-2 border">B</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border">1</td>
                      <td className="p-2 border">2</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">2</td>
                      <td className="p-2 border">3</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">3</td>
                      <td className="p-2 border">4</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Intersección */}
        <Card>
          <CardHeader>
            <CardTitle className="text-teal-600">Intersección (R ∩ S)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Devuelve las tuplas que aparecen en <strong>ambas</strong> relaciones.
            </p>
            <div className="space-y-2 mb-4">
              <ul className="text-sm list-disc pl-5 space-y-1">
                <li><span className="font-medium">Notación:</span> R ∩ S</li>
                <li><span className="font-medium">Requisito:</span> R y S deben ser union‑compatible.</li>
                <li><span className="font-medium">Elimina duplicados:</span> Sí.</li>
              </ul>
            </div>
            <h4 className="font-semibold mb-2">Resultado: R ∩ S</h4>
            <table className="w-full text-sm border">
              <thead>
                <tr className="bg-muted">
                  <th className="p-2 border">A</th>
                  <th className="p-2 border">B</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">2</td>
                  <td className="p-2 border">3</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Diferencia */}
        <Card>
          <CardHeader>
            <CardTitle className="text-teal-600">Diferencia (R − S)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Devuelve las tuplas que aparecen en <strong>R</strong> pero no en <strong>S</strong>.
            </p>
            <div className="space-y-2 mb-4">
              <ul className="text-sm list-disc pl-5 space-y-1">
                <li><span className="font-medium">Notación:</span> R − S</li>
                <li><span className="font-medium">Requisito:</span> R y S deben ser union‑compatible.</li>
                <li><span className="font-medium">Orden importa:</span> R − S ≠ S − R.</li>
              </ul>
            </div>
            <h4 className="font-semibold mb-2">Resultado: R − S</h4>
            <table className="w-full text-sm border">
              <thead>
                <tr className="bg-muted">
                  <th className="p-2 border">A</th>
                  <th className="p-2 border">B</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">1</td>
                  <td className="p-2 border">2</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Selección */}
        <Card>
          <CardHeader>
            <CardTitle className="text-teal-600">Selección (σ)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Filtra tuplas según un <strong>predicado</strong>. Ejemplo: σ<sub>B &gt; 2</sub>(R)
            </p>
            <div className="space-y-2 mb-4">
              <ul className="text-sm list-disc pl-5 space-y-1">
                <li><span className="font-medium">Notación:</span> σ<sub>condición</sub>(R)</li>
                <li><span className="font-medium">Resultado:</span> Misma estructura que R, solo tuplas que cumplen la condición.</li>
                <li><span className="font-medium">Ejemplo de condición:</span> σ<sub>edad &gt; 21</sub>(Estudiantes)</li>
              </ul>
            </div>
            <h4 className="font-semibold mb-2">Resultado: σ<sub>B &gt; 2</sub>(R)</h4>
            <table className="w-full text-sm border">
              <thead>
                <tr className="bg-muted">
                  <th className="p-2 border">A</th>
                  <th className="p-2 border">B</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">2</td>
                  <td className="p-2 border">3</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Proyección */}
        <Card>
          <CardHeader>
            <CardTitle className="text-teal-600">Proyección (π)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Selecciona <strong>columnas</strong> de una relación, eliminando duplicados. Ejemplo: π<sub>A</sub>(R)
            </p>
            <div className="space-y-2 mb-4">
              <ul className="text-sm list-disc pl-5 space-y-1">
                <li><span className="font-medium">Notación:</span> π<sub>A1, A2, ..., An</sub>(R)</li>
                <li><span className="font-medium">Resultado:</span> Relación con solo los atributos especificados; elimina duplicados de filas.</li>
                <li><span className="font-medium">Ejemplo:</span> π<sub>nombre, apellido</sub>(Estudiantes)</li>
              </ul>
            </div>
            <h4 className="font-semibold mb-2">Resultado: π<sub>A</sub>(R)</h4>
            <table className="w-full text-sm border">
              <thead>
                <tr className="bg-muted">
                  <th className="p-2 border">A</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">1</td>
                </tr>
                <tr>
                  <td className="p-2 border">2</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Contexto</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Estos operadores son parte del <em>álgebra relacional</em>, un lenguaje procedural fundamental para la manipulación y consulta de datos en modelos relacionales. Son la base teórica de consultas en SQL.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}