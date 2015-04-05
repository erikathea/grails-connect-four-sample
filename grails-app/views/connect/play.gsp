<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="game.connect.Board" %>
<%@ page import="game.connect.Cell" %>

<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	<meta name="layout" content="main"/>
	<title><g:message code="game.connectfour.label"/></title>
</head>
<body>
  <div class="body">
  <%--<button onclick="end()"> End </button>
  	--%><div>
  		<table id="tallyboard">
  			<thead>
  			<tr>
  				<td id="playerCellA" class="text-red">
  					${playerA }
  				</td>
  				<td id="playerCellB" class="text-blue">
  					${playerB }
  				</td>
  			<tr/>
  			</thead>
  			<tr>
  				<td id="turnCell" class="player-a" colspan="2">
  					<h1 class="text-white">TURN</h1>
  				</td>
  			<tr/>
  		</table>
  	</div>

  	<table id="board">
  		<tr class="0">
  		<g:each in="${board.cells}" var="cell">
  			<td class="${cell.y}">
  				<button class="cellButton buttons" id="${cell.x}-${cell.y}" data-row="${cell.x}" data-col="${cell.y}">
  				o
  				</button>
  			</td>

  			<g:if test="${cell.y == (board.cols - 1) }">
  				</tr>
  				<g:if test="${cell.x != (board.rows - 1) }">
  					<tr class="${cell.x + 1}">
  				</g:if>
  			</g:if>
  		</g:each>
  	</table>
  	<input type="hidden" id="clicks" value="0"/>


  </div>
  <script type="text/javascript" src="${resource(dir: 'js', file: 'connectfour.js')}"></script>
</body>
</html>