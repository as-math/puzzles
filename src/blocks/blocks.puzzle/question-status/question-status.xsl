<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:puzzle="http://as-math.github.io/puzzles/src/blocks/blocks.puzzle"
>

	<xsl:import href="question-id/question-id.xsl" />

	<xsl:template match="puzzle:question-status">
		<xsl:element name="div">
			<xsl:attribute name="class">
				<xsl:text>question-status </xsl:text>
				<xsl:value-of select="@class" />
			</xsl:attribute>
			<xsl:variable name="var__question-id">
				<puzzle:question-id>
					<xsl:if test="@id">
						<xsl:attribute name="id" select="@id" />
					</xsl:if>
				</puzzle:question-id>
			</xsl:variable>
			<xsl:apply-templates select="$var__question-id" />
			<div class="question-result" />
			<xsl:for-each select="tokenize(@lang_buttons, ' ')">
				<button class="button-lang" is="puzzle-button-lang">
					<xsl:attribute name="data-lang">
						<xsl:value-of select="." />
					</xsl:attribute>
				</button>
			</xsl:for-each>
		</xsl:element>
	</xsl:template>

	<xsl:template name="generate_question-status">
		<xsl:param name="id" />
		<xsl:param name="lang_buttons" />
		<xsl:variable name="var__question-status">
			<puzzle:question-status>
				<xsl:if test="$id">
						<xsl:attribute name="id">
							<xsl:value-of select="$id"/>
							<xsl:if test="count(../puzzle:question)+count(../puzzle:questions) > 1">
								<xsl:text>_</xsl:text>
									<xsl:value-of select="count(preceding-sibling::puzzle:question)+count(preceding-sibling::puzzle:questions)+1" />
							</xsl:if>
						</xsl:attribute>
				</xsl:if>
				<xsl:if test="$lang_buttons">
					<xsl:if test="count(preceding-sibling::puzzle:question)+count(preceding-sibling::puzzle:questions)=0">
						<xsl:attribute name="lang_buttons" select="$lang_buttons" />
					</xsl:if>
						
				</xsl:if>
			</puzzle:question-status>
		</xsl:variable>
		<xsl:apply-templates select="$var__question-status" />
	</xsl:template>

</xsl:stylesheet>
