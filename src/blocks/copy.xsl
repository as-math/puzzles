<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="*" mode="#default copy">
	<xsl:copy copy-namespaces="no">
			<xsl:apply-templates select="* | @* | text()" />
	</xsl:copy>
</xsl:template>

<xsl:template match="@*" mode="#default copy">
	<xsl:copy />
</xsl:template>

<xsl:template match="text()" mode="#default copy">
	<xsl:if test="normalize-space()">
		<xsl:value-of select="normalize-space()" />
	</xsl:if>
</xsl:template>

</xsl:stylesheet>
