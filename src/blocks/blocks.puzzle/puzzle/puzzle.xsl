<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:puzzle="http://as-math.github.io/puzzles/src/blocks/blocks.puzzle"
>

	<xsl:import href="puzzle-content/puzzle-content.xsl" />
	<xsl:import href="../question-status/question-status.xsl" />
	<xsl:import href="../question/question.xsl" />

	<xsl:template match="puzzle:puzzle">
		<puzzle-element>
			<xsl:attribute name="class">
				<xsl:text>puzzle </xsl:text>
				<xsl:value-of select="@class" />
			</xsl:attribute>
			<xsl:attribute name="id">
				<xsl:text>puzzle_</xsl:text>
				<xsl:value-of select="@id" />
			</xsl:attribute>
			<xsl:apply-templates
        select="puzzle:puzzle-content | puzzle:question | puzzle:questions"
      >
				<xsl:with-param name="id">
					<xsl:value-of select="@id" />
				</xsl:with-param>
				<xsl:with-param name="lang_buttons">
					<xsl:value-of select="@langs" />
				</xsl:with-param>
			</xsl:apply-templates>
			<xsl:if test="not(puzzle:question | puzzle:questions)">
				<xsl:variable name="var__question-status">
					<puzzle:question-status>
						<xsl:if test="@id">
								<xsl:attribute name="id" select="@id" />
						</xsl:if>
						<xsl:if test="@langs">
								<xsl:attribute name="lang_buttons" select="@langs" />
						</xsl:if>
					</puzzle:question-status>
				</xsl:variable>
				<xsl:apply-templates select="$var__question-status" />
			</xsl:if>
		</puzzle-element>
	</xsl:template>

</xsl:stylesheet>
