<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	<meta name="layout" content="main"/>
	<title><g:message code="game.connectfour.label"/></title>
</head>
<body>
  <div class="body" role="main">
  	<g:form action="play" controller="connect">
  		<div>
  			Board Dimension: <g:textField name="rows" value="6" size="2"/> by <g:textField name="cols" value="7" size="2"/>
  		</div>
  		<div>
  			Player A: <g:textField name="playerA" value="You"/>
  		</div>
  		<div>
  			Player B: <g:textField name="playerB" value="Computer"/>
  		</div>
  		<g:submitButton name="Play"/>
  	</g:form>
  </div>
</body>
</html>