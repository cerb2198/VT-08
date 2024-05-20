<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<!-- Define la plantilla para el elemento raíz -->
<xsl:template match="/">
  <html>
    <head>
      <title>Ejemplo de XSL</title>
    </head>
    <body>
      <h1>Listado de Clases</h1>
      <table border="1">
        <tr>
          <th>ID</th>
          <th>Nombre</th>
        </tr>
        <!-- Aplica plantillas para cada elemento 'clase' -->
        <xsl:apply-templates select="//clase"/>
      </table>
    </body>
  </html>
</xsl:template>

<!-- Plantilla para cada elemento 'clase' -->
<xsl:template match="clase">
  <tr>
    <td><xsl:value-of select="id"/></td>
    <td><xsl:value-of select="nombre"/></td>
  </tr>
</xsl:template>

</xsl:stylesheet>
