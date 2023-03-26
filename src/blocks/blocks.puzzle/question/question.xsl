<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:puzzle="http://as-math.github.io/puzzles/src/blocks/blocks.puzzle"
>

	<xsl:template match="puzzle:question">
		<xsl:param name="id" />
		<xsl:param name="lang_buttons" />
		<xsl:call-template name="generate_question-status">
				<xsl:with-param name="id">
					<xsl:value-of select="$id" />
				</xsl:with-param>
				<xsl:with-param name="lang_buttons">
					<xsl:value-of select="$lang_buttons" />
				</xsl:with-param>
		</xsl:call-template>
		<xsl:variable name="var__question">
			<input class="question__input" is="question-input">
				<xsl:if test="puzzle:text[not(@lang)]">
					<xsl:attribute name="data-text">
						<xsl:value-of select="puzzle:text[not(@lang)]" />
					</xsl:attribute>
				</xsl:if>
				<xsl:if test="puzzle:text[@lang='en']">
					<xsl:attribute name="data-text-en">
						<xsl:value-of select="puzzle:text[@lang='en']" />
					</xsl:attribute>
				</xsl:if>
				<xsl:if test="puzzle:text[@lang='ru']">
					<xsl:attribute name="data-text-ru">
						<xsl:value-of select="puzzle:text[@lang='ru']" />
					</xsl:attribute>
				</xsl:if>
				<xsl:if test="puzzle:text[@lang='eo']">
					<xsl:attribute name="data-text-eo">
						<xsl:value-of select="puzzle:text[@lang='eo']" />
					</xsl:attribute>
				</xsl:if>
			</input>
			<div class="question__buttons-block">
				<button class="question__button puzzle-button-check" is="puzzle-button-check" />
				<button class="question__button">?</button>
			</div>
		</xsl:variable>
		<xsl:apply-templates select="$var__question" />
	</xsl:template>

</xsl:stylesheet>
