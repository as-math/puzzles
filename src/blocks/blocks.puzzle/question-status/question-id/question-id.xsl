<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:puzzle="http://as-math.github.io/puzzles/src/blocks/blocks.puzzle"
>

	<xsl:template match="puzzle:question-id">
		<xsl:element name="div">
			<xsl:attribute name="class">
				<xsl:text>question-id </xsl:text>
				<xsl:value-of select="@class" />
			</xsl:attribute>
			<xsl:value-of select="concat('#', @id)" />
		</xsl:element>
	</xsl:template>

</xsl:stylesheet>
